import React from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';

const Message = (props) => {

    const Step = styled.li`
        list-style-type: none;
    `;

    const BubleRight = styled.div`
        border-radius: 18px 18px 0px 18px;
        font-size: 14px;
    `;

    const Avatar = styled.div`
        background-color: #2196F3;
        padding: 6px;
        height: 46px;
        width: 46px;
    `;

    //Voir assigner une classe avec condition si on peut faire plus simple
    if (props.message.name === 'Bot') {
        return (
            <Step>
                <div className="mb-3 d-flex flex-row">
                    <div className="d-flex align-items-end mr-2">
                        <Avatar className="rounded-circle shadow-sm ml-2" />
                    </div>
                    <Bubble user={props.message.name} className="shadow-sm p-3">
                        {props.message.text}
                    </Bubble>
                </div>
            </Step>
        );
    } else {
        return (
            <Step>
                <div className="mb-3 d-flex flex-row-reverse">
                    <div className="d-flex align-items-center ml-2">
                        <Avatar className="rounded-circle shadow-sm mr-2" />
                    </div>
                    <Bubble user={props.message.name} className="shadow-sm p-3">
                        {props.message.text}
                    </Bubble>
                </div>
            </Step>
        );
    }
}

export default Message;