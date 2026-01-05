import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Contact, SEO } from '../../components';
import { client, urlFor } from '../../client';
import { calculateReadingTime } from './blogContentFormatter';
import { BlogLinker } from '../../utils/blogLinker';
import { LOCAL_BLOG_POSTS } from './LocalBlogContent';
import './Blog.scss';

// Placeholder post is now replaced by robust local content
const PLACEHOLDER_POST = LOCAL_BLOG_POSTS[0];

// Helper for safely generating image URLs
const getImageUrl = (source, width, height) => {
  if (!source || !source.asset) {
    // console.warn('getImageUrl: No source or asset found', source);
    return '/images/hero-home.avif';
  }

  // Handle Sanity Image
  if (source.asset._ref) {
    try {
      let imageBuilder = urlFor(source);
      if (width) imageBuilder = imageBuilder.width(width);
      if (height) imageBuilder = imageBuilder.height(height);
      return imageBuilder.url();
    } catch (e) {
      console.error('Error generating Sanity image URL:', e, source);
      return '/images/hero-home.avif';
    }
  }

  // Handle Local Image
  if (source.asset.url) {
    return source.asset.url;
  }

  // console.warn('getImageUrl: Unhandled image source type', source);
  return '/images/hero-home.avif';
};

const GoogleReviewsCarousel = React.lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

