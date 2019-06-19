import React, { Component } from 'react';
import uuid from "uuid";

class SendMessageForm extends Component {
    state = {
        message: this.props.message
    }

    emptyForm() {
        console.log('test');
    }

    handleChange = e => {
        const message = { ...this.state.message };
        message.text = e.currentTarget.value;
        this.setState({ message });
    }

    onSubmit = e => {
        e.preventDefault();
        const message = { ...this.state.message };
        this.props.onSubmit(message);
        message.text = '';
        message.id = uuid.v4();
        this.setState({ message });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                    <input value={this.state.message.text} onChange={this.handleChange} ref={this.message} type="text" className="form-control" placeholder="Type here..."></input>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SendMessageForm;