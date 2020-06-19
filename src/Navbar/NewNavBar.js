import React from 'react';
import NavLinks from './NavLinks.js';
import styles from './../mystyles.module.css';

class NavBar extends React.Component {
    
    render () {
        return (
            <div className={styles.navBar}>
                <NavLinks destination="#main" linkname="Home"/>
                <NavLinks destination="#projects" linkname="Projects"/>
            </div>      
        );
    }
}

export default NavBar;