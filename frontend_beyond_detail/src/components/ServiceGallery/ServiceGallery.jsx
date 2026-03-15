import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageWithSchema from '../ImageWithSchema/ImageWithSchema';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { client, urlFor } from '../../client';
import './ServiceGallery.scss';

function ServiceGallery({ serviceType, title = "Gallery" }) {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch gallery images from Sanity CMS


        const fetchGalleryImages = async () => {
            setLoading(true);
            try {
                // Map service type to match Sanity schema values
                const serviceTypeMap = {
                    'window-tint': 'tint',
                    'paint-correction': 'paint-correction',
                    'ceramic-coating': 'ceramic-coating',
                    'auto-detail': 'auto-detail',
                    'interior-detailing': 'interior-detailing',
                    'exterior-detailing': 'exterior-detailing',
                    'headlight-restoration': 'headlight-restoration',
                    'odour-removal': 'odour-removal',
                    'leather-cleaning': 'leather-cleaning',
                    'paint-removal': 'paint-removal',
                    'fleet-services': 'fleet-services',
                };

                const sanityServiceType = serviceTypeMap[serviceType] || serviceType;

                const query = `*[_type == "serviceGallery" && serviceType == $serviceType] {
          _id,
          title,
          image,
          order
        }`;

                const result = await client.fetch(query, { serviceType: sanityServiceType });


                if (result.length === 0) {
                    // No images found for this service type
                }

                // Filter out items without images
                const validImages = result.filter(item => item.image);


                // Format images for the gallery
                let formattedImages = validImages.map((item) => ({
                    _id: item._id,
                    src: urlFor(item.image).width(1200).url(),
                    title: item.title,
                    image: item.image, // Keep original for lightbox
                    order: item.order, // Keep order for sorting
                }));

                // Sort: items with order first (by order), then items without order (randomized)
                formattedImages.sort((a, b) => {
                    // If both have order, sort by order
                    if (a.order != null && b.order != null) {
                        return a.order - b.order;
                    }
                    // If only a has order, a comes first
                    if (a.order != null && b.order == null) {
                        return -1;
                    }
                    // If only b has order, b comes first
                    if (a.order == null && b.order != null) {
                        return 1;
                    }
                    // If neither has order, randomize
                    return Math.random() - 0.5;
                });

                setImages(formattedImages);
            } catch (error) {
                console.error('[ServiceGallery] Error fetching gallery images:', error);
                setImages([]);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleryImages();
    }, [serviceType]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

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
    }, [lightboxOpen, lightboxIndex]);

    // Auto-slide functionality (optional)
    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, currentIndex]);

    // Show loading state
    if (loading) {
        return (
            <section className="service-gallery">
                <div className="service-gallery__container">
                    <div className="service-gallery__header">
                        <h2 className="service-gallery__title">{title}</h2>
                        <p className="service-gallery__subtitle">Loading gallery...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Show empty state message if no images
    if (!images || images.length === 0) {
        return (
            <section className="service-gallery">
                <div className="service-gallery__container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="service-gallery__header"
                    >
                        <h2 className="service-gallery__title">{title}</h2>
                        <p className="service-gallery__subtitle">
                            Gallery images coming soon. Upload images to Sanity CMS to display here.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="service-gallery">
                <div className="service-gallery__container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="service-gallery__header"
                    >
                        <h2 className="service-gallery__title">{title}</h2>
                        <p className="service-gallery__subtitle">
                            View our recent work for this service
                        </p>
                    </motion.div>

                    <div className="service-gallery__slider-wrapper">
                        <button
                            className="service-gallery__nav-button service-gallery__nav-button--prev"
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="service-gallery__slider">
                            <div
                                className="service-gallery__track"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {images.map((item, index) => (
                                    <div
                                        key={item._id || index}
                                        className="service-gallery__slide"
                                    >
                                        <div
                                            className="service-gallery__slide-content"
                                            onClick={() => openLightbox(index)}
                                        >
                                            <ImageWithSchema
                                                src={item.src}
                                                alt={item.title || `${serviceType?.replace(/-/g, ' ') || 'Professional detailing'} service at Beyond Detail Scarborough - image ${index + 1}`}
                                                name={item.title || `${serviceType?.replace(/-/g, ' ') || 'Professional detailing'} Result`}
                                                description={`Professional ${serviceType?.replace(/-/g, ' ') || 'detailing'} service result at Beyond Detail Scarborough`}
                                            >
                                                <LazyLoadImage
                                                    src={item.src}
                                                    alt={item.title || `${serviceType?.replace(/-/g, ' ') || 'Professional detailing'} service at Beyond Detail Scarborough - image ${index + 1}`}
                                                    effect="blur"
                                                    className="service-gallery__image"
                                                    width={800}
                                                    height={600}
                                                />
                                            </ImageWithSchema>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="service-gallery__nav-button service-gallery__nav-button--next"
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    {images.length > 1 && (
                        <div className="service-gallery__dots">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`service-gallery__dot ${index === currentIndex ? 'service-gallery__dot--active' : ''
                                        }`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="service-gallery__lightbox" onClick={closeLightbox}>
                    <button
                        className="service-gallery__lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>
                    <button
                        className="service-gallery__lightbox-nav service-gallery__lightbox-nav--prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            lightboxPrev();
                        }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <div
                        className="service-gallery__lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <LazyLoadImage
                            src={urlFor(images[lightboxIndex]?.image).width(1920).url()}
                            alt={images[lightboxIndex]?.title || `${serviceType?.replace(/-/g, ' ') || 'Professional detailing'} service at Beyond Detail Scarborough - image ${lightboxIndex + 1}`}
                            effect="blur"
                            className="service-gallery__lightbox-image"
                        />
                        <div className="service-gallery__lightbox-counter">
                            {lightboxIndex + 1} / {images.length}
                        </div>
                    </div>
                    <button
                        className="service-gallery__lightbox-nav service-gallery__lightbox-nav--next"
                        onClick={(e) => {
                            e.stopPropagation();
                            lightboxNext();
                        }}
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>
            )}
        </>
    );
}

export default ServiceGallery;
