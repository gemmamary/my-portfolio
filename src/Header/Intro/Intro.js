import React from 'react';
import styles from './../headerstyles.module.css';
import NavBar from './../Navbar/NavBar.js';

class Intro extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.splitPage}>
                <div className={styles.intro}> 
                    <p className={styles.name}>Gemma Mary Mcgee</p>
                    <p className={styles.job}>Software Test Engineer</p>
                </div>            
                <NavBar />
            </div>
        );
    }
}

export default Intro;