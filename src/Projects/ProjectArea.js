import React from 'react';
import styles from './../mystyles.module.css';
import ProjectTile from './ProjectTiles/ProjectTile.js'

class ProjectArea extends React.Component {
    
    render () {
        return (
            <div id="projects" className={styles.projectArea}>

                <ProjectTile
                    title="Calculator App"
                    technologies="Using C# to write the program and MSTest for unit testing"
                    url="https://github.com/gemmamary/CalculatorApp"
                    description="This is a simple console app written in C#. A user is prompted to enter a name, 
                    and a personalised greeting is displayed to them. The user then chooses the operation and enters
                    the first and second number, after which the sum is displayed to them. Unit tests for this are 
                    written using the MSTest framework. 
                    " />

                <ProjectTile 
                    title="Patchwork Webtests" 
                    technologies="Using Python, Pytest and Selenium Webdriver" 
                    url="https://github.com/gemmamary/patchwork-webtests" 
                    description="I am currently working on this project, building a webtest solution for 'Patchwork'. 
                    Patchwork allows developers to contribute to projects by emailing in their code changes. 
                    I started this by installing Oracle VM, creating a virtual machine and installing ubuntu on to it.
                    I'm using BASH for most actions on this machine, including working with directories/files,
                    installing packages/dependencies, and for running the tests themselves. As part of installing
                    patchwork, I was required to setup the database and create the patchwork user by running SQL 
                    queries in SQL server (this was also done in the terminal). I decided to write these tests for 
                    Chrome to start with, so I installed that and the matching version of chromedriver. So far I've 
                    written tests for the filter form.   
                    " />

                <ProjectTile 
                    title="Portfolio Site" 
                    technologies="Using REACT, written in JSX" 
                    url="https://github.com/gemmamary/my-portfolio" 
                    description="The very site you're looking at. REACT is a framework I have wanted to 
                    learn for a while. I started by installing NodeJS, and npm. I used 'create-react-app' to start.
                    " />

                <ProjectTile 
                    title="Random Quote Generator" 
                    technologies="Using HTML, CSS, Javascript, jQuery, JSON, AJAX"  
                    url="https://github.com/gemmamary/randomquotes" 
                    description="I completed this project as part of one of the freeCodeCamp certificates. 
                    It was a small project where I used HTML and CSS to style the UI, and wrote a script in 
                    jQuery to retrieve quotes from a JSON file on github and display them to the user.
                    " />

            </div>
        )
    }
}

export default ProjectArea;