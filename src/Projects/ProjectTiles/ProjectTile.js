import React from 'react';

class ProjectTile extends React.Component {
    
    render () {
        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.technologies}</p>
                    <a href={this.props.url}>Go To Code</a>
                </div>
                <div>
                    <p>{this.props.description}</p>
                </div>

            </div>
        )
    }
}

export default ProjectTile;

