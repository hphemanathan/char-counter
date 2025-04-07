import React from 'react';
import styles from './TextInput.module.css'

function TextInput({setCharsWSpace, setWordCount, charCount, setCharCount, chars, setChars, setSentenceCount, charLimit,  charLimitCheck }) {
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

            setChars(newChars);
            setCharsWSpace(newChars);

            const newWordCount = newChars
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0);
            setWordCount(newWordCount.length);
            setCharCount(newChars.length);

            const newSentenceCount =
              newChars.match(/[\w|\)][.?!](\s|$)/g).length;
            setSentenceCount(newSentenceCount);
          }}
        />
        {charLimitCheck && charCount > charLimit && charCount > 0 ? (
          <p>Limit reached! Your text exceeds {charLimit} characters.</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default TextInput;
