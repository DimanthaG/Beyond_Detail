import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

function ServiceAreaNorthYork() {
  return (
    <ServiceAreaTemplate
      city="North York"
      nearby="Toronto"
      title="Auto Detailing, Window Tint & Ceramic Coating in North York"
      description="Full-service auto detailing and tinting for North York. Protect your car with LLumar window tint, ceramic coating, and expert paint correction. Interior deep cleaning, salt removal, and odor elimination performed nearby at our Scarborough shop."
      services={[
        'Auto detailing packages for daily drivers',
        'Window tint with heat rejection and glare reduction',
        'Ceramic coating and paint protection',
        'Scratch and swirl removal',
        'Steam cleaning, salt and stain removal',
        'Wheel and brake dust cleaning'
      ]}
    />
  );
}

export default ServiceAreaNorthYork;
