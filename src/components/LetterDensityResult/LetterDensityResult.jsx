import React from 'react';

function LetterDensityResult({chars}) {
  
  
  const letterDensityWOspace = chars.toLocaleUpperCase().replace(
    /[^0-9A-Z]+/gi,
    ""
  );

  // console.log(letterDensityWOspace)

  // console.log(letterDensityWOspace)

  const arrayOfchars = letterDensityWOspace.split('')
  // console.log(arrayOfchars)
  // // console.log(arrayOfchars)
  
  const letterDensity = arrayOfchars.reduce(function(obj, letter) {
    if (!obj[letter]) {
      obj[letter] = 0;
    }
    obj[letter]++;
    return obj
  }, {})

  // console.log (letterDensity)

  const letterDensityArr = Array.from(letterDensity)

  // console.log (letterDensityArr)

  // const letterDensityArr = Object.keys(letterDensity).map((key) => {{key : letterDensity[key]}})
  // console.log(letterDensityArr)

  const letterDensitySorted = Object.fromEntries(Object.entries(letterDensity).sort(([, a], [, b]) => b-a))

  console.log(letterDensitySorted)



// console.log(obj);

  // console.log(letterDensity)
  // console.log(obj)
  
 const letterDensitySortedArr = Object.keys (letterDensitySorted).map((key) => [key, letterDensitySorted[key]])
 console.log(letterDensitySortedArr)

  return <div>
    {
      letterDensitySortedArr.map((ltr) => 
        <p>{ltr[0]}, {ltr[1]}</p>
      )
    }
  </div>;
}

export default LetterDensityResult;
