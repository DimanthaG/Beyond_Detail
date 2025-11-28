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

    client.fetch(query)
      .then((data) => {
        setTintsMaterialsData(data);
        setLoading(true);
      })
      .catch((error) => {
        console.error('Error fetching tints materials data:', error);
        setLoading(false);
      });
  }, []);

  const materialsData = tintsMaterialsData[0]?.tintsMaterials;

  return (
    <>
      {loading && materialsData ? (
        <>
          <span className='anchor' id='tintsMaterials'></span>
          <div className='tintsMaterials__wrapper '>
            <div className='tintsMaterials__grid'>
              <div className='tintsMaterials__image'>
                {materialsData.image && (
                  <LazyLoadImage
                    src={urlFor(materialsData.image)}
                    alt={materialsData.heading || 'Window tint materials'}
                    effect='blur'
                    className='tintsMaterials__image__img'
                    width={800}
                    height={600}
                  />
                )}
              </div>
              <div className='tintsMaterials__description'>
                <div className='tintsMaterials__description__inner'>
                  {materialsData.topText && <h3>{materialsData.topText}</h3>}
                  {materialsData.heading && <h1>{materialsData.heading}</h1>}
                  {materialsData.description && <p>{materialsData.description}</p>}
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
