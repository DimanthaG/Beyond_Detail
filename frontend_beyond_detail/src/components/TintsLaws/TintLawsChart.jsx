import React from 'react';
import './TintLaws.scss';

function TintLawsChart() {
  return (
    <div className='tintsLaws__wrapper'>
      <h1 className='tintsLaws__title'>Window Tint Laws in Canada</h1>
      <hr className='tintsLaws__divider' />
      <p>
        Below is a full breakdown of car window tint laws and legal tint
        percentages by province. Using this chart you can figure out which shade
        of tint is the right choice for you.
      </p>
      <div className='tintsLaws__table-container'>
        <table className='tintsLaws__table-container__table'>
          <thead>
            <tr>
              <th>Province</th>
              <th>Windshield</th>
              <th>Front Side Windows</th>
              <th>Back Side Windows</th>
              <th>Rear Window</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label='Province'>Alberta</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>No</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>British Columbia</td>
              <td data-label='Windshield'>7.5cm Strip</td>
              <td data-label='Front Side Windows'>No</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>Manitoba</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>45% Light Transmission</td>
              <td data-label='Back Side Windows'>30% Light Transmission</td>
              <td data-label='Rear Window'>35% Light Transmission</td>
            </tr>
            <tr>
              <td data-label='Province'>New Brunswick</td>
              <td data-label='Windshield'>No</td>
              <td data-label='Front Side Windows'>No</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>Newfoundland</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>Vague</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>Nova Scotia</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>No</td>
              <td data-label='Back Side Windows'>No</td>
              <td data-label='Rear Window'>No</td>
            </tr>
            <tr>
              <td data-label='Province'>Ontario</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>70% Light Transmission</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>Quebec</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>70% Light Transmission</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>PEI</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>No</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>Saskatchewan</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>No</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default React.memo(TintLawsChart);




























