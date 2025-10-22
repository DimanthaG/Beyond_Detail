import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import { Loading } from '../../components';
import './HomeDetailSection.scss';

function HomeDetailSection() {
  const [heading, setHeading] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query =
      '*[_type == "homeDetailSectionHeading"] | order(_createdAt desc)';

    client.fetch(query).then((data) => {
      setHeading(data);
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    const query = '*[_type == "homeDetailSection"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  const serviceSec = services.map((data) => {
    return (
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='homeDetail__service'
        key={data._id}
      >
        <div className='vertLine'></div>
        <h1>{data.services.title}</h1>
        <p>{data.services.description}</p>
      </motion.div>
    );
  });

  return (
    <>
      {loading ? (
        <section className='homeDetail__section'>
          <div className='homeDetail__wrapper'>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='homeDetail__heading'
            >
              {heading.length !== 0 && <h1>{heading[0].heading}</h1>}
            </motion.div>
            <div className='homeDetail__services_wrapper'>
              <div className='homeDetail__services'>{serviceSec}</div>
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(HomeDetailSection);
