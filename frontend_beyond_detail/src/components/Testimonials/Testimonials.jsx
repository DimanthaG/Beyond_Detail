import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Loading } from '../../components';
import images from '../../constants/images';
import { urlFor, client } from '../../client';
import './Testimonials.scss';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
      setLoading(true);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const test = testimonials[currentIndex];

  return (
    <>
      {loading ? (
        <>
          {testimonials.length !== 0 && (
            <motion.div
              className='app__testimonial'
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className='app__testimonial-item app__flex'>
                <div className='app__testimonial-content'>
                  <div className='app__testimonial-item__img'>
                    <img
                      src={images.quoteMarks}
                      alt='quote-marks'
                      loading='lazy'
                    />
                  </div>
                  <p className='p-text'>" {test.message} "</p>
                  <div>
                    <h4 className='bold-text'>- {test.name}</h4>
                    <h5>{test.company}</h5>
                  </div>
                </div>
              </div>

              <div className='app__testimonial-btns app__flex'>
                <div
                  className='app__flex'
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonials.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <HiChevronLeft />
                </div>
                <div
                  className='app__flex'
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonials.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <HiChevronRight />
                </div>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(Testimonials);
