import React from 'react';
import './SocialIcons.scss';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className='socialIcons__box'>
      <div className='socialIcons__container'>
        <div className='socialIcons__icon instagram'>
          <span>
            <a href='http://google.com' target='_blank'>
              <BsInstagram />
            </a>
          </span>
        </div>

        <div className='socialIcons__icon twitter'>
          <span>
            <a href='http://google.com' target='_blank'>
              <BsTwitter />
            </a>
          </span>
        </div>

        <div className='socialIcons__icon facebook'>
          <span>
            <a href='http://google.com' target='_blank'>
              <FaFacebookF />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SocialIcons;
