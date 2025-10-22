import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../../client';
import './Blog.scss';

function Blog() {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Get single blog post
      const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
      client.fetch(query).then((data) => {
        setSelectedBlog(data);
        setLoading(false);
      });
    } else {
      // Get all blog posts
      const query = `*[_type == "blog"] | sort(publishedAt desc)`;
      client.fetch(query).then((data) => {
        setBlogs(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>;

  // Single Blog View
  if (selectedBlog) {
    return (
      <div className="blog-detail">
        {selectedBlog.mainImage && (
          <img
            src={urlFor(selectedBlog.mainImage).width(1200).url()}
            alt={selectedBlog.title}
            className="blog-main-image"
          />
        )}
        <article className="blog-content">
          <h1>{selectedBlog.title}</h1>
          <div className="blog-meta">
            <span className="author">{selectedBlog.author || 'Admin'}</span>
            <span className="date">
              {new Date(selectedBlog.publishedAt).toLocaleDateString()}
            </span>
          </div>
          <div className="blog-body">
            {selectedBlog.content?.map((block, idx) => {
              if (block._type === 'block') {
                return (
                  <p key={idx}>{block.children?.map((c) => c.text).join('')}</p>
                );
              }
              if (block._type === 'image') {
                return (
                  <img
                    key={idx}
                    src={urlFor(block).width(800).url()}
                    alt="blog"
                  />
                );
              }
              return null;
            })}
          </div>
        </article>
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Blog List View
  return (
    <div className="blog-list">
      <h1>Our Blog</h1>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            to={`/blog/${blog.slug.current}`}
            className="blog-card"
          >
            {blog.mainImage && (
              <img
                src={urlFor(blog.mainImage).width(400).url()}
                alt={blog.title}
                className="blog-image"
              />
            )}
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p className="excerpt">{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="author">{blog.author || 'Admin'}</span>
                <span className="date">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
