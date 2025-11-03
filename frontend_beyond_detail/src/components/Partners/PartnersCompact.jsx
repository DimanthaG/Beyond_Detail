import React from 'react';
import images from '../../constants/images';
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
  },
  {
    name: 'EASTMAN',
    logo: images.eastman_logo,
  },
  {
    name: 'IWFA',
    logo: images.iwfa_logo,
  },
  {
    name: 'Skin Cancer Foundation',
    logo: images.skinCancer_logo,
  },
  {
    name: 'Carstars',
    logo: images.carstars_logo,
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
                      alt={`${partner.name} logo`}
                      className="partners-compact__logo-image"
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
          <h3 className="partners-compact__title-text">TRUSTED BRANDS</h3>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PartnersCompact);

