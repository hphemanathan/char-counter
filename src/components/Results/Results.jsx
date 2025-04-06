import React from 'react';
import Result from '../Result/Result';

function Results({charCount, wordCount, exclude}) {

  
  return (
    <div>
      <Result type='totalChar'>
        <h2>{charCount}</h2>
        <p>{exclude ? 'Total Characters (no space)' : "Total Characters" }</p>
      </Result>
      <Result type='wordCount'>
        <h2>{wordCount}</h2>
        <p>Word Count</p>
      </Result>
      <Result type='sentenceCount'>
        <h2>04</h2>
        <p>Sentece Count</p>
      </Result>
    </div>
  );
}

export default Results;
