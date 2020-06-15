import React from 'react';
import styles from './../mystyles.module.css';
import AboutMe from './AboutMe/AboutMe.js';
import Intro from './Intro/Intro.js';

class Header extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.pageTile + " " + styles.border}>
                <Intro />
                <AboutMe />
            </div>
        );
    }
}

export default Header;