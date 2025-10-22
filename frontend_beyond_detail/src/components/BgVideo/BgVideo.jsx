import React, { useState, useEffect } from 'react';
import './BgVideo.scss';
import { motion } from 'framer-motion';
import { Loading } from '../../components';
import { urlFor, client } from '../../client';

function BgVideo() {
  const [heading, setHeading] = useState([]);
  const [loading, setLoading] = useState(false);

  // get heading data from sanity
  useEffect(() => {
    const query = '*[_type == "homeVideoBackground"]';

    client.fetch(query).then((data) => {
      setHeading(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className='hero-container'>
          <video 
            src={heading[0]?.videoUrl || ''} 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <div className='noise-overlay'></div>
          <div className='color-overlay'></div>
          <div className='gradient-overlay'></div>
          <div className='viewport-header'>
            <motion.div
              className='ellipses-container'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2.0 }}
              viewport={{ once: true }}
            >
              <div className='ellipses ellipses__outer--thin'></div>

              <div className='ellipses ellipses__outer--thick'></div>
            </motion.div>
            {heading.length !== 0 && (
              <div className='greeting__wrapper'>
                <h3 className='greetingTop'>FULL-SERVICE</h3>
                <h2 className='greeting'>{heading[0].heading}</h2>
                <h2 className='greetingBottom'>{heading[0].headingTwo}</h2>
              </div>
            )}
          </div>
          <div className='scroll-down'></div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(BgVideo);
