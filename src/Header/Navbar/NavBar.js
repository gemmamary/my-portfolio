import React from 'react';
import styles from './../headerstyles.module.css';
import NavLinks from './NavLinks.js';

class NavBar extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.navBar}>
                <NavLinks id="aboutme" linkname="About Me"/>
                <NavLinks id="projects" linkname="Projects"/>
                <NavLinks id="contact" linkname="Contact"/>
            </div>     
        );
    }
}

export default NavBar;