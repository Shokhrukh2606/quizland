import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import client from 'socket.io-client';
export default class Room extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <MDBContainer className="mt-4 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-5">Join at quizland.join with Game code: {this.props.gameId}</h2>
          <MDBRow>
        <MDBCol size="6">Quizland</MDBCol>
        <MDBCol size="6">Players <h2>{this.props.numOfPlayers}</h2></MDBCol>
      </MDBRow>
            <hr className="my-2" />
  			 <ul>
          {this.props.players.map((item)=> (
            <li key={item}>{item}</li>
          ))}
        </ul>       	
            <p className="lead">
              <MDBBtn color="success" onClick={this.props.startGame}>Start</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        );
    }
}