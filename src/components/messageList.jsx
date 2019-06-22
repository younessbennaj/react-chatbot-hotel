import React, { Component } from 'react';
import TextMessage from '../messages_components/text/TextMessage';

class MessageList extends Component {
    state = {
        messages: this.props.messages
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.messages.map(message => {
                    return <TextMessage key={message.id} message={message} />
                })}
            </ul>
        );
    }
}

export default MessageList;