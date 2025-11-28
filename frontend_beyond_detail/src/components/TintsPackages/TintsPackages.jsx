import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '../../client';
import { Loading } from '../../components';
import './TintsPackages.scss';

function TintsPackages() {
  const [tintsPackagesData, setTintsPackagesData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get Tints Packages Section Data
  useEffect(() => {
    const query = '*[_type == "tints"]';

    client.fetch(query)
      .then((data) => {
        setTintsPackagesData(data);
        setLoading(true);
      })
      .catch((error) => {
        console.error('Error fetching tints packages data:', error);
        setLoading(false);
      });
  }, []);

  const packagesData = tintsPackagesData[0]?.tintsPackages;

  return (
    <>
      {loading && packagesData ? (
        <motion.div
          className='tintsPackages__wrapper'
          whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
        >
          <div className='tintsPackages__grid'>
            {packagesData.box1 && (
              <div className='tintsPackages__grid1'>
                <h1 className='tintsPackages__grid1__price'>
                  <span className='tintsPackages__dollarSign'>$</span>
                  {packagesData.box1.price}
                </h1>
                <h3 className='tintsPackages__grid1__description'>
                  {packagesData.box1.heading}
                </h3>
                <div className='arrow-button'>
                  <a href='#bookingComponent'>
                    {packagesData.box1.btnLabel}
                  </a>
                </div>
              </div>
            )}
            {packagesData.box2 && (
              <div className='tintsPackages__grid2'>
                <h1 className='tintsPackages__grid2__price'>
                  <span className='tintsPackages__dollarSign'>$</span>
                  {packagesData.box2.price}
                </h1>
                <h3 className='tintsPackages__grid2__description'>
                  {packagesData.box2.heading}
                </h3>
                <div className='arrow-button2'>
                  <a href='#bookingComponent'>
                    {packagesData.box2.btnLabel}
                  </a>
                </div>
              </div>
            )}
            {packagesData.box3 && (
              <div className='tintsPackages__grid3'>
                <h1 className='tintsPackages__grid3__price'>
                  {packagesData.box3.startingAt && (
                    <span className='tintsPackages__startingAt'>
                      {packagesData.box3.startingAt}{' '}
                    </span>
                  )}
                  <span className='tintsPackages__dollarSign'>$</span>
                  {packagesData.box3.price}
                </h1>
                <h3 className='tintsPackages__grid3__description'>
                  {packagesData.box3.heading}
                </h3>
                <div className='arrow-button3'>
                  <a href='#bookingComponent'>
                    {packagesData.box3.btnLabel}
                  </a>
                </div>
              </div>
            )}
            {packagesData.box4 && (
              <div className='tintsPackages__grid4'>
                <h1 className='tintsPackages__grid4__price'>
                  <span className='tintsPackages__dollarSign'>$</span>
                  {packagesData.box4.price}
                </h1>
                <h3 className='tintsPackages__grid4__description'>
                  {packagesData.box4.heading}
                </h3>
                <div className='arrow-button4'>
                  <a href='#bookingComponent'>
                    {packagesData.box4.btnLabel}
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(TintsPackages);
