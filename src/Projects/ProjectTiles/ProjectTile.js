import React from 'react';
import styles from './../projectstyles.module.css';

class ProjectTile extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.projects}>
                <div>
                    <h1>Project Title</h1>
                    <p>Brief Project Description</p>
                    <a href="#">Go To Code</a>
                </div>
                <div>
                    <p>Longer Project Description</p>
                </div>

            </div>
        )
    }
}

export default ProjectTile;