import React from 'react';
import styles from './../headerstyles.module.css';

class Intro extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div>
                <div className={styles.intro}> 
                    <h1>Gemma Mcgee 
                        <br /> Software Test Engineer 
                    </h1>
                    <p> Half Norwegian, Half Irish. Born in England, Raised in Norway. 
                        I'm thinking of getting a T-Shirt.
                    </p>
                </div>            
            </div>
        );
    }
}

export default Intro;