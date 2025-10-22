import React, { useState, useEffect } from 'react';
import images from '../../constants/images';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { Contact, Loading, SEO } from '../../components';
import { animationOne, transition } from '../../components/Transition';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './About.scss';

function About() {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(false);

  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAboutData(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transition}
          >
            <SEO
              title='About - Beyond Detail Oshawa'
              description='Premium car detailing services in Oshawa. Services include window tints, car wash, restoration, paint correction, paint protection, and much more.'
              name='Beyond Detail Oshawa'
              type='website'
            />
            <div className='aboutHeader__wrapper'>
              {aboutData.length !== 0 && (
                <>
                  <motion.div
                    className='aboutHeader'
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 2.0 }}
                    viewport={{ once: true }}
                  >
                    <h1>{aboutData[0].aboutMainHeader}</h1>
                  </motion.div>
                  <div className='aboutHeader__columnWrapperTop'>
                    <motion.div
                      className='aboutHeader__topLeft'
                      whileInView={{ y: [100, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className='topLeft__innerContainer'
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                      >
                        <div className='innerContainerDetails'>
                          <img src={images.quoteMarks} alt='quote' />
                          <h2>{aboutData[0].topRow.testimonial}</h2>
                          <p>{aboutData[0].topRow.clientName}</p>
                          <p className='clientTitle'>
                            {aboutData[0].topRow.clientCompany}
                          </p>
                        </div>
                      </motion.div>
                      <LazyLoadImage
                        src={urlFor(aboutData[0].topRow.testimonialPicture)}
                        alt='left'
                        // effect='blur'
                      />
                    </motion.div>
                    <div className='aboutHeader__topRight'>
                      <div className='aboutHeader__topRight__textContainer'>
                        <motion.div
                          className='topRowHeader'
                          whileInView={{ y: [100, 0], opacity: [0, 1] }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <h1>{aboutData[0].topRow.topRowHeader}</h1>
                        </motion.div>
                        <motion.div
                          className='aboutHeader__topRight__textContainer__descriptionContainer'
                          whileInView={{ y: [100, 0], opacity: [0, 1] }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <ul>
                            <li class='b1'>
                              {aboutData[0].topRow.checkList.text1}
                            </li>
                            <li class='b1'>
                              {aboutData[0].topRow.checkList.text2}
                            </li>
                            <li class='b1'>
                              {aboutData[0].topRow.checkList.text3}
                            </li>
                            <li class='b1'>
                              {aboutData[0].topRow.checkList.text4}
                            </li>
                          </ul>
                          <p>{aboutData[0].topRow.topRowDescription}</p>
                        </motion.div>
                        <motion.div
                          className='progress-wrapper'
                          whileInView={{ x: [100, 0], opacity: [0, 1] }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                          <div class='progress' data-percentage='100'>
                            <span class='progress-left'>
                              <span class='progress-bar'></span>
                            </span>
                            <span class='progress-right'>
                              <span class='progress-bar'></span>
                            </span>
                            <div class='progress-value'>
                              <div>
                                {aboutData[0].topRow.progressBar.percentage1}%
                                <br />
                                <span>
                                  {
                                    aboutData[0].topRow.progressBar
                                      .percentage1Description
                                  }
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class='progress' data-percentage='98'>
                            <span class='progress-left'>
                              <span class='progress-bar'></span>
                            </span>
                            <span class='progress-right'>
                              <span class='progress-bar'></span>
                            </span>
                            <div class='progress-value'>
                              <div>
                                {aboutData[0].topRow.progressBar.percentage2}%
                                <br />
                                <span>
                                  {
                                    aboutData[0].topRow.progressBar
                                      .percentage2Description
                                  }
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class='progress' data-percentage='80'>
                            <span class='progress-left'>
                              <span class='progress-bar'></span>
                            </span>
                            <span class='progress-right'>
                              <span class='progress-bar'></span>
                            </span>
                            <div class='progress-value'>
                              <div>
                                {aboutData[0].topRow.progressBar.percentage3}%
                                <br />
                                <span>
                                  {
                                    aboutData[0].topRow.progressBar
                                      .percentage3Description
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className='aboutHeader__columnWrapperBottom'>
                    <motion.div
                      className='aboutHeader__bottomLeft'
                      whileInView={{ y: [100, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className='aboutHeader__bottomLeft__textContainer'>
                        <h1>{aboutData[0].bottomRow.bottomRowHeader}</h1>
                        <p>{aboutData[0].bottomRow.bottomRowDescription}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className='aboutHeader__bottomRight'
                      whileInView={{ y: [100, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <LazyLoadImage
                        src={urlFor(aboutData[0].bottomRow.bottomRowPicture)}
                        alt='left'
                        effect='blur'
                      />
                    </motion.div>
                  </div>
                </>
              )}
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

export default React.memo(About);
