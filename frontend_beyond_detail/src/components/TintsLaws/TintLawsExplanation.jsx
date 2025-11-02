import React from 'react';
import './TintLaws.scss';

function TintLawsExplanation() {
  return (
    <div className='tintsLaws__wrapper'>
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
    </div>
  );
}

export default React.memo(TintLawsExplanation);




