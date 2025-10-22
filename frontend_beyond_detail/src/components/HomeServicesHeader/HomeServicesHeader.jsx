import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { Loading } from '../../components';
import './HomeServicesHeader.scss';

function HomeServicesHeader() {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = '*[_type == "homeServicesHeader"]';

    client.fetch(query).then((data) => {
      setHeader(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <section className='homeServicesHeader__section'>
          <div className='homeServicesHeader__textContainer'>
            {header.length !== 0 && (
              <>
                <div className='homeServicesHeader__price'>
                  <h1>{header[0].price}</h1>
                </div>
                <div className='homeServicesHeader__description'>
                  <h3>{header[0].promotion}</h3>
                  <h2>{header[0].heading}</h2>
                  <p>{header[0].description}</p>
                  <div className='btn__vertLine2'></div>
                  <a
                    href={header[0].buttonUrl}
                    className='btn2 btn-color2 btn-l-r2'
                  >
                    <p>{header[0].buttonLabel}</p>
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default React.memo(HomeServicesHeader);
