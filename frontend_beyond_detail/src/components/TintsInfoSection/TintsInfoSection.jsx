import React, { useState, useEffect, useRef } from 'react';
import images from '../../constants/images';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import { Loading } from '../../components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './TintsInfoSection.scss';

function TintsInfoSection() {
  const [tintsInfoData, setTintsInfoData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get Tints Info Section Data
  useEffect(() => {
    const query = '*[_type == "tints"]';

    client.fetch(query).then((data) => {
      setTintsInfoData(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading && tintsInfoData.length !== 0 ? (
        <motion.div
          className='tints__topRow__wrapper'
          whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
        >
          <div className='tints__topRow__left'>
            <h3 className='tints__topRow__left__topText'>
              {tintsInfoData[0].tintsInfoSection.topText}
            </h3>
            <h1 className='tints__topRow__left__title'>
              {tintsInfoData[0].tintsInfoSection.heading}
            </h1>
            <p className='tints__topRow__left__description'>
              {tintsInfoData[0].tintsInfoSection.description}
            </p>
            <hr className='tints__topRow__left__hr' />
            <div className='btn__vertLine3'></div>
            <a href='#tintsMaterials' className='btn3 btn-color3 btn-l-r3'>
              <p>{tintsInfoData[0].tintsInfoSection.btnText}</p>
            </a>
          </div>
          <div className='tints__topRow__right'>
            <div className='tints__topRow__right_firstColumn'>
              <LazyLoadImage
                src={urlFor(tintsInfoData[0].tintsInfoSection.image1)}
                alt=''
                className='tints__topRow__right_firstColumn__topPic'
                effect='blur'
              />

              <div className='tints__topRow__right_firstColumn__bottomPic__imgWrapper'>
                <LazyLoadImage
                  src={urlFor(tintsInfoData[0].tintsInfoSection.image2.image)}
                  alt=''
                  className='tints__topRow__right_firstColumn__bottomPic'
                  effect='blur'
                />
                <h1 className='tints__topRow__right_firstColumn__bottomPic__textHeading'>
                  {tintsInfoData[0].tintsInfoSection.image2.heading}
                </h1>
                <p className='tints__topRow__right_firstColumn__bottomPic__textDescription'>
                  {tintsInfoData[0].tintsInfoSection.image2.description}
                </p>
              </div>
            </div>
            <div className='tints__topRow__right_secondColumn'>
              <div className='tints__topRow__right_secondColumn__topPic__imgWrapper'>
                <LazyLoadImage
                  src={urlFor(tintsInfoData[0].tintsInfoSection.image3.image)}
                  alt=''
                  className='tints__topRow__right_secondColumn__topPic'
                  effect='blur'
                />
                <h1 className='tints__topRow__right_secondColumn__topPic__textHeading'>
                  {tintsInfoData[0].tintsInfoSection.image3.heading}
                </h1>
                <p className='tints__topRow__right_secondColumn__topPic__textDescription'>
                  {tintsInfoData[0].tintsInfoSection.image3.description}
                </p>
              </div>
              <div className='tints__topRow__right_secondColumn__bottomPic__imgWrapper'>
                <LazyLoadImage
                  src={urlFor(tintsInfoData[0].tintsInfoSection.image4.image)}
                  alt=''
                  className='tints__topRow__right_secondColumn__bottomPic'
                  effect='blur'
                />
                <h1 className='tints__topRow__right_secondColumn__bottomPic__textHeading'>
                  {tintsInfoData[0].tintsInfoSection.image4.heading}
                </h1>
                <p className='tints__topRow__right_secondColumn__bottomPic__textDescription'>
                  {tintsInfoData[0].tintsInfoSection.image4.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(TintsInfoSection);
