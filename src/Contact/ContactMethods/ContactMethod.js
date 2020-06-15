import React from 'react';

class ContactMethod extends React.Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div>
                <a href={this.props.url}>{this.props.contactname}</a>
                  
            </div>
        );
    }
}

export default ContactMethod;