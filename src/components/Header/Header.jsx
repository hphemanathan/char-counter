import React from 'react';
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.wrapper}>
      <img src='src/assets/logo-light-theme.svg' alt='company logo' />
      <img src='src/assets/icon-moon.svg' alt='Dark theme toggle' />
    </div>
  );
}

export default Header;
