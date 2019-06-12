import React, { Component } from 'react';

class SendMessageForm extends Component {
    state = {}
    render() {
        return (
            <form action="">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Type here..."></input>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Send</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SendMessageForm;