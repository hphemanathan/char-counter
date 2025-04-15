import React from 'react';
import LetterDensityResult from '../LetterDensityResult/LetterDensityResult';


function LetterDensity({chars, charCount}) {
  return (
    <div>
      <h3>Letter Density</h3>
      <LetterDensityResult charCount={charCount} chars={chars} />
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
