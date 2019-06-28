import React, { Component } from 'react';
import QuickRepliesMessageContainer from './QuickRepliesMessageContainer';
import QuickReplies from './QuickReplies';
import QuickReply from './QuickReply';
import QuickRepliesElement from './QuickRepliesElement';

class quickRepliesMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
            submitQuickReplies: this.props.onQuickRepliesSubmit
        }
    }

    handleQuickReplies(value) {
        this.state.submitQuickReplies(value)
    }

    render() {
        return (

            <QuickRepliesMessageContainer>
                <QuickReplies>
                    {this.state.message.content.map((button) => {
                        return (
                            <QuickReply key={button.title}>
                                <QuickRepliesElement onClick={() => this.handleQuickReplies(button.value)}>
                                    {button.title}
                                </QuickRepliesElement>
                            </QuickReply>
                        )
                    })}
                </QuickReplies>
            </QuickRepliesMessageContainer>
        );
    }
}

export default quickRepliesMessage;