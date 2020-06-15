import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.js';
import ProjectArea from './Projects/ProjectArea';
import Contact from './Contact/Contact.js';

const myPage = (
  <div>
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