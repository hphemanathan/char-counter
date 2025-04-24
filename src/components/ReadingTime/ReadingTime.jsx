import React from 'react';
import styles from "./ReadingTime.module.css"

function ReadingTime({wordCount}) {

  const minute = Number((wordCount/238).toFixed(0)) + 1
  return (
    <div>
      <p className={styles.p}>Approx. reading time: &lt; {minute} minute</p>
    </div>
  );
}

export default ReadingTime;
