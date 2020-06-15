import React from 'react';
import styles from './../mystyles.module.css';
import ProjectTile from './ProjectTiles/ProjectTile.js'

class ProjectArea extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div id="projects" className={styles.pageTile + " " + styles.border}>
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
            </div>
        )
    }
}

export default ProjectArea;