import React from 'react';

function LetterDensityResult({chars}) {
  
  
  const letterDensityWOspace = chars.toLocaleUpperCase().replace(
    /[^0-9A-Z]+/gi,
    ""
  );

  // console.log(letterDensityWOspace)

  const arrayOfchars = letterDensityWOspace.split('')
  // console.log(arrayOfchars)
  
  const letterDensity = arrayOfchars.reduce(function(obj, letter) {
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
