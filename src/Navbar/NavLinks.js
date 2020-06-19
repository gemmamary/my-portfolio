import React from 'react';

class NavLinks extends React.Component {
    
    render () {
        return (
            <a href={this.props.destination}>{this.props.linkname}</a>        
        )
    }
}

export default NavLinks;