import BlogPostClient from './BlogPostClient';
import { client } from '@/lib/sanity';
import { LOCAL_BLOG_POSTS } from '@/data/LocalBlogContent';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  let blog = null;

  try {
    const query = `*[_type == "blogPost" && slug.current == $slug][0] {
      title, excerpt, seoTitle, seoDescription, keywords, category, mainImage
    }`;
    blog = await client.fetch(query, { slug });
  } catch (e) {
    // Sanity fetch failed
  }

  // Fallback to local content
  if (!blog) {
    blog = LOCAL_BLOG_POSTS.find(p => p.slug.current === slug);
  }

  // Merge local override if available
  const localOverride = LOCAL_BLOG_POSTS.find(p => p.slug.current === slug);
  if (localOverride && blog) {
    blog = { ...blog, ...localOverride };
  }

  if (!blog) {
    return {
      title: 'Blog Post | Beyond Detail Toronto',
      description: 'Read expert guides and tips on car detailing from Beyond Detail Toronto.',
    };
  }

  const title = blog.seoTitle || `${blog.title} | Beyond Detail Toronto Blog`;
  const description = blog.seoDescription || blog.excerpt || 'Expert auto detailing tips and guides from Beyond Detail Toronto.';

  return {
    title,
    description,
    keywords: blog.keywords?.join(', ') || `${blog.category}, car detailing, auto detailing, Toronto, Scarborough`,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.beyonddetail.ca/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
