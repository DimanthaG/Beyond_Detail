import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import './TintsPackages.scss';

function TintsPackages() {
  const [tintsPackagesData, setTintsPackagesData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get Tints Packages Section Data
  useEffect(() => {
    const query = '*[_type == "tints"]';

    client.fetch(query).then((data) => {
      setTintsPackagesData(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading && tintsPackagesData.length !== 0 ? (
        <motion.div
          className='tintsPackages__wrapper'
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='tintsPackages__grid'>
            <div className='tintsPackages__grid1'>
              <h1 className='tintsPackages__grid1__price'>
                <span className='tintsPackages__dollarSign'>$</span>
                {tintsPackagesData[0].tintsPackages.box1.price}
              </h1>
              <h3 className='tintsPackages__grid1__description'>
                {tintsPackagesData[0].tintsPackages.box1.heading}
              </h3>
              <div className='arrow-button'>
                <a href='#bookingComponent'>
                  {tintsPackagesData[0].tintsPackages.box1.btnLabel}
                </a>
              </div>
            </div>
            <div className='tintsPackages__grid2'>
              <h1 className='tintsPackages__grid2__price'>
                <span className='tintsPackages__dollarSign'>$</span>
                {tintsPackagesData[0].tintsPackages.box2.price}
              </h1>
              <h3 className='tintsPackages__grid2__description'>
                {tintsPackagesData[0].tintsPackages.box2.heading}
              </h3>
              <div className='arrow-button2'>
                <a href='#bookingComponent'>
                  {tintsPackagesData[0].tintsPackages.box2.btnLabel}
                </a>
              </div>
            </div>
            <div className='tintsPackages__grid3'>
              <h1 className='tintsPackages__grid3__price'>
                <span className='tintsPackages__startingAt'>
                  {tintsPackagesData[0].tintsPackages.box3.startingAt}{' '}
                </span>
                <span className='tintsPackages__dollarSign'>$</span>
                {tintsPackagesData[0].tintsPackages.box3.price}
              </h1>
              <h3 className='tintsPackages__grid3__description'>
                {tintsPackagesData[0].tintsPackages.box3.heading}
              </h3>
              <div className='arrow-button3'>
                <a href='#bookingComponent'>
                  {tintsPackagesData[0].tintsPackages.box3.btnLabel}
                </a>
              </div>
            </div>
            <div className='tintsPackages__grid4'>
              <h1 className='tintsPackages__grid4__price'>
                <span className='tintsPackages__dollarSign'>$</span>
                {tintsPackagesData[0].tintsPackages.box4.price}
              </h1>
              <h3 className='tintsPackages__grid4__description'>
                {tintsPackagesData[0].tintsPackages.box4.heading}
              </h3>
              <div className='arrow-button4'>
                <a href='#bookingComponent'>
                  {tintsPackagesData[0].tintsPackages.box4.btnLabel}
                </a>
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

export default React.memo(TintsPackages);
