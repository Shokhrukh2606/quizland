
import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import client from 'socket.io-client';
export default class Room extends React.Component {
	

	constructor(props) {
		super(props);
		this.state={
			numOfPlayers: 0,
			players: []
		}
	
	}
	componentDidMount(){
		console.log(this.state.players)
		this.props.socket.on('playerJoined', data=>{
			console.log(data.playerName);
			this.addPlayer(data.playerName);
			console.log(this.state.players);
		})
	}
	addPlayer(p){
		this.setState({
  players: [...this.state.players, p]
})

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
        <MDBCol size="6">Players <h2>{this.state.numOfPlayers}</h2></MDBCol>
      </MDBRow>
            <hr className="my-2" />
  			 <ul>
          {this.state.players.map((item)=> (
            <li key={item}>{item}</li>
          ))}
        </ul>       	
            <p className="lead">
              <MDBBtn color="success">Start</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
		);
	}
}
