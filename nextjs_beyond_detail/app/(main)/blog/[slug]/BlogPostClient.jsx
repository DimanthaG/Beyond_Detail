'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { calculateReadingTime } from '@/utils/blogContentFormatter';
import { LOCAL_BLOG_POSTS } from '@/data/LocalBlogContent';
import '../Blog.scss';

// TODO: Migrate shared components
// import { Contact } from '@/components';
// const GoogleReviewsCarousel = React.lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

const getImageUrl = (source, width, height) => {
  if (!source || !source.asset) {
    return '/images/hero-home.avif';
  }
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
  if (source.asset.url) {
    return source.asset.url;
  }
  return '/images/hero-home.avif';
};

const BlockContent = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block, idx) => {
    if (block._type === 'block') {
      const style = block.style || 'normal';

      const renderChildren = (children) => {
        if (!children) return null;
        return children.map((child, childIdx) => {
          let text = child.text || '';
          if (!text) return null;

          if (child.marks && Array.isArray(child.marks)) {
            if (child.marks.includes('strong')) text = <strong key={childIdx}>{text}</strong>;
            else if (child.marks.includes('em')) text = <em key={childIdx}>{text}</em>;
            else if (child.marks.includes('code')) text = <code key={childIdx}>{text}</code>;
            else if (child.marks.includes('underline')) text = <u key={childIdx}>{text}</u>;
            else return <span key={childIdx}>{text}</span>;
          }
          return typeof text === 'string' ? <span key={childIdx}>{text}</span> : text;
        });
      };

      if (style === 'h2') return <h2 key={idx} className="blog-heading">{renderChildren(block.children)}</h2>;
      if (style === 'h3') return <h3 key={idx} className="blog-section-header">{renderChildren(block.children)}</h3>;
      if (style === 'h4') return <h4 key={idx} className="blog-subsection-header">{renderChildren(block.children)}</h4>;
      if (style === 'blockquote') return <blockquote key={idx} className="blog-quote">{renderChildren(block.children)}</blockquote>;

      if (block.listItem === 'bullet') return <li key={idx} className="blog-list-item">{renderChildren(block.children)}</li>;
      if (block.listItem === 'number') return <li key={idx} className="blog-list-item">{renderChildren(block.children)}</li>;

      const content = renderChildren(block.children);
      if (!content || (Array.isArray(content) && content.every(c => !c))) return <br key={idx} />;

      return <p key={idx} className="blog-paragraph">{content}</p>;
    }

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

    return null;
  });
};

