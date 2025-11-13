import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import MapStyles from './MapStyles';
import images from '../../constants/images';
import './Map.scss';

const AnyReactComponent = ({ text }) => (
  <div>
    <img
      src={images.mapPin}
      loading='lazy'
      style={{
        height: '50px',
        filter:
          'invert(50%) sepia(49%) saturate(3039%) hue-rotate(5deg) brightness(98%) contrast(101%)',
      }}
      alt='pin'
    />
  </div>
);

function Map() {
  const [mapError, setMapError] = useState(null);
  const defaultProps = {
    center: {
      lat: 43.8195560984298,
      lng: -79.23415881114387,
    },
    zoom: 14,
  };

  const apiKey = process.env.REACT_APP_MAPS_KEY || process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

  // Handle map loading errors
  const handleMapError = (error) => {
    console.error('Google Maps error:', error);
    setMapError('Unable to load map. Please check your API key configuration.');
  };

  // If no API key, show a message instead of the map
  if (!apiKey) {
    return (
      <div className='map__wrapper' style={{ height: '600px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a' }}>
        <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
          <p>Map unavailable - API key not configured</p>
          <p style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.5rem' }}>
            Add REACT_APP_MAPS_KEY to your .env file
          </p>
        </div>
      </div>
    );
  }

  return (
    // Important! Always set the container height explicitly
    <div className='map__wrapper' style={{ height: '600px', width: '100%' }}>
      {mapError ? (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem', textAlign: 'center' }}>
          <div>
            <p>{mapError}</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.5rem' }}>
              Please ensure Maps JavaScript API is enabled in Google Cloud Console
            </p>
          </div>
        </div>
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={{ styles: MapStyles.Dark }}
          onError={handleMapError}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={43.8195560984298}
            lng={-79.23415881114387}
            //   text='My Marker'
          />
        </GoogleMapReact>
      )}
    </div>
  );
}

export default React.memo(Map);
