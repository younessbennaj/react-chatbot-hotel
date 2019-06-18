import React, { Component } from 'react';

class SendMessageForm extends Component {
    state = {
        message: {
            name: 'User',
            text: '',
            id: Math.random()
        }
    }

    handleChange = e => {
        const message = { ...this.state.message };
        message.text = e.currentTarget.value;
        this.setState({ message });
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.onSubmit(e, this.state.message)}>
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