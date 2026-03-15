// Utility to format blog content with sections, images, and rich formatting

export const formatContent = (content, blogSlug) => {
  if (!Array.isArray(content)) {
    return [{ type: 'paragraph', text: content }];
  }

  const formatted = [];
  let currentSection = null;
  let imageIndex = 0;

  content.forEach((item, index) => {
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
    } else if (/^[-•*]\s/.test(item)) {
      if (!currentSection || currentSection.type !== 'list') {
        if (currentSection) formatted.push(currentSection);
        currentSection = { type: 'list', items: [] };
      }
      currentSection.items.push(item.replace(/^[-•*]\s/, '').trim());
    } else if (/^[A-Z][^:]+:$/.test(item) && item.length < 50) {
      if (currentSection && currentSection.type === 'list') {
        formatted.push(currentSection);
        currentSection = null;
      }
      formatted.push({
        type: 'section-header',
        text: item.replace(':', ''),
      });
    } else {
      if (currentSection && currentSection.type === 'list') {
        formatted.push(currentSection);
        currentSection = null;
      }
      formatted.push({
        type: 'paragraph',
        text: item,
      });

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

  let wordCount = 0;
  content.forEach(block => {
    if (block._type === 'block' && block.children) {
      block.children.forEach(child => {
        if (child.text) {
          wordCount += child.text.split(/\s+/).length;
        }
      });
    }
  });

  const readingTime = Math.ceil(wordCount / 200); // 200 wpm
  return Math.max(1, readingTime);
};
