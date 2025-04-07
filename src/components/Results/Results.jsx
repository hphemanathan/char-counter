import React from 'react';
import Result from '../Result/Result';

function Results({chars, charCount, wordCount, exclude, sentenceCount}) {

  // React.useEffect (() => {
  //   if (chars === '1') {
  //     console.log (chars)
  //   }
  // },[chars])

  
  return (
    <div>
      <Result type='totalChar'>
        <h2>{charCount}</h2>
        <p>{exclude ? "Total Characters (no space)" : "Total Characters"}</p>
      </Result>
      <Result type='wordCount'>
        <h2>{wordCount}</h2>
        <p>Word Count</p>
      </Result>
      <Result type='sentenceCount'>
        <h2>{sentenceCount}</h2>
        <p>Sentence Count</p>
      </Result>
    </div>
  );
}

export default Results;
