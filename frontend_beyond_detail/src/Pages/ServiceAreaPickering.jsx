import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

function ServiceAreaPickering() {
  return (
    <ServiceAreaTemplate
      city="Pickering"
      nearby="Durham Region"
      title="Auto Detailing, Window Tinting & Ceramic Coating in Pickering"
      description="Professional car detailing, window tinting, and ceramic coating for Pickering drivers. We restore interiors, remove salt and stains, correct paint, and install LLumar tint with lifetime warranty. Trusted GTA detailers located near you in Scarborough."
      services={[
        'LLumar window tinting with lifetime warranty',
        'Ceramic coating for long-term gloss and protection',
        'Paint correction and swirl removal',
        'Interior detailing, salt and stain removal',
        'Odor removal and ozone treatment',
        'Fleet and commercial tinting'
      ]}
    />
  );
}

export default ServiceAreaPickering;
