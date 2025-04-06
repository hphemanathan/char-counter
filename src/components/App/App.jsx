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
  
    React.useEffect (() =>{
      if (chars === '') {
        setCharCount('00')
        setWordCount('00')
      }

      if (exclude === true) {
        console.log ("working")
        const newCharcount = chars.replace(/\s/g, "");
        setCharCount(newCharcount.length)
      } else {
        setCharCount(charsWSpace.length)
      }
      


    },[chars, exclude] )

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
            sentenceCount = {sentenceCount} setSentenceCount={setSentenceCount}
          />
          <FilterOptions exclude={exclude} setExclude={setExclude} />
          <Results
            wordCount={wordCount}
            setWordCount={setWordCount}
            charCount={charCount}
            setCharCount={setCharCount}
            exclude={exclude} setExclude = {setExclude}
          />
          <LetterDensity />
        </div>
      </div>
    </>
  );
}

export default App
