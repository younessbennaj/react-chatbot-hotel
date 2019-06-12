import React, { Component } from 'react';

class SendMessageForm extends Component {
    message = React.createRef();
    state = {}
    render() {
        return (
            <form onSubmit={(e) => this.props.onSubmit(e, this.message.current.value)}>
                <div className="input-group mb-3">
                    <input ref={this.message} type="text" className="form-control" placeholder="Type here..."></input>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SendMessageForm;