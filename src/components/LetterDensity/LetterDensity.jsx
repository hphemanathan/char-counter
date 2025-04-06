import React from 'react';
import LetterDensityResult from '../LetterDensityResult/LetterDensityResult';


function LetterDensity() {
  return (
    <div>
      <h3>Letter Density</h3>
      <LetterDensityResult />
      <p>
        See more{" "}
        <span>
          <img src='src/assets/chevron-down.svg' alt='arrow down' />
        </span>
      </p>
    </div>
  );
}

export default LetterDensity;