// Helper function to render Sanity block content
const BlockContent = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block, idx) => {
    // Handle text blocks
    if (block._type === 'block') {
      const style = block.style || 'normal';

      // Handle different heading styles
      if (style === 'h2') {
        return <h2 key={idx} className="blog-heading">{block.children?.map(child => child.text).join('')}</h2>;
      }
      if (style === 'h3') {
        return <h3 key={idx} className="blog-section-header">{block.children?.map(child => child.text).join('')}</h3>;
      }
      if (style === 'h4') {
        return <h4 key={idx} className="blog-subsection-header">{block.children?.map(child => child.text).join('')}</h4>;
      }
      if (style === 'blockquote') {
        return <blockquote key={idx} className="blog-quote">{block.children?.map(child => child.text).join('')}</blockquote>;
      }

      // Handle lists
      if (block.listItem === 'bullet') {
        return <li key={idx} className="blog-list-item">{block.children?.map(child => child.text).join('')}</li>;
      }
      if (block.listItem === 'number') {
        return <li key={idx} className="blog-list-item">{block.children?.map(child => child.text).join('')}</li>;
      }

      // Handle regular paragraphs with formatting and internal linking
      // Extract full paragraph text first
      const paragraphText = block.children?.map(child => child.text).join('') || '';

      // Render paragraph even if empty to maintain spacing, or skip?
      // Sanity often sends empty blocks for spacing.
      if (!paragraphText.trim()) {
        return <br key={idx} />;
      }

      // Process text with internal linking, preserving formatting
      const processTextWithFormatting = (text, children) => {
        // Use BlogLinker on the full text, then apply formatting
        // We'll split the linked result and apply marks

        return (
          <React.Fragment>
            {children.map((child, childIdx) => {
              const text = child.text;
              if (!text) return null;

              let content = text;
              // Only try to link if we have the linker component and text is long enough
              try {
                content = <BlogLinker text={text} className="blog-internal-link" maxLinks={2} />;
              } catch (e) {
                content = text;
              }

              if (child.marks?.includes('strong')) {
                return <strong key={childIdx}>{content}</strong>;
              }
              if (child.marks?.includes('em')) {
                return <em key={childIdx}>{content}</em>;
              }
              if (child.marks?.includes('code')) {
                return <code key={childIdx}>{text}</code>;
              }
              if (child.marks?.includes('underline')) {
                return <u key={childIdx}>{content}</u>;
              }
              return <React.Fragment key={childIdx}>{content}</React.Fragment>;
            })}
          </React.Fragment>
        );
      };

      return (
        <p key={idx} className="blog-paragraph">
          {(() => {
            try {
              return processTextWithFormatting(paragraphText, block.children || []);
            } catch (err) {
              console.error('Error processing text formatting:', err);
              // Fallback to plain text
              return paragraphText;
            }
          })()}
        </p>
      );
    }


    // Handle images in content with enhanced SEO
    if (block._type === 'image') {
      const imageUrl = getImageUrl(block, 1200);

      return (
        <figure key={idx} className="blog-content-image">
          <picture>
            <img
              src={imageUrl}
              alt={block.alt || 'Blog content image'}
              loading="lazy"
              decoding="async"
              width="1200"
              height="675"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </picture>
          {block.caption && <figcaption className="image-caption">{block.caption}</figcaption>}
        </figure>
      );
    }

    // console.warn('Unknown block type:', block._type);
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
                  src={getImageUrl(blog.mainImage, 400)}
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
                src={getImageUrl(blog.mainImage, 400)}
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
        let cmsBlogs = [];
        try {
          if (slug) {
            const query = `*[_type == "blogPost" && slug.current == $slug][0] {
              _id, title, slug, author, publishedAt, excerpt, mainImage, category, content, seoTitle, seoDescription, keywords, relatedServices
            }`;
            const blog = await client.fetch(query, { slug });
            if (blog) {
              setSelectedBlog(blog);
            } else {
              // specific slug not found in CMS, check local
              const localBlog = LOCAL_BLOG_POSTS.find(p => p.slug.current === slug);
              if (localBlog) setSelectedBlog(localBlog);
            }

            const allBlogsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
              _id, title, slug, author, publishedAt, excerpt, mainImage, category
            }`;
            cmsBlogs = await client.fetch(allBlogsQuery);
          } else {
            const query = `*[_type == "blogPost"] | order(publishedAt desc) {
              _id, title, slug, author, publishedAt, excerpt, mainImage, category, content
            }`;
            cmsBlogs = await client.fetch(query);
          }
        } catch (cmsError) {
          console.warn('CMS Fetch failed, falling back to local content', cmsError);
        }

        // Merge CMS blogs with Local blogs, avoiding duplicates by slug
        const allPosts = [...cmsBlogs];
        LOCAL_BLOG_POSTS.forEach(localPost => {
          if (!allPosts.some(p => p.slug.current === localPost.slug.current)) {
            allPosts.push(localPost);
          }
        });

        // Sort by date newest first
        allPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

        setAllBlogs(allPosts);

        // If we are in slug mode and CMS failed or didn't have it, we might have set selectedBlog from local above.
        // If not, try to find it in the merged list now (though logic above handles dedicated local search)
        if (slug && !selectedBlog) { // e.g., if we refreshed
          const found = allPosts.find(p => p.slug.current === slug);
          if (found) setSelectedBlog(found);
        }

      } catch (error) {
        console.error('[Blog] Error fetching blog posts:', error);
        // Fallback entirely to local if something catastrophic happens
        setAllBlogs(LOCAL_BLOG_POSTS);
        if (slug) {
          const found = LOCAL_BLOG_POSTS.find(p => p.slug.current === slug);
          if (found) setSelectedBlog(found);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]);

  // Use placeholder if no blogs found (Avoids "No blog posts yet" empty state for SEO)
  const displayBlogs = allBlogs.length > 0 ? allBlogs : [PLACEHOLDER_POST];
  const currentBlog = selectedBlog || (slug === PLACEHOLDER_POST.slug.current ? PLACEHOLDER_POST : null);

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  // Single Blog View
  if (currentBlog) {
    const selectedBlog = currentBlog; // Re-assign for cleaner diff
    const readingTime = calculateReadingTime(selectedBlog.content);
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const blogUrl = `${currentUrl.split('/blog')[0]}/blog/${selectedBlog.slug.current}`;
    const seoTitle = selectedBlog.seoTitle || `${selectedBlog.title} | Beyond Detail Toronto Blog`;
    const seoDescription = selectedBlog.seoDescription || selectedBlog.excerpt;
    const publishedDate = new Date(selectedBlog.publishedAt).toISOString();
    const modifiedDate = publishedDate; // Could be updated if blog has modifiedAt field

    // Handle local image fallback logic is now handled by getImageUrl
    const mainImageUrl = getImageUrl(selectedBlog.mainImage, 1200);

    // Generate Article structured data
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': blogUrl,
      headline: selectedBlog.title,
      description: seoDescription,
      image: mainImageUrl ? [mainImageUrl] : [],
      datePublished: publishedDate,
      dateModified: modifiedDate,
      author: {
        '@type': 'Organization',
        name: selectedBlog.author || 'Beyond Detail Team',
        url: 'https://beyonddetail.ca'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Beyond Detail',
        logo: {
          '@type': 'ImageObject',
          url: 'https://beyonddetail.ca/logo192.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': blogUrl
      },
      articleSection: selectedBlog.category || 'Auto Detailing',
      keywords: selectedBlog.keywords?.join(', ') || `${selectedBlog.category}, car detailing, auto detailing, Toronto, Scarborough, Markham, Pickering`,
      wordCount: selectedBlog.content ? selectedBlog.content
        .filter(block => block._type === 'block')
        .map(block => block.children?.map(child => child.text).join('') || '')
        .join(' ')
        .split(/\s+/)
        .filter(word => word.length > 0).length : 0,
      timeRequired: `PT${readingTime}M`,
      inLanguage: 'en-CA'
    };

    // Service route mapping
    const serviceRouteMap = {
      'window-tint': '/tint',
      'auto-detail': '/auto-detail',
      'paint-correction': '/paint-correction',
      'ceramic-coating': '/ceramic-coatings',
      'interior-detailing': '/interior-detailing',
      'exterior-detailing': '/exterior-detailing',
      'headlight-restoration': '/headlight-restoration'
    };

    return (
      <>
        <SEO
          title={seoTitle}
          description={seoDescription}
          name="Beyond Detail Toronto"
          type="article"
          keywords={selectedBlog.keywords?.join(', ') || `${selectedBlog.category}, car detailing, auto detailing, Toronto, Scarborough, Markham, Pickering`}
          image={mainImageUrl}
          url={blogUrl}
        />
        <Helmet>
          {/* Article-specific meta tags */}
          <meta property="article:published_time" content={publishedDate} />
          <meta property="article:modified_time" content={modifiedDate} />
          <meta property="article:author" content={selectedBlog.author || 'Beyond Detail Team'} />
          <meta property="article:section" content={selectedBlog.category || 'Auto Detailing'} />
          {selectedBlog.keywords && selectedBlog.keywords.map((keyword, idx) => (
            <meta key={idx} property="article:tag" content={keyword} />
          ))}

          {/* Article structured data */}
          <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
          </script>
        </Helmet>
        <div className="blog-detail">
          {/* Hero Section */}
          <div className="blog-hero">
            {mainImageUrl && (
              <div className="blog-hero-image">
                <picture>
                  {selectedBlog.mainImage?.asset?._ref && (
                    <source
                      srcSet={urlFor(selectedBlog.mainImage).width(1200).format('webp').quality(90).url()}
                      type="image/webp"
                    />
                  )}
                  <img
                    src={mainImageUrl}
                    alt={selectedBlog.mainImage?.alt || selectedBlog.title}
                    loading="eager"
                    className="blog-hero-img"
                  />
                </picture>
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

            {/* Related Services Section */}
            {
              selectedBlog.relatedServices && selectedBlog.relatedServices.length > 0 && (
                <section className="blog-related-services" style={{
                  marginTop: '3rem',
                  padding: '2rem',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '12px',
                  border: '1px solid rgba(240, 121, 0, 0.3)'
                }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f07900' }}>
                    Related Services
                  </h3>
                  <p style={{ marginBottom: '1rem', color: '#e0e0e0' }}>
                    Interested in our services? Check out these related offerings:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {selectedBlog.relatedServices.map((service, idx) => {
                      const route = serviceRouteMap[service] || '/auto-detail';
                      const serviceName = service
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
                      return (
                        <Link
                          key={idx}
                          to={route}
                          style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(240, 121, 0, 0.2)',
                            color: '#f07900',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            border: '1px solid rgba(240, 121, 0, 0.5)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(240, 121, 0, 0.3)';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(240, 121, 0, 0.2)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          {serviceName}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )
            }

            {/* Related Posts */}
            <RelatedPosts currentBlog={selectedBlog} allBlogs={allBlogs} />

            {/* Back to Blog */}
            <div className="blog-navigation">
              <Link to="/blog" className="back-to-blog-btn">
                ← Back to All Posts
              </Link>
            </div>
          </article >
        </div >
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
          <div className="header-content">
            <h1>Auto Detailing Tips & Insights</h1>
            <p className="blog-list-subtitle">
              Expert advice on paint protection, ceramic coatings, and vehicle maintenance from Toronto's trusted detailing professionals.
            </p>
          </div>
          <div className="header-background-effect"></div>
        </div>

        {displayBlogs.length === 0 ? (
          <div className="no-blogs">
            <p>No blog posts yet. Check back soon for expert car detailing tips and guides!</p>
          </div>
        ) : (
          <div className="blog-content-container">
            {/* Featured Post - First Item */}
            {displayBlogs.length > 0 && (
              <section className="featured-blog-section">
                <Link to={`/blog/${displayBlogs[0].slug.current}`} className="featured-blog-card">
                  <div className="featured-image-wrapper">
                    {(displayBlogs[0].mainImage) ? (
                      <img
                        src={getImageUrl(displayBlogs[0].mainImage, 1200, 600)}
                        alt={displayBlogs[0].mainImage.alt || displayBlogs[0].title}
                        className="featured-image"
                      />
                    ) : (
                      <img
                        src="/images/hero-home.avif"
                        alt={displayBlogs[0].title}
                        className="featured-image"
                      />
                    )}
                    {displayBlogs[0].category && (
                      <span className="blog-category-tag">{displayBlogs[0].category}</span>
                    )}
                  </div>
                  <div className="featured-content">
                    <div className="featured-meta">
                      <span className="date">
                        {new Date(displayBlogs[0].publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="separator">•</span>
                      <span className="read-time">{calculateReadingTime(displayBlogs[0].content)} min read</span>
                    </div>
                    <h2 className="featured-title">{displayBlogs[0].title}</h2>
                    <p className="featured-excerpt">{displayBlogs[0].excerpt}</p>
                    <span className="read-more-btn">
                      Read Article <span className="arrow">→</span>
                    </span>
                  </div>
                </Link>
              </section>
            )}

            {/* Remaining Posts Grid */}
            {displayBlogs.length > 1 && (
              <div className="blogs-grid">
                {displayBlogs.slice(1).map((blog) => (
                  <article key={blog._id} className="blog-card">
                    <Link to={`/blog/${blog.slug.current}`} className="blog-card-link">
                      <div className="blog-card-image-wrapper">
                        {blog.mainImage ? (
                          <img
                            src={getImageUrl(blog.mainImage, 600, 400)}
                            alt={blog.mainImage.alt || blog.title}
                            className="blog-image"
                          />
                        ) : (
                          <img
                            src="/images/hero-home.avif"
                            alt={blog.title}
                            className="blog-image"
                          />
                        )}
                        {blog.category && (
                          <span className="blog-card-category">{blog.category}</span>
                        )}
                      </div>
                      <div className="blog-info">
                        <div className="blog-card-meta-top">
                          <span className="date">
                            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="read-time">{calculateReadingTime(blog.content)} min read</span>
                        </div>
                        <h2 className="blog-card-title">{blog.title}</h2>
                        <p className="excerpt">{blog.excerpt}</p>
                        <div className="blog-footer">
                          <span className="read-more-link">
                            Read More
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Suspense fallback={null}>
        <GoogleReviewsCarousel />
      </Suspense>
      <Contact />
    </>
  );
}

export default Blog;
