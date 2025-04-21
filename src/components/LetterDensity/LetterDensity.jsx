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
            <p className={styles.wrapper}>
              See less{" "}
              <span>
                <img src='src/assets/chevron-up-outline.svg' alt='arrow up' />
              </span>
            </p>
          ) : (
            <div className={styles.wrapper}>
              <p>See more </p>
              <img src='src/assets/chevron-down-outline.svg' alt='arrow down' />
          
            </div>
          )}
        </button>
      )}
    </div>
  );
}

export default LetterDensity;
