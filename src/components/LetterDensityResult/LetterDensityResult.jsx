import React from 'react';

function LetterDensityResult({chars}) {
  
  
  const letterDensity = [chars].reduce(function(obj, letter) {
    if (!obj[letter]) {
      obj[letter] = 0;
    }
    obj[letter]++;
    return obj
  }, {})
  console.log (letterDensity)
  return <div><p>{chars}</p></div>;
}

export default LetterDensityResult;
