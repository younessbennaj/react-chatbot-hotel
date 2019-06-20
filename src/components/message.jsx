import React from 'react';
import styled from 'styled-components';
import { scale } from '../common/animation';
import Bubble from '../messages_components/text/Bubble';

const Message = (props) => {

    const Step = styled.li`
        list-style-type: none;
    `;

    const BubleRight = styled.div`
        animation: ${scale} 0.3s ease forwards;
        border-radius: 18px 18px 0px 18px;
        font-size: 14px;
    `;

    if (props.message.name === 'Bot') {
        return (
            <Step>
                <div className="row mb-3 d-flex flex-row">
                    <div className="d-flex align-items-center mr-2">
                        <img src="https://i.pravatar.cc/50" alt="avatar" className=" rounded-circle" />
                    </div>
                    <Bubble user={props.message.name} className="card ">
                        <div className="card-body">{props.message.text}</div>
                    </Bubble>
                </div>
            </Step>
        );
    } else {
        return (
            <Step>
                <div className="row mb-3 d-flex flex-row-reverse">
                    <div className="d-flex align-items-center ml-2">
                        <img src="https://i.pravatar.cc/50" alt="avatar" className=" rounded-circle" />
                    </div>
                    <BubleRight className="card ">
                        <div className="card-body">{props.message.text}</div>
                    </BubleRight>
                </div>
            </Step>
        );
    }
}

export default Message;