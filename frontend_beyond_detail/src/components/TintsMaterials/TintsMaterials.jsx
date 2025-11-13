import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './TintsMaterials.scss';

function TintsMaterials() {
  const [tintsMaterialsData, setTintsMaterialsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get Tints Materials Section Data
  useEffect(() => {
    const query = '*[_type == "tints"]';

    client.fetch(query).then((data) => {
      setTintsMaterialsData(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading && tintsMaterialsData.length !== 0 ? (
        <>
          <span className='anchor' id='tintsMaterials'></span>
          <div className='tintsMaterials__wrapper '>
            <div className='tintsMaterials__grid'>
              <div className='tintsMaterials__image'>
                <LazyLoadImage
                  src={urlFor(tintsMaterialsData[0].tintsMaterials.image)}
                  alt=''
                  effect='blur'
                  className='tintsMaterials__image__img'
                />
              </div>
              <div className='tintsMaterials__description'>
                <div className='tintsMaterials__description__inner'>
                  <h3>{tintsMaterialsData[0].tintsMaterials.topText}</h3>
                  <h1>{tintsMaterialsData[0].tintsMaterials.heading}</h1>
                  <p>{tintsMaterialsData[0].tintsMaterials.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(TintsMaterials);
