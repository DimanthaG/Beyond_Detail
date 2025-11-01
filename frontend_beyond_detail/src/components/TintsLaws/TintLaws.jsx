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

      <div className="tintsLaws__explanation">
        <h2 className="tintsLaws__explanation-title">Understanding Light Transmission vs. Tint Percentages</h2>
        <div className="tintsLaws__explanation-content">
          <p className="tintsLaws__explanation-text">
            It's important to understand the difference between <strong>light transmission</strong> and <strong>tint percentages</strong>, as they represent opposite measurements:
          </p>
          <div className="tintsLaws__explanation-items">
            <div className="tintsLaws__explanation-item">
              <h3 className="tintsLaws__explanation-item-title">Light Transmission Percentage</h3>
              <p>
                <strong>Light Transmission</strong> measures how much light <em>passes through</em> the window. 
                A higher percentage means more light comes through (lighter tint). For example:
              </p>
              <ul>
                <li><strong>70% Light Transmission</strong> = 70% of light passes through (30% is blocked)</li>
                <li><strong>45% Light Transmission</strong> = 45% of light passes through (55% is blocked)</li>
                <li><strong>30% Light Transmission</strong> = 30% of light passes through (70% is blocked)</li>
              </ul>
            </div>
            <div className="tintsLaws__explanation-item">
              <h3 className="tintsLaws__explanation-item-title">Tint Percentage</h3>
              <p>
                <strong>Tint Percentage</strong> measures how much light is <em>blocked</em> by the tint film. 
                A higher percentage means darker tint (less light passes through). For example:
              </p>
              <ul>
                <li><strong>5% Tint</strong> = Very dark, blocks 95% of light (allows only 5% through)</li>
                <li><strong>30% Tint</strong> = Moderately dark, blocks 30% of light (allows 70% through)</li>
                <li><strong>50% Tint</strong> = Light tint, blocks 50% of light (allows 50% through)</li>
              </ul>
            </div>
          </div>
          <div className="tintsLaws__explanation-note">
            <p>
              <strong>Important:</strong> When provincial laws specify a light transmission percentage (like "70% Light Transmission"), 
              this means the tint film must allow at least that amount of light through. This corresponds to a maximum tint darkness. 
              For example, a 70% light transmission requirement means you can use up to a 30% tint (since 30% + 70% = 100%).
            </p>
          </div>
        </div>
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
            <strong>
              <a 
                href="https://www.transportation.alberta.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Alberta Transportation
              </a>
            </strong>
            <span>Alberta Vehicle Equipment Regulation</span>
            <p className="source-description">
              Alberta allows a 15cm strip on the windshield and prohibits tint on front side windows. 
              Rear windows can be tinted to any shade. These regulations are enforced to ensure driver 
              visibility and safety.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www2.gov.bc.ca/gov/content/transportation/driving-and-cycling" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                BC Ministry of Transportation
              </a>
            </strong>
            <span>Motor Vehicle Act Regulations</span>
            <p className="source-description">
              British Columbia permits only a 7.5cm strip on the windshield and prohibits tint on 
              front side windows. Rear windows can be tinted to any shade, making it one of the 
              more restrictive provinces for front window tint.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www.mpi.mb.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Manitoba Public Insurance
              </a>
            </strong>
            <span>Highway Traffic Act Regulations</span>
            <p className="source-description">
              Manitoba has specific percentage requirements: 45% for front side windows, 30% for back 
              side windows, and 35% for the rear window. A 15cm strip is allowed on the windshield. 
              These are among the most specific tint regulations in Canada.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www2.gnb.ca/content/gnb/en/departments/transportation.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                New Brunswick Department of Transportation
              </a>
            </strong>
            <span>Motor Vehicle Act</span>
            <p className="source-description">
              New Brunswick completely prohibits tint on windshields and front side windows. 
              However, rear side windows and the rear window can be tinted to any shade, providing 
              privacy options for the back of the vehicle.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www.gov.nl.ca/motorregistration/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Newfoundland and Labrador Motor Registration
              </a>
            </strong>
            <span>Highway Traffic Act</span>
            <p className="source-description">
              Newfoundland allows a 15cm strip on the windshield. Front side window regulations are vague, 
              but rear windows can be tinted to any shade. It's recommended to consult with local 
              authorities for specific front window tint guidelines.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://novascotia.ca/tran/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Nova Scotia Department of Transportation
              </a>
            </strong>
            <span>Motor Vehicle Act</span>
            <p className="source-description">
              Nova Scotia has strict regulations, allowing only a 15cm strip on the windshield and 
              prohibiting tint on all other windows (front side, back side, and rear). This makes it 
              one of the most restrictive provinces for window tint.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www.ontario.ca/page/ministry-transportation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Ontario Ministry of Transportation
              </a>
            </strong>
            <span>Highway Traffic Act Regulations</span>
            <p className="source-description">
              Ontario allows a 15cm strip on the windshield. Front side windows must allow at least 
              70% of light transmission (maximum 30% tint). Rear windows can be tinted to any shade, 
              providing flexibility for privacy and protection.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www.transports.gouv.qc.ca/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Quebec Ministère des Transports
              </a>
            </strong>
            <span>Highway Safety Code</span>
            <p className="source-description">
              Quebec permits a 15cm strip on the windshield and allows up to 70% light transmission 
              (30% tint) on front side windows, which is more permissive than many other provinces. 
              Rear windows can be tinted to any shade.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www.princeedwardisland.ca/en/topic/transportation-and-infrastructure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                PEI Department of Transportation
              </a>
            </strong>
            <span>Highway Traffic Act</span>
            <p className="source-description">
              Prince Edward Island allows a 15cm strip on the windshield but prohibits tint on 
              front side windows. Rear side windows and the rear window can be tinted to any shade, 
              providing privacy options for vehicle occupants.
            </p>
          </div>
          <div className="source-item">
            <strong>
              <a 
                href="https://www.sgi.sk.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Saskatchewan Government Insurance
              </a>
            </strong>
            <span>The Traffic Safety Act</span>
            <p className="source-description">
              Saskatchewan allows a 15cm strip on the windshield and prohibits tint on front side 
              windows. Rear side windows and the rear window can be tinted to any shade, following 
              similar patterns to most western provinces.
            </p>
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