const RelatedPosts = ({ currentBlog, allBlogs }) => {
  const related = allBlogs
    .filter(blog => blog._id !== currentBlog._id && blog.category === currentBlog.category)
    .slice(0, 3);

  const postsToShow = related.length > 0 ? related :
    allBlogs
      .filter(blog => blog._id !== currentBlog._id)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, 3);

  if (postsToShow.length === 0) return null;

  return (
    <section className="related-posts">
      <h3>{related.length > 0 ? 'Related Posts' : 'Latest Posts'}</h3>
      <div className="related-posts-grid">
        {postsToShow.map((blog) => (
          <Link key={blog._id} href={`/blog/${blog.slug.current}`} className="related-post-card">
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

const serviceRouteMap = {
  'window-tint': '/tint',
  'auto-detail': '/auto-detail',
  'paint-correction': '/paint-correction',
  'ceramic-coating': '/ceramic-coatings',
  'interior-detailing': '/interior-detailing',
  'exterior-detailing': '/exterior-detailing',
  'headlight-restoration': '/headlight-restoration'
};

function BlogPostClient({ slug }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        let cmsBlogs = [];
        let blogFromSanity = null;

        try {
          const query = `*[_type == "blogPost" && slug.current == $slug][0] {
            _id, title, slug, author, publishedAt, excerpt, mainImage, category, content, body, seoTitle, seoDescription, keywords, relatedServices
          }`;
          blogFromSanity = await client.fetch(query, { slug });
        } catch (e) {
          console.warn('Sanity fetch failed, checking local backup:', e);
        }

        if (blogFromSanity) {
          const localBackup = LOCAL_BLOG_POSTS.find(p => p.slug.current === slug);
          if (localBackup) {
            blogFromSanity = { ...blogFromSanity, ...localBackup };
          }
          if (!blogFromSanity.content && blogFromSanity.body) {
            blogFromSanity.content = blogFromSanity.body;
          }
          setSelectedBlog(blogFromSanity);
        } else {
          const localBlog = LOCAL_BLOG_POSTS.find(p => p.slug.current === slug);
          if (localBlog) {
            setSelectedBlog(localBlog);
          }
        }

        // Fetch all blogs for sidebar
        try {
          const allBlogsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
            _id, title, slug, author, publishedAt, excerpt, mainImage, category
          }`;
          cmsBlogs = await client.fetch(allBlogsQuery);
        } catch (e) {
          // silent
        }

        const allPosts = cmsBlogs.map(cmsPost => {
          const localMatch = LOCAL_BLOG_POSTS.find(p => p.slug.current === cmsPost.slug.current);
          return localMatch ? { ...cmsPost, ...localMatch } : cmsPost;
        });

        LOCAL_BLOG_POSTS.forEach(localPost => {
          if (!allPosts.some(p => p.slug.current === localPost.slug.current)) {
            allPosts.push(localPost);
          }
        });

        allPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setAllBlogs(allPosts);

      } catch (error) {
        console.error('[Blog] Error fetching blog post:', error);
        setAllBlogs(LOCAL_BLOG_POSTS);
        const found = LOCAL_BLOG_POSTS.find(p => p.slug.current === slug);
        if (found) setSelectedBlog(found);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!selectedBlog) {
    return (
      <div className="blog-loading">
        <p>Blog post not found.</p>
        <Link href="/blog" style={{ color: '#f07900', marginTop: '1rem', display: 'inline-block' }}>
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  const readingTime = calculateReadingTime(selectedBlog.content || selectedBlog.body);
  const blogUrl = `https://www.beyonddetail.ca/blog/${selectedBlog.slug.current}`;
  const publishedDate = new Date(selectedBlog.publishedAt).toISOString();
  const mainImageUrl = getImageUrl(selectedBlog.mainImage, 1200);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': blogUrl,
    headline: selectedBlog.title,
    description: selectedBlog.seoDescription || selectedBlog.excerpt,
    image: mainImageUrl ? [mainImageUrl] : [],
    datePublished: publishedDate,
    dateModified: publishedDate,
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
    mainEntityOfPage: { '@type': 'WebPage', '@id': blogUrl },
    articleSection: selectedBlog.category || 'Auto Detailing',
    inLanguage: 'en-CA'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
                {readingTime} min read
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="blog-article">
          <div className="blog-content-wrapper">
            {/* Left Share Sticky */}
            <div className="blog-share-sticky">
              <div className="blog-share-buttons" style={{ flexDirection: 'column' }}>
                <a href="#" className="share-btn share-facebook" title="Share on Facebook">
                  <span style={{ fontSize: '1.2rem' }}>f</span>
                </a>
                <a href="#" className="share-btn share-twitter" title="Share on Twitter">
                  <span style={{ fontSize: '1.2rem' }}>&#x1D54F;</span>
                </a>
                <a href="#" className="share-btn share-linkedin" title="Share on LinkedIn">
                  <span style={{ fontSize: '1.2rem' }}>in</span>
                </a>
              </div>
            </div>

            {/* Article Content */}
            <div className="blog-article-content">
              <BlockContent blocks={selectedBlog.content || selectedBlog.body} />

              {/* Mobile-only Related Services */}
              <div className="mobile-related-services">
                {selectedBlog.relatedServices && selectedBlog.relatedServices.length > 0 && (
                  <section className="blog-related-services">
                    <h3>Related Services</h3>
                    <div className="services-tags">
                      {selectedBlog.relatedServices.map((service, idx) => {
                        const route = serviceRouteMap[service] || '/auto-detail';
                        const serviceName = service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                        return <Link key={idx} href={route}>{serviceName}</Link>;
                      })}
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* Right Sidebar (Desktop) */}
            <aside className="blog-sidebar">
              {selectedBlog.relatedServices && selectedBlog.relatedServices.length > 0 && (
                <div className="sidebar-widget services-widget">
                  <h3>Related Services</h3>
                  <div className="services-list">
                    {selectedBlog.relatedServices.map((service, idx) => {
                      const route = serviceRouteMap[service] || '/auto-detail';
                      const serviceName = service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                      return (
                        <Link key={idx} href={route} className="service-link">
                          <span className="arrow">&rarr;</span> {serviceName}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="sidebar-widget recent-posts-widget">
                <h3>Recent Posts</h3>
                <div className="sidebar-posts-list">
                  {allBlogs
                    .filter(b => b._id !== selectedBlog._id)
                    .slice(0, 4)
                    .map(post => (
                      <Link key={post._id} href={`/blog/${post.slug.current}`} className="sidebar-post-item">
                        <div className="sidebar-post-image">
                          {post.mainImage ? (
                            <img src={getImageUrl(post.mainImage, 100, 100)} alt={post.title} />
                          ) : <div className="placeholder-img" />}
                        </div>
                        <div className="sidebar-post-info">
                          <h4>{post.title}</h4>
                          <span className="date">{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>

          <RelatedPosts currentBlog={selectedBlog} allBlogs={allBlogs} />

          <div className="blog-navigation">
            <Link href="/blog" className="back-to-blog-btn">
              &larr; Back to All Posts
            </Link>
          </div>
        </article>
      </div>
      {/* TODO: Migrate shared components */}
      {/* <GoogleReviewsCarousel /> */}
      {/* <Contact /> */}
    </>
  );
}

export default BlogPostClient;
