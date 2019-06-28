import React, { Component } from 'react';
import TextMessage from '../messages_components/text/TextMessage';
import CarouselMessage from '../messages_components/carousel/CarouselMessage';
import QuickRepliesMessage from '../messages_components/quickReplies/QuickRepliesMessage';

class MessageList extends Component {
    state = {
        messages: this.props.messages
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.messages.map(message => {
                    if (message.type === 'carousel') {
                        return <CarouselMessage key={message.id} message={message} />
                    } else if (message.type === 'quickReplies') {
                        return <QuickRepliesMessage key={message.id} message={message} />
                    } else if (message.type === 'text') {
                        return <TextMessage key={message.id} message={message} />
                    }
                })}
            </ul>
        );
    }
}

export default MessageList;