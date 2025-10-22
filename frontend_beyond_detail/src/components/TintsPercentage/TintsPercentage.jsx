import React from 'react';
import './TintsPercentage.scss';

function TintsPercentage() {
  return (
    <div className='tintsPercentage__wrapper'>
      <div className='tintsPercentage__table-container'>
        <table className='tintsPercentage__table-container__table'>
          <thead>
            <tr>
              <th>Shade</th>
              <th>Light Allowed In</th>
              <th>Infrared Rejection</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label='Shade'>5%</td>
              <td data-label='Light Allowed In'>6%</td>
              <td data-label='Infrared Rejection'>95%</td>
            </tr>
            <tr>
              <td data-label='Shade'>15%</td>
              <td data-label='Light Allowed In'>20%</td>
              <td data-label='Infrared Rejection'> 95%</td>
            </tr>
            <tr>
              <td data-label='Shade'>35%</td>
              <td data-label='Light Allowed In'>34%</td>
              <td data-label='Infrared Rejection'>95%</td>
            </tr>
            <tr>
              <td data-label='Shade'>50%</td>
              <td data-label='Light Allowed In'>55%</td>
              <td data-label='Infrared Rejection'>95%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default React.memo(TintsPercentage);
