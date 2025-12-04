import React from 'react';
import images from '../../constants/images';
import llumarLogo400 from '../../assets/Partners/Llumar-400w.webp';
import llumarLogo800 from '../../assets/Partners/Llumar-800w.webp';
import iwfaLogo400 from '../../assets/Partners/IWFA-400w.webp';
import iwfaLogo800 from '../../assets/Partners/IWFA-800w.webp';
import cancerLogo400 from '../../assets/Partners/CancerFoundation-400w.webp';
import cancerLogo800 from '../../assets/Partners/CancerFoundation-800w.webp';
import carstarsLogo400 from '../../assets/Partners/Carstars-400w.webp';
import carstarsLogo800 from '../../assets/Partners/Carstars-800w.webp';
import menzernaLogo400 from '../../assets/Partners/menzerna-400w.webp';
import menzernaLogo800 from '../../assets/Partners/menzerna-800w.webp';
import './PartnersCompact.scss';

// Partner logos - using local assets
// Duplicate logos for seamless infinite scroll
const partners = [
  {
    name: 'igl coatings',
    logo: images.igl_logo,
  },
  {
    name: 'HÜPER OPTIK™',
    logo: images.huper_logo,
  },
  {
    name: '3M',
    logo: images.threeEm_logo,
  },
  {
    name: 'spara',
    logo: images.sparco_logo,
  },
  {
    name: 'LLumar',
    logo: images.llumar_logo,
    srcSet: `${llumarLogo400} 400w, ${llumarLogo800} 800w`,
    sizes: '(max-width: 768px) 120px, 175px',
  },
  {
    name: 'EASTMAN',
    logo: images.eastman_logo,
  },
  {
    name: 'IWFA',
    logo: images.iwfa_logo,
    srcSet: `${iwfaLogo400} 400w, ${iwfaLogo800} 800w`,
    sizes: '(max-width: 768px) 120px, 175px',
  },
  {
    name: 'Skin Cancer Foundation',
    logo: images.skinCancer_logo,
    srcSet: `${cancerLogo400} 400w, ${cancerLogo800} 800w`,
    sizes: '(max-width: 768px) 120px, 175px',
  },
  {
    name: 'Carstars',
    logo: images.carstars_logo,
    srcSet: `${carstarsLogo400} 400w, ${carstarsLogo800} 800w`,
    sizes: '(max-width: 768px) 120px, 175px',
  },
  {
    name: 'Ceramic Pro',
    logo: images.ceramicPro_logo,
  },
  {
    name: 'Feynlab',
    logo: images.feynlab_logo,
  },
  {
    name: 'Menzerna',
    logo: images.menzerna_logo,
    srcSet: `${menzernaLogo400} 400w, ${menzernaLogo800} 800w`,
    sizes: '(max-width: 768px) 120px, 175px',
  },
  {
    name: 'Rupes',
    logo: images.rupes_logo,
  },
  {
    name: 'Uniglass',
    logo: images.uniglass_logo,
  },
];

// Create extended array for seamless infinite scroll (duplicate the array)
const extendedPartners = [...partners, ...partners, ...partners];

function PartnersCompact() {
  return (
    <div className="partners-compact">
      <div className="partners-compact__container">
        <div className="partners-compact__logos-container">
          <div className="partners-compact__logos-track">
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="partners-compact__logo-item"
              >
                <div className="partners-compact__logo-wrapper">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      srcSet={partner.srcSet}
                      sizes={partner.sizes}
                      alt={`${partner.name} logo`}
                      className="partners-compact__logo-image"
                      width="120"
                      height="60"
                      loading="lazy"
                    />
                  ) : (
                    <div className="partners-compact__logo-placeholder">
                      {partner.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="partners-compact__title">
          <h2 className="partners-compact__title-text">TRUSTED BRANDS</h2>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PartnersCompact);

