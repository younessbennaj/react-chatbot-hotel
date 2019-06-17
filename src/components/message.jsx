import React from 'react';

const Message = (props) => {
    return (
        <li className="list-group-item">{props.message.name}: {props.message.text}</li>
    );
}

export default Message;