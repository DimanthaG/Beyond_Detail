'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '@/lib/sanity';
import dynamic from 'next/dynamic';
const ImageSlider = dynamic(() => import('react-image-comparison-slider'), { ssr: false });
import { X } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Gallery.scss';

// TODO: Migrate these shared components
// import { Contact, SkillShowcase, TrustBadges } from '@/components';
// const GoogleReviewsCarousel = React.lazy(() => import('@/components/GoogleReviewsCarousel/GoogleReviewsCarousel'));

const animationOne = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const transition = { duration: 0.4, ease: 'easeInOut' };

function Gallery() {
  const [galImages, setGalImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [compareImages, setCompareImages] = useState([]);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const query = '*[_type == "gallery"] | order(order desc)';

    client.fetch(query).then((data) => {
      setGalImages(data);
      setLoading(true);
    }).catch((err) => {
      console.error('Failed to fetch gallery images:', err);
      setGalImages([]);
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    const query = '*[_type == "galleryComparisonSlider"]';

    client.fetch(query).then((data) => {
      setCompareImages(data);
    }).catch((err) => {
      console.error('Failed to fetch comparison images:', err);
      setCompareImages([]);
    });
  }, []);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const galleryImages = galImages.map((data) => {
    return (
      <motion.div
        whileInView={{ y: [30, 0], opacity: [0, 1] }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
        className='gallery__pics'
        key={data._id}
        onClick={() => getImg(urlFor(data.galleryPicture).width(1200).quality(82).url())}
      >
        <LazyLoadImage
          src={urlFor(data.galleryPicture).width(600).quality(75).url()}
          alt='gallery'
          effect='blur'
        />
      </motion.div>
    );
  });

  return (
    <>
      {loading && galImages.length !== 0 ? (
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={animationOne}
          transition={transition}
        >
          <div className='gallery__wrapper'>
            <motion.div
              className='galleryHeader'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2.0 }}
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
            >
              <h1>Auto Detailing Gallery - Scarborough</h1>
            </motion.div>
            {compareImages.length !== 0 && (
              <motion.div
                className='gallery__imageSlider__container'
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
              >
                <div className='gallery__imageSlider'>
                  <ImageSlider
                    image1={urlFor(compareImages[0].comparisonSlider1.image2).width(800).quality(75).url()}
                    image2={urlFor(compareImages[0].comparisonSlider1.image1).width(800).quality(75).url()}
                    sliderColor='var(--secondary-color)'
                    handleBackgroundColor='var(--white-color)'
                    handleColor='var(--background-color)'
                  />
                  <ImageSlider
                    image1={urlFor(compareImages[0].comparisonSlider2.image2).width(800).quality(75).url()}
                    image2={urlFor(compareImages[0].comparisonSlider2.image1).width(800).quality(75).url()}
                    sliderColor='var(--secondary-color)'
                    handleBackgroundColor='var(--white-color)'
                    handleColor='var(--background-color)'
                  />
                </div>
              </motion.div>
            )}
            <div className={model ? 'model open' : 'model'}>
              <img src={tempImgSrc} loading='lazy' alt='large' />
              <X onClick={() => setModel(false)} size={24} />
            </div>
            <div className='image__wrapper'>{galleryImages}</div>
          </div>
          {/* TODO: Migrate shared components */}
          {/* <SkillShowcase /> */}
          {/* <GoogleReviewsCarousel /> */}
          {/* <TrustBadges /> */}
          {/* <Contact /> */}
        </motion.div>
      ) : (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: '#999' }}>Loading gallery...</p>
        </div>
      )}
    </>
  );
}

export default React.memo(Gallery);
