import React, { useState, useEffect } from 'react';
import images from '../../constants/images';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import { motion } from 'framer-motion';
import './Partners.scss';

function Partners() {
  const [partnerLogo, setPartnerLogo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "partners"]';

    client.fetch(query).then((data) => {
      setPartnerLogo(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          className='slider__wrapper'
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='slider__heading'>
            <h1>{partnerLogo[0].header}</h1>
            <hr className='slider__divider' />
            <p>{partnerLogo[0].description}</p>
          </div>
          <div className='slider__partners'>
            <div className='slide-track'>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner1)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner2)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner3)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner4)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner1)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner2)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner3)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner4)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner1)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner2)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner3)}
                  height='100'
                  width='250'
                  alt=''
                />
              </div>
              <div className='slide'>
                <img
                  src={urlFor(partnerLogo[0].partner4)}
                  height='100'
                  width='250'
                  alt=''
                />
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

export default React.memo(Partners);
