import React from 'react';
import ExcludeCheckBox from '../ExcludeCheckBox/ExcludeCheckBox';
import SetCharLimit from '../SetCharLimit/SetCharLimit';
import ReadingTime from '../ReadingTime/ReadingTime';
import styles from "./FilterOptions.module.css"

function FilterOptions({wordCount, ...delegated}) {
  return <div className={styles.wrapper}>
    <ExcludeCheckBox {...delegated}/>
    <SetCharLimit {...delegated}/>
    <ReadingTime wordCount = {wordCount}/>
  </div>;
}

export default FilterOptions;
