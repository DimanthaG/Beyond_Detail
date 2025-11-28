import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Contact, SEO } from '../../components';
import { client, urlFor } from '../../client';
import { calculateReadingTime } from './blogContentFormatter';
import './Blog.scss';

const GoogleReviewsCarousel = React.lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

// Helper function to render Sanity block content
const BlockContent = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block, idx) => {
    // Handle text blocks
    if (block._type === 'block') {
      // Handle different heading styles
      if (block.style === 'h2') {
        return <h2 key={idx} className="blog-heading">{block.children?.map(child => child.text).join('')}</h2>;
      }
      if (block.style === 'h3') {
        return <h3 key={idx} className="blog-section-header">{block.children?.map(child => child.text).join('')}</h3>;
      }
      if (block.style === 'h4') {
        return <h4 key={idx} className="blog-subsection-header">{block.children?.map(child => child.text).join('')}</h4>;
      }
      if (block.style === 'blockquote') {
        return <blockquote key={idx} className="blog-quote">{block.children?.map(child => child.text).join('')}</blockquote>;
      }

      // Handle lists
      if (block.listItem === 'bullet') {
        return <li key={idx}>{block.children?.map(child => child.text).join('')}</li>;
      }
      if (block.listItem === 'number') {
        return <li key={idx}>{block.children?.map(child => child.text).join('')}</li>;
      }

      // Handle regular paragraphs with formatting
      const renderChildren = (children) => {
        if (!children) return '';
        return children.map((child, childIdx) => {
          let text = child.text;
          if (child.marks?.includes('strong')) {
            return <strong key={childIdx}>{text}</strong>;
          }
          if (child.marks?.includes('em')) {
            return <em key={childIdx}>{text}</em>;
          }
          if (child.marks?.includes('code')) {
            return <code key={childIdx}>{text}</code>;
          }
          return text;
        });
      };

      return <p key={idx} className="blog-paragraph">{renderChildren(block.children)}</p>;
    }

    // Handle images in content
    if (block._type === 'image') {
      return (
        <div key={idx} className="blog-content-image">
          <img
            src={urlFor(block).width(800).url()}
            alt={block.alt || 'Blog content image'}
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
          />
          {block.caption && <p className="image-caption">{block.caption}</p>}
        </div>
      );
    }

    return null;
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
    .filter(blog => blog._id !== currentBlog._id && blog.category === currentBlog.category)
    .slice(0, 3);

  if (related.length === 0) {
    // If no same category, get latest posts
    const latest = allBlogs
      .filter(blog => blog._id !== currentBlog._id)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 3);
    return latest.length > 0 ? (
      <section className="related-posts">
        <h3>Latest Posts</h3>
        <div className="related-posts-grid">
          {latest.map((blog) => (
            <Link key={blog._id} to={`/blog/${blog.slug.current}`} className="related-post-card">
              {blog.mainImage && (
                <img
                  src={urlFor(blog.mainImage).width(400).url()}
                  alt={blog.mainImage.alt || blog.title}
                  className="related-post-image"
                />
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
          <Link key={blog._id} to={`/blog/${blog.slug.current}`} className="related-post-card">
            {blog.mainImage && (
              <img
                src={urlFor(blog.mainImage).width(400).url()}
                alt={blog.mainImage.alt || blog.title}
                className="related-post-image"
              />
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
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        if (slug) {
          // Fetch single blog post
          const query = `*[_type == "blogPost" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            author,
            publishedAt,
            excerpt,
            mainImage,
            category,
            content,
            seoTitle,
            seoDescription,
            keywords
          }`;
          const blog = await client.fetch(query, { slug });
          setSelectedBlog(blog);

          // Also fetch all blogs for related posts
          const allBlogsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            author,
            publishedAt,
            excerpt,
            mainImage,
            category
          }`;
          const blogs = await client.fetch(allBlogsQuery);
          setAllBlogs(blogs);
        } else {
          // Fetch all blog posts for list view
          const query = `*[_type == "blogPost"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            author,
            publishedAt,
            excerpt,
            mainImage,
            category,
            content
          }`;
          const blogs = await client.fetch(query);
          setAllBlogs(blogs);
        }
      } catch (error) {
        console.error('[Blog] Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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
    const blogUrl = `${currentUrl.split('/blog')[0]}/blog/${selectedBlog.slug.current}`;
    const seoTitle = selectedBlog.seoTitle || `${selectedBlog.title} | Beyond Detail Toronto Blog`;
    const seoDescription = selectedBlog.seoDescription || selectedBlog.excerpt;

    return (
      <>
        <SEO
          title={seoTitle}
          description={seoDescription}
          name="Beyond Detail Toronto"
          type="article"
          keywords={selectedBlog.keywords?.join(', ') || `${selectedBlog.category}, car detailing, auto detailing, Toronto, Scarborough, Markham, Pickering`}
          image={selectedBlog.mainImage ? urlFor(selectedBlog.mainImage).width(1200).url() : undefined}
          url={blogUrl}
        />
        <div className="blog-detail">
          {/* Hero Section */}
          <div className="blog-hero">
            {selectedBlog.mainImage && (
              <div className="blog-hero-image">
                <img
                  src={urlFor(selectedBlog.mainImage).width(1200).url()}
                  alt={selectedBlog.mainImage.alt || selectedBlog.title}
                />
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
                <BlockContent blocks={selectedBlog.content} />
              </div>
            </div>

            {/* Share Buttons - Bottom */}
            <div className="blog-share-bottom">
              <ShareButtons title={selectedBlog.title} url={blogUrl} />
            </div>

            {/* Related Posts */}
            <RelatedPosts currentBlog={selectedBlog} allBlogs={allBlogs} />

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
          <h1>Auto Detailing Blog - Toronto & Scarborough</h1>
          <p className="blog-list-subtitle">
            Expert tips, guides, and insights on car detailing, paint protection, and vehicle maintenance
          </p>
        </div>
        <div className="blogs-grid">
          {allBlogs.length === 0 ? (
            <div className="no-blogs">
              <p>No blog posts yet. Check back soon for expert car detailing tips and guides!</p>
            </div>
          ) : (
            allBlogs.map((blog) => (
              <article key={blog._id} className="blog-card">
                <Link to={`/blog/${blog.slug.current}`} className="blog-card-link">
                  {blog.mainImage && (
                    <div className="blog-card-image-wrapper">
                      <img
                        src={urlFor(blog.mainImage).width(600).url()}
                        alt={blog.mainImage.alt || blog.title}
                        className="blog-image"
                      />
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
            ))
          )}
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
