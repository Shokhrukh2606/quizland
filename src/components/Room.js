
import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import client from 'socket.io-client';
export default class Room extends React.Component {
	

	constructor(props) {
		super(props);
		this.state={
			numOfPlayers: 0,
			players: [],
			currentQuestion: 0,
			answers: ['A', 'B'],
			quiz: {
			"questions":
				[
					{
					"question": "What is the capital of UZB?",
					"answerA": "Tashkent",
					"answerB": "Samarkand",
					"answerC": "Bukhara",
					"answerD": "Khorazm"
					},
					{
					"question": "What is the capital of USA?",
					"answerA": "Washington",
					"answerB": "New York",
					"answerC": "New Jersey",
					"answerD": "Colorado"					
					}
				]	
			}
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
	startGame=()=>{
		console.log(this.state.quiz.questions[0]);
		this.props.socket.emit('sendQuestion', {
			question: this.state.quiz.questions[this.state.currentQuestion],
			gameId: this.props.gameId
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
              <MDBBtn color="success" onClick={this.startGame}>Start</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
		);
	}
}
