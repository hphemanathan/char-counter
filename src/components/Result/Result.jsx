import React from 'react';
import styles from "./Result.module.css";

function Result({type, children}) {
  const classname = ` ${styles.wrapper} ${styles[type]}`
  return <div className= {classname}>
    {children}
  </div>;
}

export default Result;
