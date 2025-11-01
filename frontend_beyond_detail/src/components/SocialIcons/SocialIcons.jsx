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
            <a href='https://www.instagram.com/beyonddetail.ca/' target='_blank' rel='noopener noreferrer'>
              <BsInstagram />
            </a>
          </span>
        </div>

        <div className='socialIcons__icon twitter'>
          <span>
            <a href='https://x.com/BeyondDetailca' target='_blank' rel='noopener noreferrer'>
              <BsTwitter />
            </a>
          </span>
        </div>

        <div className='socialIcons__icon facebook'>
          <span>
            <a href='https://www.facebook.com/people/Beyond-Detail-Scarborough/100088669617846/' target='_blank' rel='noopener noreferrer'>
              <FaFacebookF />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SocialIcons;
