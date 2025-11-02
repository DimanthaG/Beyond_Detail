import React from 'react';
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
  const defaultProps = {
    center: {
      lat: 43.8195560984298,
      lng: -79.23415881114387,
    },
    zoom: 14,
  };

  return (
    // Important! Always set the container height explicitly
    <div className='map__wrapper' style={{ height: '600px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY || process.env.REACT_APP_GOOGLE_PLACES_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ styles: MapStyles.Dark }}
      >
        <AnyReactComponent
          lat={43.8195560984298}
          lng={-79.23415881114387}
          //   text='My Marker'
        />
      </GoogleMapReact>
    </div>
  );
}

export default React.memo(Map);
