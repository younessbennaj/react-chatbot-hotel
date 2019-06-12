import React, { Component } from 'react';

class MessageList extends Component {
    state = {}
    render() {
        return (
            <ul className="list-group">
                {this.props.messages.map(message => {
                    return <li className="list-group-item">{message.text}</li>
                })}
            </ul>
        );
    }
}

export default MessageList;