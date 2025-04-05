import React from 'react';
import styles from './TextInput.module.css'

function TextInput() {
  const [chars, setChars] = React.useState('')
  const id = React.useId();
  return <div>
    <form action="">
      <textarea className={styles.wrapper} name="character counter" id={id} value={chars} onChange={(event) => setChars(event.target.value) }/>
    </form>
  </div>;
}

export default TextInput;
