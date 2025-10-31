import React from 'react';
import './TintLaws.scss';

function TintLaws() {
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
              <td data-label='Front Side Windows'>45%</td>
              <td data-label='Back Side Windows'>30%</td>
              <td data-label='Rear Window'>35%</td>
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
              <td data-label='Front Side Windows'>Vague</td>
              <td data-label='Back Side Windows'>Any Shade</td>
              <td data-label='Rear Window'>Any Shade</td>
            </tr>
            <tr>
              <td data-label='Province'>Quebec</td>
              <td data-label='Windshield'>15cm Strip</td>
              <td data-label='Front Side Windows'>70%</td>
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
      
      <div className="tintsLaws__sources">
        <h2 className="tintsLaws__sources-title">Sources & References</h2>
        <p className="tintsLaws__sources-disclaimer">
          The information provided in this table is based on Canadian provincial vehicle regulations. 
          Laws may change over time, and interpretations can vary. Always verify current regulations 
          with your provincial transportation authority before applying window tint.
        </p>
        <div className="tintsLaws__sources-list">
          <div className="source-item">
            <strong>Alberta Transportation</strong>
            <span>Alberta Vehicle Equipment Regulation</span>
          </div>
          <div className="source-item">
            <strong>BC Ministry of Transportation</strong>
            <span>Motor Vehicle Act Regulations</span>
          </div>
          <div className="source-item">
            <strong>Manitoba Public Insurance</strong>
            <span>Highway Traffic Act Regulations</span>
          </div>
          <div className="source-item">
            <strong>New Brunswick Department of Transportation</strong>
            <span>Motor Vehicle Act</span>
          </div>
          <div className="source-item">
            <strong>Newfoundland and Labrador Motor Registration</strong>
            <span>Highway Traffic Act</span>
          </div>
          <div className="source-item">
            <strong>Nova Scotia Department of Transportation</strong>
            <span>Motor Vehicle Act</span>
          </div>
          <div className="source-item">
            <strong>Ontario Ministry of Transportation</strong>
            <span>Highway Traffic Act Regulations</span>
          </div>
          <div className="source-item">
            <strong>Quebec Ministère des Transports</strong>
            <span>Highway Safety Code</span>
          </div>
          <div className="source-item">
            <strong>PEI Department of Transportation</strong>
            <span>Highway Traffic Act</span>
          </div>
          <div className="source-item">
            <strong>Saskatchewan Government Insurance</strong>
            <span>The Traffic Safety Act</span>
          </div>
        </div>
        <p className="tintsLaws__sources-note">
          For the most up-to-date information, please consult your provincial transportation authority 
          or visit their official website. This information is provided for reference purposes only 
          and should not be considered legal advice.
        </p>
      </div>
    </div>
  );
}

export default React.memo(TintLaws);
