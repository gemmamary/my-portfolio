import React from 'react';
import styles from './../mystyles.module.css';
import Intro from './Intro/Intro.js';
import ContactMethods from './Contact/ContactMethod.js';

class Header extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.header}>
                
                <Intro />
                <ContactMethods />
                
            </div>
        );
    }
}

export default Header;