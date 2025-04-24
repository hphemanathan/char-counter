import React from 'react';
import styles from "./ExcludeCheckBox.module.css"

function ExcludeCheckBox({exclude, setExclude}) {
  
  const id  = React.useId()
  return (
    <div className={styles.wrapper}>
      <form className={styles.form_wrapper} onSubmit={(event) => event.preventDefault()}>
        <input className={styles.checkBox} 
          type='checkbox'
          id={id}
          checked={exclude}
          onChange={(event) => {
            setExclude(event.target.checked);
          }}
        />
        <label htmlFor={id}>Exclude Spaces</label>
      </form>
    </div>
  );
}

export default ExcludeCheckBox;
