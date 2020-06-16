import React from 'react';
import styles from './../mystyles.module.css';
import Intro from './Intro/Intro.js';
import NavBar from './Navbar/NavBar.js';

class Header extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.pageTile + " " + styles.center}>
                <Intro />
                <NavBar />
            </div>
        );
    }
}

export default Header;