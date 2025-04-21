import React from 'react';
import styles from "./Header.module.css"

function Header({switchTheme, theme}) {
  return (
    <div className={styles.wrapper}>
      {theme === "light" ? (
        <img
          src='src/assets/logo-light-theme.svg'
          alt='company logo light mode'
        />
      ) : (
        <img
          src='src/assets/logo-dark-theme.svg'
          alt='company logo dark mode'
        />
      )}

      <button
        className={(styles.button)}
        onClick={switchTheme}>
        {theme === "light" ? (
          <img src='src/assets/icon-moon.svg' alt='Dark theme toggle' />
        ) : (
          <img
            src='src/assets/icon-sun.svg'
        
            alt='light theme toggle'
          />
        )}
      </button>
    </div>
  );
}

export default Header;
