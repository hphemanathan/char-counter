import React from 'react';
import LetterDensityResult from '../LetterDensityResult/LetterDensityResult';
import styles from "./LetterDensity.module.css";


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
            <>
              <p>See less</p> <ion-icon name='chevron-up-outline'></ion-icon>
            </>
          ) : (
            <>
            <p>
              See more {" "}
            </p>
            <ion-icon name='chevron-down-outline'></ion-icon>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default LetterDensity;
