import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Contact, SEO } from '../../components';
import { blogImages, blogImageCollections, allBlogImages } from './blogImages';
import { formatContent, calculateReadingTime } from './blogContentFormatter';
import './Blog.scss';

const GoogleReviewsCarousel = React.lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

// Mock blog data with enhanced structure
const mockBlogs = [
  {
    id: '1',
    slug: '5-essential-tips-protect-vehicle-paint',
    title: '5 Essential Tips to Protect Your Vehicle\'s Paint',
    author: 'Beyond Detail Team',
    publishedAt: '2025-01-15',
    excerpt: 'Your vehicle\'s paint is constantly exposed to environmental hazards. Learn five professional tips from our detailing experts to keep your car\'s finish protected and looking new.',
    mainImage: blogImages['5-essential-tips-protect-vehicle-paint'],
    category: 'Paint Protection',
    content: [
      'Your vehicle\'s paint is under constant assault from UV rays, bird droppings, tree sap, road salt, and more. Protecting it requires a multi-faceted approach.',
      'Here are five essential tips to keep your paint looking pristine:',
      '1. Wash Regularly (Every 2 Weeks)',
      'Regular washing removes contaminants before they etch into the paint. Use a two-bucket method to prevent swirl marks. Always use pH-balanced car wash soap and microfiber towels.',
      '2. Use a Ceramic Coating',
      'A professional ceramic coating creates a protective barrier that lasts 1-3 years. It repels water, UV rays, and contaminants while adding a deep, glossy shine to your vehicle.',
      '3. Park in the Shade',
      'UV rays fade paint over time. Whenever possible, park in a garage or under cover to minimize sun exposure. This simple habit can extend the life of your paint significantly.',
      '4. Avoid Automatic Car Washes',
      'Automatic brushes cause micro-scratches that damage your paint over time. Use touchless or hand washes instead. If you must use an automatic wash, choose the brushless option.',
      '5. Get Professional Detail Regularly',
      'Have your paint professionally corrected and protected 1-2 times per year. Our team can remove damage before it becomes permanent and apply protective coatings to maintain your vehicle\'s finish.'
    ]
  },
  {
    id: '2',
    slug: 'ceramic-coating-vs-traditional-wax',
    title: 'Ceramic Coating vs Traditional Wax: Which is Right for You?',
    author: 'John Smith',
    publishedAt: '2025-01-10',
    excerpt: 'Understanding the differences between ceramic coatings and traditional wax can help you make the best choice for protecting your vehicle\'s paint.',
    mainImage: blogImages['ceramic-coating-vs-traditional-wax'],
    category: 'Ceramic Coating',
    content: [
      'When it comes to protecting your vehicle\'s paint, you have two main options: traditional wax and modern ceramic coatings. Each has its own benefits and drawbacks.',
      'Traditional Wax:',
      'Traditional car wax has been used for decades. It provides a temporary protective layer that typically lasts 1-3 months. Wax is affordable, easy to apply, and gives your car a nice shine. However, it requires frequent reapplication and doesn\'t offer the same level of protection as ceramic coatings.',
      'Ceramic Coating:',
      'Ceramic coatings are a newer technology that creates a semi-permanent bond with your paint. They can last 2-5 years with proper maintenance and offer superior protection against UV rays, chemical stains, and scratches. While more expensive upfront, they provide long-term value.',
      'Which Should You Choose?',
      'If you\'re looking for quick, affordable protection and don\'t mind reapplying every few months, traditional wax is a good option. However, if you want long-term protection and less maintenance, ceramic coating is the better investment.'
    ]
  },
  {
    id: '3',
    slug: 'preparing-your-car-for-winter',
    title: 'How to Prepare Your Vehicle for Winter Weather',
    author: 'Beyond Detail Team',
    publishedAt: '2025-01-05',
    excerpt: 'Winter weather can be harsh on your vehicle. Follow these expert tips to protect your car during the cold months and keep it looking great.',
    mainImage: blogImages['preparing-your-car-for-winter'],
    category: 'Seasonal Care',
    content: [
      'Winter weather brings unique challenges for vehicle owners. Salt, ice, and freezing temperatures can take a toll on your car\'s exterior and interior.',
      'Exterior Protection:',
      'Before winter arrives, apply a quality ceramic coating or wax to protect your paint from salt and road grime. This barrier will make cleaning easier throughout the winter months.',
      'Regular Cleaning:',
      'Wash your vehicle regularly during winter to remove salt and chemicals that can corrode your paint and undercarriage. Use warm water and a quality car wash soap designed for winter conditions.',
      'Interior Care:',
      'Protect your interior with floor mats and seat covers. Salt and snow can damage carpets and upholstery. Vacuum regularly to remove debris and moisture.',
      'Maintenance Tips:',
      'Keep your vehicle in the garage when possible. If you don\'t have a garage, consider a car cover to protect against the elements. Also, ensure all seals are in good condition to prevent moisture intrusion.'
    ]
  },
  {
    id: '4',
    slug: 'interior-detailing-guide',
    title: 'The Complete Guide to Interior Detailing',
    author: 'Sarah Johnson',
    publishedAt: '2024-12-28',
    excerpt: 'Learn professional techniques for deep cleaning and protecting your vehicle\'s interior to keep it looking and smelling like new.',
    mainImage: blogImages['interior-detailing-guide'],
    category: 'Interior Detailing',
    content: [
      'A clean interior not only looks great but also preserves the value of your vehicle. Here\'s a comprehensive guide to professional interior detailing.',
      'Cleaning Steps:',
      '- Remove all items and personal belongings',
      '- Vacuum thoroughly, including under seats',
      '- Clean dashboard and surfaces with appropriate cleaners',
      '- Shampoo carpets and upholstery',
      '- Clean windows from inside',
      '- Apply protectants to vinyl and leather',
      'Materials Needed:',
      'Use quality microfiber towels, pH-balanced cleaners, and protectants designed specifically for automotive use. Avoid household cleaners that can damage materials.',
      'Professional Services:',
      'For best results, consider professional interior detailing services. Our team uses commercial-grade equipment and products to achieve results that last.'
    ]
  },
  {
    id: '5',
    slug: 'headlight-restoration-benefits',
    title: 'Why Headlight Restoration Matters for Your Safety',
    author: 'Beyond Detail Team',
    publishedAt: '2024-12-20',
    excerpt: 'Cloudy or yellowed headlights don\'t just look bad—they can significantly reduce visibility and compromise your safety on the road.',
    mainImage: blogImages['headlight-restoration-benefits'],
    category: 'Safety',
    content: [
      'Over time, headlights become cloudy and yellowed due to UV damage, oxidation, and environmental factors. This reduces light output and can make nighttime driving dangerous.',
      'Safety Impact:',
      'Cloudy headlights can reduce light output by up to 80%, significantly decreasing visibility at night. This increases the risk of accidents and makes driving hazardous.',
      'Restoration Process:',
      '- Sanding away the damaged surface layer',
      '- Polishing to restore clarity',
      '- Applying UV-resistant protective coating',
      '- Sealing to prevent future damage',
      'Benefits:',
      'Restored headlights improve visibility, enhance your vehicle\'s appearance, and can even increase your vehicle\'s resale value. The protective coating applied during restoration helps prevent future damage.'
    ]
  },
  {
    id: '6',
    slug: 'paint-correction-process-explained',
    title: 'Inside Look: Our Paint Correction Process',
    author: 'Mike Chen',
    publishedAt: '2024-12-15',
    excerpt: 'Discover what happens during a professional paint correction service and how we restore your vehicle\'s finish to showroom condition.',
    mainImage: blogImages['paint-correction-process-explained'],
    category: 'Paint Correction',
    content: [
      'Paint correction is a meticulous process that removes swirl marks, scratches, and other imperfections from your vehicle\'s paint without damaging the original finish.',
      'Step 1: Assessment',
      'We start by thoroughly inspecting your vehicle\'s paint under different lighting conditions to identify all imperfections and determine the best approach.',
      'Step 2: Preparation',
      'Your vehicle is washed and clayed to remove surface contaminants. This ensures a clean surface for correction work.',
      'Step 3: Correction',
      'Using professional-grade compounds and polishing machines, we carefully remove imperfections layer by layer. Multiple stages may be required for severe damage.',
      'Step 4: Polishing',
      'After correction, the paint is polished to restore its gloss and clarity. This step enhances the shine and prepares the surface for protection.',
      'Step 5: Protection',
      'Finally, we apply a protective coating or sealant to preserve the corrected finish and protect against future damage.',
      'The result is a flawless, mirror-like finish that makes your vehicle look brand new.'
    ]
  }
];

