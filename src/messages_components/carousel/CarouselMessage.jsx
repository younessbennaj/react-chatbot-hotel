import React, { Component } from 'react';
import uuid from "uuid";
import styled from 'styled-components';
import CarouselMessageContainer from './CarouselMessageContainer';
import Arrow from './Arrow';
import Card from './Card';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


//You should use the flex or flex-basis property rather than width to set a
//fixed width column with CSS flexbox.


//Revoir comment récupérer la width depuis props
const SliderContainer = styled.div`
    position: relative;
    height: 388px;
    width: 350px;
    overflow: hidden;
`;

class CarouselMessage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: this.props.message,
            currentCardIndex: 0
        };
    }

    previousCard = () => {
        const newIndex = this.state.currentCardIndex - 1;
        this.setState({ currentCardIndex: newIndex });
    }

    nextCard = () => {
        const newIndex = this.state.currentCardIndex + 1;
        this.setState({ currentCardIndex: newIndex });
    }

    render() {
        return (
            <SliderContainer>
                <Arrow
                    className='position-absolute'
                    direction='left'
                >
                    <button onClick={this.previousCard} className="btn btn-primary" disabled={this.state.currentCardIndex === 0}>
                        <FaArrowLeft />
                    </button>
                </Arrow>
                <Arrow
                    className='position-absolute'
                    direction='right'
                >
                    <button onClick={this.nextCard} className="btn btn-primary" disabled={this.state.currentCardIndex === this.state.message.content.length - 1}>
                        <FaArrowRight />
                    </button>
                </Arrow>
                <CarouselMessageContainer currentCardIndex={this.state.currentCardIndex} cardsItem={this.state.message.content.length} className="d-flex flex-row">
                    {this.state.message.content.map(card => {
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
                </CarouselMessageContainer>
            </SliderContainer>
        );
    }
}

export default CarouselMessage;