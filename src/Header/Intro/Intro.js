import React from 'react';
import styles from './../headerstyles.module.css';
import Avatar from './myavatar.png';

class Intro extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.splitPage}>
                <div className={styles.center}>
                    <img src={Avatar} alt="Profile Avatar" className={styles.avatar}/>
                </div>
                <div className={styles.intro}> 
                    <p>Gemma Mcgee</p>
                    <p>Software Test Engineer</p>
                    <p>Half Norwegian, Half Irish. Born in England, Raised in Norway.
                    I'm thinking of getting a T-Shirt.</p>
                </div>            
            </div>
        );
    }
}

export default Intro;