import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className='loading__wrapper'>
      <div id='load'>
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
}

export default React.memo(Loading);
