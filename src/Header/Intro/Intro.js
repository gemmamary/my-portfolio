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
                <h1>SplitPage</h1>
                <p>
                    Software Test Engineer
                </p>                
                <NavBar />
            </div>
        );
    }
}

export default Intro;