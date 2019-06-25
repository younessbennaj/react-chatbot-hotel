import React, { Component } from 'react';
import uuid from "uuid";
import styled from 'styled-components';
import CarousselMessageContainer from './CarousselMessageContainer';


//You should use the flex or flex-basis property rather than width to set a
//fixed width column with CSS flexbox.
const Card = styled.div`
    flex: 0 0 16rem;
`;

const Img = styled.div`
    height: 180px;
    background-color: #2196F3;
`

class CarousselMessage extends Component {
    state = {
        message: this.props.message
    }
    render() {
        return (
            <CarousselMessageContainer className="d-flex flex-row">
                {this.state.message.content.map(card => {
                    console.log(card);
                    return (
                        <Card key={uuid.v4()} className="card shadow-sm mx-3">
                            <img src={card.imageUrl} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <a href="#" className="btn btn-primary">{card.button}</a>
                            </div>
                        </Card>
                    )
                })}
            </CarousselMessageContainer>
        );
    }
}

export default CarousselMessage;