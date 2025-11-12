import React, { useRef, useEffect, useState } from 'react';
import './InfoSection.scss';
import { urlFor, client } from '../../client';
import { useNavigate } from 'react-router-dom';

function InfoSection() {
  const [info, setInfo] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const query = '*[_type == "homeInfoSection"]';

    client.fetch(query).then((data) => {
      setInfo(data);
    });
  }, []);

  const infoTop = useRef();
  const infoBottom = useRef();
  // const infoBottomPic = useRef();

  useEffect(() => {
    const appearOptions = {
      threshold: 0,
      rootMargin: '0px 0px -250px 0px',
    };

    const appearOptionsTwo = {
      threshold: 0,
      rootMargin: '0px 0px -100px 0px',
    };

    const appearOptionsThree = {
      threshold: 0,
      rootMargin: '0px 0px -90px 0px',
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    const appearOnScrollTwo = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptionsTwo);

    new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptionsThree);

    appearOnScroll.observe(infoTop.current);
    appearOnScrollTwo.observe(infoBottom.current);
    // appearOnScrollThree.observe(infoBottomPic.current);
  });

  return (
    <section className='info__section'>
      <div className='info__container fade-in' ref={infoTop}>
        <div className='column__left'>
          {info.length !== 0 && <h1>{info[0].headerOne}</h1>}
          {info.length !== 0 && (
            <p className='column__left__text'>{info[0].messageOne}</p>
          )}
          {info.length !== 0 && (
            <>
              <div className='btn__vertLine'></div>

              <div
                onClick={() => navigate('/gallery')}
                className='btn btn-color btn-l-r'
              >
                <p>{info[0].buttonLabelOne}</p>
              </div>
            </>
          )}
        </div>
        <div className='column__right'>
          {info.length !== 0 && (
            <img src={urlFor(info[0].imageOne)} alt='gallery' loading='lazy' />
          )}
        </div>
      </div>

      <div className='info__container__bottom fade-in' ref={infoBottom}>
        <div className='column__left__bottom '>
          {info.length !== 0 && (
            <img src={urlFor(info[0].imageTwo)} alt='gallery' loading='lazy' />
          )}
        </div>
        <div className='column__right__bottom'>
          {info.length !== 0 && <h1>{info[0].headerTwo}</h1>}
          {info.length !== 0 && (
            <p className='column__right__text'>{info[0].messageTwo}</p>
          )}
          {info.length !== 0 && (
            <>
              <div className='btn__vertLine'></div>

              <div
                onClick={() => navigate('/auto-detail')}
                className='btn btn-color btn-l-r'
              >
                <p>{info[0].buttonLabelTwo}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default React.memo(InfoSection);
