import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.js';
import ProjectArea from './Projects/ProjectArea';
import Contact from './Contact/Contact.js';
import styles from './mystyles.module.css';

const myPage = (
  <div id={styles.main}>
      <Header />
      <ProjectArea />
      <Contact />
  </div>
);

ReactDOM.render(myPage, document.getElementById('root'));




/* 

  import { MdBuild } from 'react-icons/md';
  import styles from './mainStyle.module.css'

*/