import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar/NewNavBar.js';
import Header from './Header/Header.js';
import ProjectArea from './Projects/ProjectArea';
import styles from './mystyles.module.css';

const myPage = (
  <div id={styles.main}>
      <NavBar />
      <Header />
      <ProjectArea />
  </div>
);

ReactDOM.render(myPage, document.getElementById('root'));




