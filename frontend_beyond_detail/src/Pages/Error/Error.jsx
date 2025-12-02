import React from 'react';
import { SEO } from '../../components';
import './Error.scss';

function Error() {
  return (
    <div className='error-container'>
      <SEO
        title="404 - Page Not Found | Beyond Detail"
        description="The page you are looking for could not be found. Return to Beyond Detail's homepage for professional auto detailing, window tinting, and ceramic coating services in Toronto & Scarborough."
        noindex={true}
      />
      <h1>ERROR 404 - Not Found</h1>
    </div>
  );
}

export default Error;
