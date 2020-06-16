import React from 'react';
import styles from './../headerstyles.module.css';

class NavLinks extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <span className={styles.center}>
                <a href={"#" + this.props.id}>{this.props.linkname}</a>
            </span>        
        )
    }
}

export default NavLinks;