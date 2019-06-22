import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 16rem;
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
        console.log(this.state.message);
        return (
            <Card className="card shadow-sm">
                {/* <img src="..." className="card-img-top" alt="..."></img> */}
                <Img></Img>
                <div className="card-body">
                    <h5 className="card-title">{this.state.message.content.title}</h5>
                    <p className="card-text">{this.state.message.content.text}</p>
                    <a href="#" className="btn btn-primary">{this.state.message.content.button}</a>
                </div>
            </Card>
        );
    }
}

export default CarousselMessage;