// Helper function to render content
const renderContent = (content, blogSlug) => {
  const formatted = formatContent(content, blogSlug);
  const imageCollection = blogImageCollections[blogSlug] || [];
  let imageIndex = 0;

  return formatted.map((item, idx) => {
    switch (item.type) {
      case 'heading':
        return (
          <h2 key={idx} className="blog-heading">
            {item.text}
          </h2>
        );
      case 'section-header':
        return (
          <h3 key={idx} className="blog-section-header">
            {item.text}
          </h3>
        );
      case 'list':
        return (
          <ul key={idx} className="blog-list-items">
            {item.items.map((listItem, listIdx) => (
              <li key={listIdx}>{listItem}</li>
            ))}
          </ul>
        );
      case 'image-placeholder':
        if (imageCollection.length > 0 && imageIndex < imageCollection.length) {
          const imgSrc = imageCollection[imageIndex];
          imageIndex++;
          return (
            <div key={idx} className="blog-content-image">
              <img src={imgSrc} alt={`Blog content image ${imageIndex}`} />
            </div>
          );
        }
        return null;
      case 'paragraph':
      default:
        return (
          <p key={idx} className="blog-paragraph">
            {item.text}
          </p>
        );
    }
  });
};

// Share buttons component
const ShareButtons = ({ title, url }) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="blog-share-buttons">
      <span className="share-label">Share:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-facebook"
        aria-label="Share on Facebook"
      >
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-twitter"
        aria-label="Share on Twitter"
      >
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-linkedin"
        aria-label="Share on LinkedIn"
      >
        LinkedIn
      </a>
      <button
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          alert('Link copied to clipboard!');
        }}
        className="share-btn share-copy"
        aria-label="Copy link"
      >
        Copy Link
      </button>
    </div>
  );
};

