import React from 'react';

class NavLinks extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <span>
                <a href={"#" + this.props.id}>{this.props.linkname}</a>
            </span>        
        )
    }
}

export default NavLinks;