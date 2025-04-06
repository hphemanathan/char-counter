import React from 'react';
import styles from './TextInput.module.css'

function TextInput({setCharsWSpace, wordCount, setWordCount, charCount, setCharCount, chars, setChars, setSentenceCount }) {
  const id = React.useId();
  return (
    <div>
      <form action=''>
        <textarea
          className={styles.wrapper}
          name='character counter'
          id={id}
          value={chars}
          onChange={(event) => {
            const newChars = event.target.value;
                
               setChars(newChars)
               setCharsWSpace(newChars)

               
            const newWordCount = newChars
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0);
             setWordCount(newWordCount.length) 
            setCharCount(newChars.length);

            const newSentenceCount = newChars.split(/[.]/g).filter(Boolean).length;
            console.log(newSentenceCount)
          }}

     
        />
      </form>
    </div>
  );
}

export default TextInput;
