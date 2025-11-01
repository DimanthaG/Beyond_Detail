import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { Contact, Loading, SEO } from '../../components';
import { animationOne, transition } from '../../components/Transition';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Services.scss';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  // scroll to top on page render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
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
              title='Auto Detail - Beyond Detail Toronto'
              description='Premium car detailing services in Toronto (Scarborough area). Services include window tints, car wash, restoration, paint correction, paint protection, and much more.'
              name='Beyond Detail Toronto'
              type='website'
            />
            <div className='services__wrapper'>
              {services.length !== 0 && (
                <>
                  <motion.div
                    className='servicesHeader'
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 2.0 }}
                    viewport={{ once: true }}
                  >
                    <h1>{services[0].servicesMainHeader}</h1>
                  </motion.div>
                  <div className='servicesTintWrapper'>
                    <div className='firstRowWrapper'>
                      <motion.div
                        className='leftCol1'
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={urlFor(services[0].firstRow.picture)}
                          loading='lazy'
                          alt='window tint'
                        />
                      </motion.div>
                      <motion.div
                        className='rightCol1'
                        id='windowTint'
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className='rightCol1Container'>
                          <div className='rightCol1ContainerText'>
                            <h1>{services[0].firstRow.service1}</h1>
                            <p>{services[0].firstRow.description}</p>

                            <div className='rightCol1ContainerText__option'>
                              <h3>{services[0].firstRow.options.option1}</h3>
                              <h3 className='options__price'>
                                {services[0].firstRow.options.price1}
                              </h3>
                            </div>

                            <div className='rightCol1ContainerText__option'>
                              <h3>{services[0].firstRow.options.option2}</h3>
                              <h3 className='options__price'>
                                {services[0].firstRow.options.price2}
                              </h3>
                            </div>

                            <div className='rightCol1ContainerText__option'>
                              <h3>{services[0].firstRow.options.option3}</h3>
                              <h3 className='options__price'>
                                {services[0].firstRow.options.price3}
                              </h3>
                            </div>

                            <div className='rightCol1ContainerText__option last__option'>
                              <h3>{services[0].firstRow.options.option4}</h3>
                              <h3 className='options__price'>
                                {services[0].firstRow.options.price4}
                              </h3>
                            </div>
                            <p className='shade__options'>
                              {services[0].firstRow.bottomDescription}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className='secondRowWrapper'>
                      <motion.div
                        className='leftCol2'
                        id='exteriorServices'
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className='leftCol2Container'>
                          <div className='leftCol2ContainerText'>
                            <h1>{services[0].secondRow.service2}</h1>
                            <p>{services[0].secondRow.description}</p>

                            <div className='leftCol2ContainerText__option'>
                              <h3>{services[0].secondRow.options.option1}</h3>
                              <h3 className='options__price'>
                                {services[0].secondRow.options.price1}
                              </h3>
                            </div>

                            <div className='leftCol2ContainerText__option'>
                              <h3>{services[0].secondRow.options.option2}</h3>
                              <h3 className='options__price'>
                                {services[0].secondRow.options.price2}
                              </h3>
                            </div>

                            <div className='leftCol2ContainerText__option last__option'>
                              <h3>{services[0].secondRow.options.option3}</h3>
                              <h3 className='options__price'>
                                {services[0].secondRow.options.price3}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className='rightCol2'
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <LazyLoadImage
                          src={urlFor(services[0].secondRow.picture)}
                          loading='lazy'
                          alt='exterior services'
                          effect='blur'
                        />
                      </motion.div>
                    </div>

                    <div className='thirdRowWrapper'>
                      <motion.div
                        className='leftCol3'
                        id='paintCorrection'
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <LazyLoadImage
                          src={urlFor(services[0].thirdRow.picture)}
                          loading='lazy'
                          alt='paint correction'
                          effect='blur'
                        />
                      </motion.div>
                      <motion.div
                        className='rightCol3'
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className='rightCol3Container'>
                          <div className='rightCol3ContainerText'>
                            <h1>{services[0].thirdRow.service3}</h1>
                            <p>{services[0].thirdRow.description}</p>

                            <div className='rightCol3ContainerText__option'>
                              <h3>{services[0].thirdRow.options.option1}</h3>
                              <h3 className='options__price'>
                                {services[0].thirdRow.options.price1}
                              </h3>
                            </div>

                            <div className='rightCol3ContainerText__option'>
                              <h3>{services[0].thirdRow.options.option2}</h3>
                              <h3 className='options__price'>
                                {services[0].thirdRow.options.price2}
                              </h3>
                            </div>

                            <div className='rightCol3ContainerText__option last__option'>
                              <h3>{services[0].thirdRow.options.option3}</h3>
                              <h3 className='options__price'>
                                {services[0].thirdRow.options.price3}
                              </h3>
                            </div>
                            <p className='shade__options'>
                              {services[0].thirdRow.bottomDescription}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <div className='fourthRowWrapper'>
                      <motion.div
                        className='leftCol4'
                        id='paintProtection'
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className='leftCol4Container'>
                          <div className='leftCol4ContainerText'>
                            <h1>{services[0].fourthRow.service4}</h1>
                            <p>{services[0].fourthRow.description}</p>

                            <div className='leftCol4ContainerText__option'>
                              <h3>{services[0].fourthRow.options.option1}</h3>
                              <h3 className='options__price'>
                                {services[0].fourthRow.options.price1}
                              </h3>
                            </div>

                            <div className='leftCol4ContainerText__option'>
                              <h3>{services[0].fourthRow.options.option2}</h3>
                              <h3 className='options__price'>
                                {services[0].fourthRow.options.price2}
                              </h3>
                            </div>

                            <div className='leftCol4ContainerText__option'>
                              <h3>{services[0].fourthRow.options.option3}</h3>
                              <h3 className='options__price'>
                                {services[0].fourthRow.options.price3}
                              </h3>
                            </div>

                            <div className='leftCol4ContainerText__option last__option'>
                              <h3>{services[0].fourthRow.options.option4}</h3>
                              <h3 className='options__price'>
                                {services[0].fourthRow.options.price4}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className='rightCol4'
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <LazyLoadImage
                          src={urlFor(services[0].fourthRow.picture)}
                          loading='lazy'
                          alt='paint protection'
                          className='rightCol4__img'
                        />
                      </motion.div>
                    </div>

                    <div className='fifthRowWrapper'>
                      <motion.div
                        className='leftCol5'
                        id='otherProtection'
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <LazyLoadImage
                          src={urlFor(services[0].fifthRow.picture)}
                          loading='lazy'
                          alt='other protection'
                          effect='blur'
                        />
                      </motion.div>
                      <motion.div
                        className='rightCol5'
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className='rightCol5Container'>
                          <div className='rightCol5ContainerText'>
                            <h1>{services[0].fifthRow.service5}</h1>
                            <p>{services[0].fifthRow.description}</p>

                            <div className='rightCol5ContainerText__option'>
                              <h3>{services[0].fifthRow.options.option1}</h3>
                              <h3 className='options__price'>
                                {services[0].fifthRow.options.price1}
                              </h3>
                            </div>

                            <div className='rightCol5ContainerText__option'>
                              <h3>{services[0].fifthRow.options.option2}</h3>
                              <h3 className='options__price'>
                                {services[0].fifthRow.options.price2}
                              </h3>
                            </div>

                            <div className='rightCol5ContainerText__option'>
                              <h3>{services[0].fifthRow.options.option3}</h3>
                              <h3 className='options__price'>
                                {services[0].fifthRow.options.price3}
                              </h3>
                            </div>

                            <div className='rightCol5ContainerText__option'>
                              <h3>{services[0].fifthRow.options.option4}</h3>
                              <h3 className='options__price'>
                                {services[0].fifthRow.options.price4}
                              </h3>
                            </div>

                            <div className='rightCol5ContainerText__option'>
                              <h3>{services[0].fifthRow.options.option5}</h3>
                              <h3 className='options__price'>
                                {services[0].fifthRow.options.price5}
                              </h3>
                            </div>

                            <div className='rightCol5ContainerText__option last__option'>
                              <h3>{services[0].fifthRow.options.option6}</h3>
                              <h3 className='options__price'>
                                {services[0].fifthRow.options.price6}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <motion.div
                      className='bottomAnimation'
                      whileInView={{ y: [100, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <p className='services__disclaimer'>
                        {services[0].bottomDisclaimer}
                      </p>
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

export default React.memo(Services);
