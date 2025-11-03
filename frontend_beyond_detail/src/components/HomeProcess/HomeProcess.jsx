import React, { useState, useEffect } from 'react';
import images from '../../constants/images';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import './HomeProcess.scss';

function HomeProcess() {
  const [process, setProcess] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "homeProcess"]';

    client.fetch(query).then((data) => {
      setProcess(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <section className='homeProcess__section'>
          <motion.div
            className='homeProcess__heading'
            whileInView={{ y: [30, 0], opacity: [0, 1] }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          >
            {process.length !== 0 && (
              <>
                <h3 className='process__title'>{process[0].smallHeading}</h3>
                <h1 className='process__largeTitle'>{process[0].heading}</h1>
                <p className='process__description'>{process[0].description}</p>
              </>
            )}
          </motion.div>
          <motion.div
            className='homeProcess__items'
            whileInView={{ y: [30, 0], opacity: [0, 1] }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
          >
            {process.length !== 0 && (
              <>
                <div className='homeProcess__item1'>
                  <img
                    src={images.processOne}
                    className='homeProcess__processOne__icon'
                    loading='lazy'
                    alt='process one'
                  />
                  <h1>{process[0].icon1Title}</h1>
                </div>
                <div className='homeProcess__item2'>
                  <img
                    src={images.processTwo}
                    className='homeProcess__processTwo'
                    loading='lazy'
                    alt='process two'
                  />
                  <h1>{process[0].icon2Title}</h1>
                </div>
                <div className='homeProcess__item3'>
                  <img
                    src={images.processThree}
                    className='homeProcess__processThree'
                    loading='lazy'
                    alt='process three'
                  />
                  <h1>{process[0].icon3Title}</h1>
                </div>
                <div className='homeProcess__item4'>
                  <img
                    src={images.processFour}
                    className='homeProcess__processFour'
                    loading='lazy'
                    alt='process four'
                  />
                  <h1>{process[0].icon4Title}</h1>
                </div>
              </>
            )}
          </motion.div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(HomeProcess);
