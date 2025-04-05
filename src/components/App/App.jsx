import { useState } from 'react'
import Header from '../Header/Header'
import styles from "./App.module.css";
import Heading from '../Heading/Heading';
import TextInput from '../TextInput/TextInput';

function App() {
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header />
          <Heading/>
          <TextInput/>
        </div>
      </div>
    </>
  );
}

export default App
