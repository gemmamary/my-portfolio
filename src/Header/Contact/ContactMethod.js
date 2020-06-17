import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './../headerstyles.module.css';

class ContactMethods extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <IconContext.Provider value={{color: 'white'}}>
            <div className={styles.contact}>                    
                <a href="https://github.com/gemmamary" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://ie.linkedin.com/in/gemma-mcgee-620634102" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://www.freecodecamp.org/gemmamary" target="_blank">
                    <FaFreeCodeCamp />
                </a>
            </div>
            </IconContext.Provider>
        );
    }
}

export default ContactMethods;

