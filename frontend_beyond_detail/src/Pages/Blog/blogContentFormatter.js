// Utility to format blog content with sections, images, and rich formatting

export const formatContent = (content, blogSlug) => {
  if (!Array.isArray(content)) {
    return [{ type: 'paragraph', text: content }];
  }

  const formatted = [];
  let currentSection = null;
  let imageIndex = 0;

  content.forEach((item, index) => {
    // Check if it's a heading (starts with number or specific keywords)
    if (/^(\d+\.|Step \d+:|#|##)/i.test(item)) {
      if (currentSection && currentSection.type === 'list') {
        formatted.push(currentSection);
        currentSection = null;
      }
      const headingText = item.replace(/^(\d+\.|Step \d+:|#+|##+)\s*/i, '').trim();
      formatted.push({
        type: 'heading',
        level: 2,
        text: headingText,
      });
    }
    // Check if it's a list item
    else if (/^[-•\*]\s/.test(item)) {
      if (!currentSection || currentSection.type !== 'list') {
        if (currentSection) formatted.push(currentSection);
        currentSection = { type: 'list', items: [] };
      }
      currentSection.items.push(item.replace(/^[-•\*]\s/, '').trim());
    }
    // Check if it's a section header (ends with colon and is short)
    else if (/^[A-Z][^:]+:$/.test(item) && item.length < 50) {
      if (currentSection && currentSection.type === 'list') {
        formatted.push(currentSection);
        currentSection = null;
      }
      formatted.push({
        type: 'section-header',
        text: item.replace(':', ''),
      });
    }
    // Regular paragraph
    else {
      if (currentSection && currentSection.type === 'list') {
        formatted.push(currentSection);
        currentSection = null;
      }
      formatted.push({
        type: 'paragraph',
        text: item,
      });

      // Add images strategically throughout the content (every 3-4 paragraphs)
      if ((index + 1) % 4 === 0) {
        formatted.push({
          type: 'image-placeholder',
          index: imageIndex,
        });
        imageIndex++;
      }
    }
  });

  if (currentSection) formatted.push(currentSection);

  return formatted;
};

export const calculateReadingTime = (content) => {
  if (!Array.isArray(content)) return 2;
  const words = content.join(' ').split(/\s+/).length;
  const readingTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute
  return Math.max(1, readingTime);
};