// Related posts component
const RelatedPosts = ({ currentBlog, allBlogs }) => {
  const related = allBlogs
    .filter(blog => blog.id !== currentBlog.id && blog.category === currentBlog.category)
    .slice(0, 3);

  if (related.length === 0) {
    // If no same category, get latest posts
    const latest = allBlogs
      .filter(blog => blog.id !== currentBlog.id)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 3);
    return latest.length > 0 ? (
      <section className="related-posts">
        <h3>Latest Posts</h3>
        <div className="related-posts-grid">
          {latest.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="related-post-card">
              {blog.mainImage && (
                <img src={blog.mainImage} alt={blog.title} className="related-post-image" />
              )}
              <div className="related-post-content">
                <h4>{blog.title}</h4>
                <p className="related-post-excerpt">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    ) : null;
  }

  return (
    <section className="related-posts">
      <h3>Related Posts</h3>
      <div className="related-posts-grid">
        {related.map((blog) => (
          <Link key={blog.id} to={`/blog/${blog.slug}`} className="related-post-card">
            {blog.mainImage && (
              <img src={blog.mainImage} alt={blog.title} className="related-post-image" />
            )}
            <div className="related-post-content">
              <h4>{blog.title}</h4>
              <p className="related-post-excerpt">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

function Blog() {
  const { slug } = useParams();
  const location = useLocation();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (slug) {
        const blog = mockBlogs.find(b => b.slug === slug);
        setSelectedBlog(blog || null);
      }
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  // Single Blog View
  if (selectedBlog) {
    const readingTime = calculateReadingTime(selectedBlog.content);
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const blogUrl = `${currentUrl.split('/blog')[0]}/blog/${selectedBlog.slug}`;

    return (
      <>
        <SEO
          title={`${selectedBlog.title} | Beyond Detail Toronto Blog`}
          description={selectedBlog.excerpt}
          name="Beyond Detail Toronto"
          type="article"
          keywords={`${selectedBlog.category}, car detailing, auto detailing, Toronto, Scarborough, Markham, Pickering`}
          image={selectedBlog.mainImage}
          url={blogUrl}
        />
        <div className="blog-detail">
          {/* Hero Section */}
          <div className="blog-hero">
            {selectedBlog.mainImage && (
              <div className="blog-hero-image">
                <img src={selectedBlog.mainImage} alt={selectedBlog.title} />
              </div>
            )}
            <div className="blog-hero-content">
              <div className="blog-category-badge">{selectedBlog.category || 'Blog'}</div>
              <h1 className="blog-title">{selectedBlog.title}</h1>
              <div className="blog-meta-info">
                <div className="blog-author-info">
                  <span className="blog-author">{selectedBlog.author || 'Admin'}</span>
                  <span className="blog-date">
                    {new Date(selectedBlog.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="blog-reading-time">
                  <span className="reading-time-icon">⏱️</span>
                  {readingTime} min read
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="blog-article">
            <div className="blog-content-wrapper">
              {/* Share Buttons - Sticky */}
              <div className="blog-share-sticky">
                <ShareButtons title={selectedBlog.title} url={blogUrl} />
              </div>

              {/* Article Content */}
              <div className="blog-article-content">
                {renderContent(selectedBlog.content, selectedBlog.slug)}
              </div>
            </div>

            {/* Share Buttons - Bottom */}
            <div className="blog-share-bottom">
              <ShareButtons title={selectedBlog.title} url={blogUrl} />
            </div>

            {/* Related Posts */}
            <RelatedPosts currentBlog={selectedBlog} allBlogs={mockBlogs} />

            {/* Back to Blog */}
            <div className="blog-navigation">
              <Link to="/blog" className="back-to-blog-btn">
                ← Back to All Posts
              </Link>
            </div>
          </article>
        </div>
        <Suspense fallback={null}>
          <GoogleReviewsCarousel />
        </Suspense>
        <Contact />
      </>
    );
  }

  // Blog List View
  return (
    <>
      <SEO
        title="Blog | Beyond Detail Toronto - Expert Auto Detailing Tips & Guides"
        description="Read expert guides and tips on car detailing, paint protection, ceramic coating, and vehicle maintenance from Beyond Detail Toronto. Serving Toronto, Scarborough, Markham, and Pickering."
        name="Beyond Detail Toronto"
        type="website"
        keywords="car detailing blog, auto detailing tips, paint protection guide, ceramic coating information, Toronto car care"
      />
      <div className="blog-list">
        <div className="blog-list-header">
          <h1>Our Blog</h1>
          <p className="blog-list-subtitle">
            Expert tips, guides, and insights on car detailing, paint protection, and vehicle maintenance
          </p>
        </div>
        <div className="blogs-grid">
          {mockBlogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <Link to={`/blog/${blog.slug}`} className="blog-card-link">
                {blog.mainImage && (
                  <div className="blog-card-image-wrapper">
                    <img src={blog.mainImage} alt={blog.title} className="blog-image" />
                    {blog.category && (
                      <span className="blog-card-category">{blog.category}</span>
                    )}
                  </div>
                )}
                <div className="blog-info">
                  <h2 className="blog-card-title">{blog.title}</h2>
                  <p className="excerpt">{blog.excerpt}</p>
                  <div className="blog-footer">
                    <div className="blog-card-meta">
                      <span className="author">{blog.author || 'Admin'}</span>
                      <span className="date">
                        {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="blog-card-reading-time">
                      {calculateReadingTime(blog.content)} min read
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <Contact />
    </>
  );
}

export default Blog;
