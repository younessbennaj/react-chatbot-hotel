import React, { Component } from 'react';

class quickRepliesMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
        }
    }
    render() {
        return (

            <div>
                {this.state.message.content.map((button) => {
                    console.log(button);
                    return (
                        <button key={button.title} className="btn btn-primary">{button.title}</button>
                    )
                })}
            </div>
        );
    }
}

export default quickRepliesMessage;