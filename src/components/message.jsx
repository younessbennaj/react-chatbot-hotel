import React from 'react';

const Message = (props) => {
    const liStyle = {
        listStyleType: 'none'
    };

    const cardStyleLeft = {
        borderRadius: '18px 18px 18px 0px'
    }

    const cardStyleRight = {
        borderRadius: '18px 18px 0px 18px'
    }

    if (props.message.name === 'Bot') {
        return (
            <li style={liStyle}>
                <div className="row mb-3 d-flex flex-row">
                    <div className="d-flex align-items-center mr-2">
                        <img src="https://i.pravatar.cc/50" alt="avatar" className=" rounded-circle" />
                    </div>
                    <div className="card " style={cardStyleLeft}>
                        <div className="card-body">{props.message.text}</div>
                    </div>
                </div>
            </li>
        );
    } else {
        return (
            <li style={liStyle}>
                <div className="row mb-3 d-flex flex-row-reverse">
                    <div className="d-flex align-items-center ml-2">
                        <img src="https://i.pravatar.cc/50" alt="avatar" className=" rounded-circle" />
                    </div>
                    <div className="card " style={cardStyleRight}>
                        <div className="card-body">{props.message.text}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Message;