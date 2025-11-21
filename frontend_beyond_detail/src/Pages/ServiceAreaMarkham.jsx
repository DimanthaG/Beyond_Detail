import React from 'react';
import ServiceAreaTemplate from './ServiceAreaTemplate';

function ServiceAreaMarkham() {
  return (
    <ServiceAreaTemplate
      city="Markham"
      nearby="York Region"
      title="Car Detailing, Paint Correction & Tinting in Markham"
      description="Premium car detailing near Markham with interior shampoo, leather care, paint correction, and ceramic coating. Get LLumar tint for UV protection and privacy, plus high-gloss paint polishing just minutes away in Scarborough."
      services={[
        'Interior and exterior detailing packages',
        'Paint correction and gloss restoration',
        'Ceramic coating for UV and chemical resistance',
        'LLumar window tint (ATC, CTX, IRX)',
        'Headlight restoration and polishing',
        'Pet hair removal and interior sanitization'
      ]}
    />
  );
}

export default ServiceAreaMarkham;
