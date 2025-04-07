import React from 'react';

import styles from "./App.module.css";
import Header from '../Header/Header'
import Heading from '../Heading/Heading';
import TextInput from '../TextInput/TextInput';
import FilterOptions from '../FilterOptions/FilterOptions';
import Results from '../Results/Results';
import LetterDensity from '../LetterDensity/LetterDensity';

function App() {
    const [charCount, setCharCount] = React.useState('')
      const [chars, setChars] = React.useState('')
      const [charsWSpace, setCharsWSpace] = React.useState("")
      const [wordCount, setWordCount] = React.useState('')
      const [exclude, setExclude] = React.useState(false)
      const [sentenceCount, setSentenceCount] = React.useState("")
      const [charLimitCheck, setCharLimitCheck] = React.useState(false);
      const [charLimit, setCharLimit] = React.useState("");
      
  
    // React.useEffect (() =>{
    //   if (chars === 'test') {
    //     console.log("success")
    //     setWordCount('00')
    //     setSentenceCount('00')
    //   }
    //   console.log(charCount);

    //   if (exclude === true) {
    //     console.log ("working")
    //     const newCharcount = chars.replace(/\s/g, "");
    //     setCharCount(newCharcount.length)
    //   } else {
    //     setCharCount(charsWSpace.length)
    //   }
      


    // },[chars, exclude] )

    React.useEffect (() => {
      if (chars === "") {
        setCharCount("00");
        setWordCount("00");
        setSentenceCount("00");
      }
    },[chars])



    React.useEffect (() => {
 if (exclude === true && charsWSpace.length < 1) {
  setCharCount("00");
} else if (exclude === true) {
  const newCharcount = chars.replace(/\s/g, "");
  setCharCount(newCharcount.length);
} else if (exclude === false && charsWSpace.length < 1) {
  setCharCount("00");
} else {
  setCharCount(charsWSpace.length);
} 

}

 ,[exclude, chars, charsWSpace])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header />
          <Heading />
          <TextInput
            charsWSpace={charsWSpace}
            setCharsWSpace={setCharsWSpace}
            wordCount={wordCount}
            setWordCount={setWordCount}
            chars={chars}
            setChars={setChars}
            charCount={charCount}
            setCharCount={setCharCount}
            sentenceCount={sentenceCount}
            setSentenceCount={setSentenceCount}
            charLimit={charLimit}
            setCharLimit={setCharLimit}
            charLimitCheck={charLimitCheck}
            setCharLimitCheck={setCharLimitCheck}
          />
          <FilterOptions
            chars={chars}
            setChars={setChars}
            charCount={charCount}
            setCharCount={setCharCount}
            exclude={exclude}
            setExclude={setExclude}
            charLimit={charLimit}
            setCharLimit={setCharLimit}
            charLimitCheck={charLimitCheck}
            setCharLimitCheck={setCharLimitCheck}
          />
          <Results
            wordCount={wordCount}
            setWordCount={setWordCount}
            charCount={charCount}
            setCharCount={setCharCount}
            exclude={exclude}
            setExclude={setExclude}
            sentenceCount={sentenceCount}
            setSentenceCount={setSentenceCount}
            chars
          />
          <LetterDensity />
        </div>
      </div>
    </>
  );
}

export default App
