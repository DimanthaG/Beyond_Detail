import React, { useState, useEffect } from 'react';
import './HoverSlider.scss';

function HoverSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Set initial active slide
    const buttons = document.querySelectorAll('.slide-buttons li');
    const sections = document.querySelectorAll('.hero-center-section');
    
    if (buttons.length > 0 && sections.length > 0) {
      buttons[0]?.classList.add('active');
      sections[0]?.classList.add('show');
    }
  }, []);

  const handleSlideHover = (index) => {
    setActiveSlide(index);
    
    // Remove active class from all buttons and sections
    const buttons = document.querySelectorAll('.slide-buttons li');
    const sections = document.querySelectorAll('.hero-center-section');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('show'));
    
    // Add active class to selected button and section
    if (buttons[index]) buttons[index].classList.add('active');
    if (sections[index]) sections[index].classList.add('show');
  };

  return (
    <>
      <div className='hero-center-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='img-wrap'>
                <img
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/travel.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-center-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='img-wrap'>
                <img
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/fashion.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-center-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='img-wrap'>
                <img
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/animals.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hero-center-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='img-wrap'>
                <img
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/business.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='hero-center-section'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-8'>
              <div class='img-wrap'>
                <img
                  src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/art.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section padding-top-bottom over-hide z-bigger'>
        <ul className='slide-buttons'>
          <li onMouseEnter={() => handleSlideHover(0)}>
            <a href='#0' className='hover-target' data-hover='services' aria-label="Services slide">services</a>
          </li>
          <li onMouseEnter={() => handleSlideHover(1)}>
            <a href='#0' className='hover-target' data-hover='travel'>
              travel
            </a>
          </li>
          <li onMouseEnter={() => handleSlideHover(2)}>
            <a href='#0' className='hover-target' data-hover='fashion'>
              fashion
            </a>
          </li>
          <li onMouseEnter={() => handleSlideHover(3)}>
            <a href='#0' className='hover-target' data-hover='animals'>
              animals
            </a>
          </li>
          <li onMouseEnter={() => handleSlideHover(4)}>
            <a href='#0' className='hover-target' data-hover='business'>
              business
            </a>
          </li>
          <li onMouseEnter={() => handleSlideHover(5)}>
            <a href='#0' className='hover-target' data-hover='art'>
              art
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HoverSlider;
