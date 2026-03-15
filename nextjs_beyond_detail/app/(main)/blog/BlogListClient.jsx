'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { calculateReadingTime } from '@/utils/blogContentFormatter';
import { LOCAL_BLOG_POSTS } from '@/data/LocalBlogContent';
import './Blog.scss';

// TODO: Migrate shared components
// import { Contact } from '@/components';
// const GoogleReviewsCarousel = React.lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

const PLACEHOLDER_POST = LOCAL_BLOG_POSTS[0];

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

function BlogList() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        let cmsBlogs = [];
        try {
          const query = `*[_type == "blogPost"] | order(publishedAt desc) {
            _id, title, slug, author, publishedAt, excerpt, mainImage, category, content, body
          }`;
          cmsBlogs = await client.fetch(query);
        } catch (cmsError) {
          console.warn('CMS Fetch failed, falling back to local content', cmsError);
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
        console.error('[Blog] Error fetching blog posts:', error);
        setAllBlogs(LOCAL_BLOG_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const displayBlogs = allBlogs.length > 0 ? allBlogs : [PLACEHOLDER_POST];

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="loading-spinner"></div>
        <p>Loading articles...</p>
      </div>
    );
  }

  return (
    <>
      <div className="blog-list">
        <div className="blog-list-header">
          <div className="header-content">
            <h1>Auto Detailing Tips & Insights</h1>
            <p className="blog-list-subtitle">
              Expert advice on paint protection, ceramic coatings, and vehicle maintenance from Toronto&#39;s trusted detailing professionals.
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
                <Link href={`/blog/${displayBlogs[0].slug.current}`} className="featured-blog-card">
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
                      <span className="separator">&bull;</span>
                      <span className="read-time">{calculateReadingTime(displayBlogs[0].content)} min read</span>
                    </div>
                    <h2 className="featured-title">{displayBlogs[0].title}</h2>
                    <p className="featured-excerpt">{displayBlogs[0].excerpt}</p>
                    <span className="read-more-btn">
                      Read Article <span className="arrow">&rarr;</span>
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
                    <Link href={`/blog/${blog.slug.current}`} className="blog-card-link">
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
      {/* TODO: Migrate shared components */}
      {/* <GoogleReviewsCarousel /> */}
      {/* <Contact /> */}
    </>
  );
}

export default BlogList;
