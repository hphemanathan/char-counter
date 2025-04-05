import { useState } from 'react'
import styles from "./App.module.css";
import Header from '../Header/Header'
import Heading from '../Heading/Heading';
import TextInput from '../TextInput/TextInput';
import FilterOptions from '../FilterOptions/FilterOptions';

function App() {
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header />
          <Heading/>
          <TextInput/>
          <FilterOptions/>
        </div>
      </div>
    </>
  );
}

export default App
