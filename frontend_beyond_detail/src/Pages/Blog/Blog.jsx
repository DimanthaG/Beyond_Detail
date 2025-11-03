import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Contact } from '../../components';
import './Blog.scss';

const GoogleReviewsCarousel = React.lazy(() => import('../../components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

// Mock blog data
const mockBlogs = [
  {
    id: '1',
    slug: '5-essential-tips-protect-vehicle-paint',
    title: '5 Essential Tips to Protect Your Vehicle\'s Paint',
    author: 'Beyond Detail Team',
    publishedAt: '2025-01-15',
    excerpt: 'Your vehicle\'s paint is constantly exposed to environmental hazards. Learn five professional tips from our detailing experts to keep your car\'s finish protected and looking new.',
    mainImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&h=600&fit=crop',
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
    mainImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop',
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
    mainImage: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1200&h=600&fit=crop',
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
    mainImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=600&fit=crop',
    content: [
      'A clean interior not only looks great but also preserves the value of your vehicle. Here\'s a comprehensive guide to professional interior detailing.',
      'Cleaning Steps:',
      '1. Remove all items and personal belongings',
      '2. Vacuum thoroughly, including under seats',
      '3. Clean dashboard and surfaces with appropriate cleaners',
      '4. Shampoo carpets and upholstery',
      '5. Clean windows from inside',
      '6. Apply protectants to vinyl and leather',
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
    mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    content: [
      'Over time, headlights become cloudy and yellowed due to UV damage, oxidation, and environmental factors. This reduces light output and can make nighttime driving dangerous.',
      'Safety Impact:',
      'Cloudy headlights can reduce light output by up to 80%, significantly decreasing visibility at night. This increases the risk of accidents and makes driving hazardous.',
      'Restoration Process:',
      'Professional headlight restoration involves:',
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
    mainImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop',
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

function Blog() {
  const { slug } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    setLoading(true);
    setTimeout(() => {
      if (slug) {
        // Find single blog post
        const blog = mockBlogs.find(b => b.slug === slug);
        setSelectedBlog(blog || null);
      }
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>;

  // Single Blog View
  if (selectedBlog) {
    return (
      <>
      <div className="blog-detail">
        {selectedBlog.mainImage && (
          <img
            src={selectedBlog.mainImage}
            alt={selectedBlog.title}
            className="blog-main-image"
          />
        )}
        <article className="blog-content">
          <h1>{selectedBlog.title}</h1>
          <div className="blog-meta">
            <span className="author">{selectedBlog.author || 'Admin'}</span>
            <span className="date">
              {new Date(selectedBlog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="blog-body">
            {selectedBlog.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
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
      <div className="blog-list">
        <h1>Our Blog</h1>
        <div className="blogs-grid">
          {mockBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="blog-card"
            >
              {blog.mainImage && (
                <img
                  src={blog.mainImage}
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
                    {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </Link>
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
