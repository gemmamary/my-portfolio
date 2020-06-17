import React from 'react';
import NavLinks from './NavLinks.js';
import styles from './../mystyles.module.css';


class NavBar extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.navBar}>
                <NavLinks id="main" linkname="Home"/>
                <NavLinks id="projects" linkname="Projects"/>
            </div>     
        );
    }
}

export default NavBar;