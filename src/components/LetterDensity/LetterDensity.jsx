import React from 'react';
import LetterDensityResult from '../LetterDensityResult/LetterDensityResult';


function LetterDensity({chars, charCount}) {
  const [active, isActive] = React.useState(false);


  return (
    <div>
      <h3>Letter Density</h3>
      <LetterDensityResult
        active={active}
        isActive={isActive}
        charCount={charCount}
        chars={chars}
      />

      {chars === "" ? (
        <p>No characters found. Start typing to see letter density.</p>
      ) : (
        <button onClick={() => isActive(!active)}>
          {active ? (
            <p>
              See less{" "}
              <span>
                <img src='src/assets/chevron-up-outline.svg' alt='arrow up' />
              </span>
            </p>
          ) : (
            <p>
              See more{" "}
              <span>
                <img
                  src='src/assets/chevron-down-outline.svg'
                  alt='arrow down'
                />
              </span>
            </p>
          )}
        </button>
      )}
    </div>
  );
}

export default LetterDensity;
