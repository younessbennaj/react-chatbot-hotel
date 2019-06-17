import React, { Component } from 'react';

class MessageList extends Component {
    state = {
        messages: this.props.messages
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.messages.map(message => {
                    return <li key={message.id} className="list-group-item">{message.name}: {message.text}</li>
                })}
            </ul>
        );
    }
}

export default MessageList;