import React from 'react';
import styles from './../headerstyles.module.css'

class AboutMe extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.splitPage}>
                <h1>About Me</h1>
                <p>
                    Half Norwegian, Half Irish. Born in England, Raised in Norway.
                    I'm thinking of getting a T-Shirt.
                    

                </p>                
            </div>
        );
    }
}

export default AboutMe;