import React from 'react';
import styles from './../mystyles.module.css';
import ProjectTile from './ProjectTiles/ProjectTile.js'

class ProjectArea extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className={styles.projectArea}>

                <ProjectTile 
                    title="Patchwork Webtests" 
                    technologies="Using Python, Pytest and Selenium Webdriver" 
                    url="" 
                    description="I am currently working on this project, building a webtest solution for 'Patchwork'. 
                    Patchwork allows developers to contribute to projects by emailing in their code changes. 
                    I started this by installing Oracle VM, creating a virtual machine and installing ubuntu on to it.
                    I'm using BASH for most actions on this machine, including working with directories/files,
                    installing packages/dependencies, and for running the tests themselves.  
                    " />

                <ProjectTile 
                    title="Portfolio Site" 
                    technologies="Using REACT" 
                    url="" 
                    description="" />

                <ProjectTile 
                    title="Random Quote Generator" 
                    technologies="Using HTML, CSS, Javascript, JSON, AJAX"  
                    url="" 
                    description="" />

            </div>
        )
    }
}

export default ProjectArea;