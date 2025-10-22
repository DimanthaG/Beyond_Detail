import React, { useState, useEffect } from 'react';
import { Contact, Loading, SEO } from '../../components';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../components/Transition';
import { urlFor, client } from '../../client';
import ImageSlider from 'react-image-comparison-slider';
import { GrClose } from 'react-icons/gr';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import images from '../../constants/images';
import './Gallery.scss';

function Gallery() {
  const [galImages, setGalImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [compareImages, setCompareImages] = useState([]);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get gallery images from sanity backend
  useEffect(() => {
    const query = '*[_type == "gallery"] | order(order desc)';

    client.fetch(query).then((data) => {
      setGalImages(data);
      setLoading(true);
    });
  }, []);

  // Get comparison slider images from sanity backend
  useEffect(() => {
    const query = '*[_type == "galleryComparisonSlider"]';

    client.fetch(query).then((data) => {
      setCompareImages(data);
    });
  }, []);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const galleryImages = galImages.map((data) => {
    return (
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='gallery__pics'
        key={data._id}
        onClick={() => getImg(urlFor(data.galleryPicture))}
      >
        <LazyLoadImage
          src={urlFor(data.galleryPicture)}
          alt='gallery'
          effect='blur'
        />
      </motion.div>
    );
  });

  return (
    <>
      {loading && galImages.length !== 0 && compareImages.length !== 0 ? (
        <>
          <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transition}
          >
            <SEO
              title='Gallery - Beyond Detail Toronto'
              description='Premium car detailing services in Toronto (Scarborough area). Services include window tints, car wash, restoration, paint correction, paint protection, and much more.'
              name='Beyond Detail Toronto'
              type='website'
            />
            <div className='gallery__wrapper'>
              <motion.div
                className='galleryHeader'
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2.0 }}
                viewport={{ once: true }}
              >
                <h1>GALLERY</h1>
              </motion.div>
              <motion.div
                className='gallery__imageSlider__container'
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className='gallery__imageSlider'>
                  <ImageSlider
                    image1={urlFor(compareImages[0].comparisonSlider1.image2)}
                    image2={urlFor(compareImages[0].comparisonSlider1.image1)}
                    sliderColor='var(--secondary-color)'
                    handleBackgroundColor='var(--white-color)'
                    handleColor='var(--background-color)'
                  />
                  <ImageSlider
                    image1={urlFor(compareImages[0].comparisonSlider2.image2)}
                    image2={urlFor(compareImages[0].comparisonSlider2.image1)}
                    sliderColor='var(--secondary-color)'
                    handleBackgroundColor='var(--white-color)'
                    handleColor='var(--background-color)'
                  />
                </div>
              </motion.div>
              <div className={model ? 'model open' : 'model'}>
                <img src={tempImgSrc} loading='lazy' alt='large' />
                <GrClose onClick={() => setModel(false)} />
              </div>
              <div className='image__wrapper'>{galleryImages}</div>
            </div>
            <Contact />
          </motion.div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(Gallery);
