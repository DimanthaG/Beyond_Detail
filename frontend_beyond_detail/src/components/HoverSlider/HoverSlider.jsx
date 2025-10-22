import React, { useEffect } from 'react';
import './HoverSlider.scss';
import jQuery from 'jquery';

function HoverSlider() {
  (function ($) {
    $(document).ready(function () {
      /* Hero Case study images */

      $('.slide-buttons li:nth-child(1)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass('show');
        $('.hero-center-section:nth-child(1)').addClass('show');
        $('.slide-buttons li:nth-child(1)').addClass('active');
      });
      $('.slide-buttons li:nth-child(2)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass('show');
        $('.hero-center-section:nth-child(2)').addClass('show');
        $('.slide-buttons li:nth-child(2)').addClass('active');
      });
      $('.slide-buttons li:nth-child(3)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass('show');
        $('.hero-center-section:nth-child(3)').addClass('show');
        $('.slide-buttons li:nth-child(3)').addClass('active');
      });
      $('.slide-buttons li:nth-child(4)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass('show');
        $('.hero-center-section:nth-child(4)').addClass('show');
        $('.slide-buttons li:nth-child(4)').addClass('active');
      });
      $('.slide-buttons li:nth-child(5)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass('show');
        $('.hero-center-section:nth-child(5)').addClass('show');
        $('.slide-buttons li:nth-child(5)').addClass('active');
      });
      $('.slide-buttons li:nth-child(6)').on('mouseenter', function () {
        $('.slide-buttons li.active').removeClass('active');
        $('.hero-center-section.show').removeClass('show');
        $('.hero-center-section:nth-child(6)').addClass('show');
        $('.slide-buttons li:nth-child(6)').addClass('active');
      });
      $('.slide-buttons li:nth-child(1)').trigger('mouseenter');
    });
  })(jQuery);

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
          <li className=''>
            <a href='#0' className='hover-target' data-hover='services'></a>
          </li>
          <li className=''>
            <a href='#0' className='hover-target' data-hover='travel'>
              travel
            </a>
          </li>
          <li className=''>
            <a href='#0' className='hover-target' data-hover='fashion'>
              fashion
            </a>
          </li>
          <li className=''>
            <a href='#0' className='hover-target' data-hover='animals'>
              animals
            </a>
          </li>
          <li className=''>
            <a href='#0' className='hover-target' data-hover='business'>
              business
            </a>
          </li>
          <li className=''>
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
