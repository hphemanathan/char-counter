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

  // const letterDensityArr = Array.from(letterDensity)

  // const letterDensityArr = Object.keys(letterDensity).map((key) => {{key : letterDensity[key]}})
  // console.log(letterDensityArr)

  const letterDensitySorted = Object.fromEntries(Object.entries(letterDensity).sort(([, a], [, b]) => b-a))

  console.log(letterDensitySorted)

// console.log(obj);

  // console.log(letterDensity)
  // console.log(obj)
  
//   const letterDensitySorted = letterDensity.sort((a, b) => a>b ? 1 : -1);
// console.log(letterDensitySorted)

  // return <div><p>{
  //   letterDensitySorted.map((key) => {
  //     console.log(key)
  //   })}</p></div>;
}

export default LetterDensityResult;
