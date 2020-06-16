import React from 'react';
import styles from './../mystyles.module.css';
import ContactMethod from './ContactMethods/ContactMethod.js';
import Footer from './Footer/Footer.js';

class Contact extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div id ="contact" className={styles.pageTile + " " + styles.border}>
                <h1>If you'd like to get in touch, click on one of the below links!</h1>
                <ContactMethod url="https://ie.linkedin.com/in/gemma-mcgee-620634102" contactname="LinkedIn"/>   
                <Footer />
            </div>
        );
    }
}

export default Contact;