import React, { Component } from 'react';
import uuid from "uuid";
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 0;
    height: 44px;
    font-size: 16px;
`;

class SendMessageForm extends Component {
    state = {
        userMessage: this.props.userMessage
    }

    handleChange = e => {
        const userMessage = { ...this.state.userMessage };
        userMessage.text = e.currentTarget.value;
        this.setState({ userMessage });
    }

    onSubmit = e => {
        e.preventDefault();
        const userMessage = { ...this.state.userMessage };
        this.props.onSubmit(userMessage);
        userMessage.text = '';
        userMessage.id = uuid.v4();
        this.setState({ userMessage });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                    <Input value={this.state.userMessage.text} onChange={this.handleChange} type="text" className="form-control" placeholder="Type here..."></Input>
                </div>
            </form>
        );
    }
}

export default SendMessageForm;