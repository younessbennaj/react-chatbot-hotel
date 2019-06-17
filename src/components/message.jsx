import React from 'react';

const Message = (props) => {
    const liStyle = {
        listStyleType: 'none'
    };

    const cardStyle = {
        borderRadius: '18px 18px 18px 0px'
    }

    return (
        <li style={liStyle}>
            <div className="row">
                <div className="d-flex align-items-center mr-2">
                    <img src="https://i.pravatar.cc/50" alt="avatar" className=" rounded-circle pull-left" />
                </div>
                <div className="card" style={cardStyle}>
                    <div className="card-body">{props.message.text}</div>
                </div>
            </div>
        </li>
    );
}

export default Message;