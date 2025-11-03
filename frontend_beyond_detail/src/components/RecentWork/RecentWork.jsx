import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './RecentWork.scss';

function RecentWork({ serviceType = 'tint', title = 'WINDOW TINT', limit = 6 }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    // First try to get service-specific gallery images
    const serviceQuery = `*[_type == "serviceGallery" && serviceType == $serviceType] | order(order desc) [0...$limit] {
      _id,
      title,
      image,
      order
    }`;

    // Fallback to general gallery if service-specific not found
    const galleryQuery = `*[_type == "gallery"] | order(order desc) [0...$limit] {
      _id,
      headerOne,
      galleryPicture,
      order
    }`;

    // Try service gallery first
    client.fetch(serviceQuery, { serviceType, limit })
      .then((serviceData) => {
        console.log('Service gallery data:', serviceData);
        if (serviceData && serviceData.length > 0) {
          // Filter out items without images
          const validData = serviceData.filter(item => item.image);
          if (validData.length > 0) {
            // Map service gallery data to consistent format
            const formattedData = validData.map(item => ({
              _id: item._id,
              title: item.title || `${title} Installation`,
              image: item.image,
              order: item.order || 0
            }));
            setImages(formattedData);
            setLoading(false);
            return;
          }
        }
        // Fallback to general gallery
        return client.fetch(galleryQuery, { limit })
          .then((galleryData) => {
            console.log('General gallery data:', galleryData);
            if (galleryData && galleryData.length > 0) {
              // Filter out items without images
              const validData = galleryData.filter(item => item.galleryPicture);
              if (validData.length > 0) {
                // Map general gallery data to consistent format
                const formattedData = validData.map(item => ({
                  _id: item._id,
                  title: item.headerOne || `${title} Project`,
                  image: item.galleryPicture,
                  order: item.order || 0
                }));
                setImages(formattedData);
              }
            }
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error('Error fetching recent work images:', error);
        setLoading(false);
      });
  }, [serviceType, limit, title]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        lightboxNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        lightboxPrev();
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex, images.length]);

  if (loading) {
    return (
      <section className="recent-work">
        <div className="recent-work__container">
          <div className="recent-work__header">
            <h2 className="recent-work__title">RECENT WORK</h2>
            <div className="recent-work__divider"></div>
            <h3 className="recent-work__subtitle">{title}</h3>
          </div>
          <div className="recent-work__loading">Loading recent work...</div>
        </div>
      </section>
    );
  }

  // Filter out any images that don't have valid image data
  const validImages = images.filter(item => item && item.image);
  
  // If no images, create placeholder images for display
  const displayImages = validImages.length > 0 
    ? validImages.slice(0, limit)
    : Array.from({ length: Math.min(limit, 6) }, (_, i) => ({
        _id: `placeholder-${i}`,
        title: `${title} Project ${i + 1}`,
        image: null,
        isPlaceholder: true
      }));
  
  console.log('Display images:', displayImages);
  console.log('Valid images count:', validImages.length);

  return (
    <>
      <section className="recent-work">
        <div className="recent-work__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="recent-work__header"
          >
            <h2 className="recent-work__title">RECENT WORK</h2>
            <div className="recent-work__divider"></div>
            <h3 className="recent-work__subtitle">{title}</h3>
          </motion.div>

          <div className="recent-work__grid">
            {displayImages.map((item, index) => (
              <motion.div
                key={`${item._id}-${index}`}
                className="recent-work__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
                transition={{ duration: 0.2, delay: Math.min(index * 0.01, 0.03), ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => openLightbox(index)}
              >
                <div className="recent-work__image-wrapper">
                  {item.image && !item.isPlaceholder ? (
                    <LazyLoadImage
                      src={urlFor(item.image).width(800).height(600).url()}
                      alt={item.title || `Recent work ${index + 1}`}
                      effect="blur"
                      className="recent-work__image"
                      onError={(e) => {
                        console.error('Image failed to load:', item.image);
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="recent-work__image-placeholder"><span>Image Not Available</span></div>';
                      }}
                    />
                  ) : (
                    <div className="recent-work__image-placeholder">
                      <div className="recent-work__placeholder-content">
                        <span className="recent-work__placeholder-icon">📷</span>
                        <span className="recent-work__placeholder-text">Coming Soon</span>
                      </div>
                    </div>
                  )}
                  <div className="recent-work__overlay">
                    <span className="recent-work__image-title">
                      {item.title || `${title} Installation`}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="recent-work__lightbox" onClick={closeLightbox}>
          <button
            className="recent-work__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            className="recent-work__lightbox-nav recent-work__lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              lightboxPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div
            className="recent-work__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {displayImages[lightboxIndex]?.image ? (
              <LazyLoadImage
                src={urlFor(displayImages[lightboxIndex].image).width(1920).height(1080).url()}
                alt={displayImages[lightboxIndex]?.title || `Recent work ${lightboxIndex + 1}`}
                effect="blur"
                className="recent-work__lightbox-image"
                onError={(e) => {
                  console.error('Lightbox image failed to load:', displayImages[lightboxIndex]?.image);
                }}
              />
            ) : (
              <div className="recent-work__lightbox-placeholder">
                <span>Image not available</span>
              </div>
            )}
            {displayImages[lightboxIndex]?.title && (
              <div className="recent-work__lightbox-title">
                {displayImages[lightboxIndex].title}
              </div>
            )}
            <div className="recent-work__lightbox-counter">
              {lightboxIndex + 1} / {displayImages.length}
            </div>
          </div>
          <button
            className="recent-work__lightbox-nav recent-work__lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default RecentWork;

