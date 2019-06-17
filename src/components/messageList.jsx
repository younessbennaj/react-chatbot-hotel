import React, { Component } from 'react';
import Message from './message';

class MessageList extends Component {
    state = {
        messages: this.props.messages
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.messages.map(message => {
                    return <Message key={message.id} message={message} />
                })}
            </ul>
        );
    }
}

export default MessageList;