import React from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';
import TextMessageContainer from './TextMessageContainer';

const Message = (props) => {

    const Avatar = styled.img`
        padding: 6px;
        height: 46px;
        width: 46px;
    `;

    //Voir assigner une classe avec condition si on peut faire plus simple
    if (props.message.name === 'Bot') {
        return (
            <TextMessageContainer>
                <div className="mb-3 d-flex flex-row">
                    <div className="d-flex align-items-end mr-2">
                        <Avatar className="rounded-circle shadow-sm ml-2" src="https://api.adorable.io/avatars/46/abott@adorable.png" />
                    </div>
                    <Bubble user={props.message.name} className="shadow-sm p-3">
                        {props.message.text}
                    </Bubble>
                </div>
            </TextMessageContainer>
        );
    } else {
        return (
            <TextMessageContainer>
                <div className="mb-3 d-flex flex-row-reverse">
                    <div className="d-flex align-items-center ml-2">
                        <Avatar className="rounded-circle shadow-sm mr-2" src="https://api.adorable.io/avatars/46/abott@adorable.png" />
                    </div>
                    <Bubble user={props.message.name} className="shadow-sm p-3">
                        {props.message.text}
                    </Bubble>
                </div>
            </TextMessageContainer>
        );
    }
}

export default Message;