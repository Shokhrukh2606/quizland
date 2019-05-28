import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Loader from './Loader';
import QuestionBoard from './QuestionBoard';
import ErrorHandler from './ErrorHandler';
import PlayerAuthentication from './PlayerAuthentication';
import client from 'socket.io-client';
var socket;
export default class Player extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={
        	step: 'authentication', 
      		playerName: '',
       		gameId: '',
          correctAnswer: '',
          error: ''
        }
        socket = client(this.props.endpoint);
    }
    authenticationChangeHandler=e=>{
    	this.setState({
    		[e.target.name]: e.target.value
    	});
    }
    authenticationSubmitHandler=e=>{
    	socket.emit('joinGame', {
    		gameId: this.state.gameId,
    		playerName: this.state.playerName
    	})
      this.setState({
        step: 'wait'
      });
    }
    componentDidMount(){
    socket.on('questionSent', data=>{
      console.log(data)
        this.setState({
            step: 'questionCame',
            correctAnswer: data.answer
          });
      })
    socket.on('err', data=>{
      this.setState({
        step: 'errorOccured',
        error: data.info
      })
      console.log(data);
      });
    socket.on('playerJoined', data=>{
      this.setState({
        gameId: data.gameId
      });
    })
    }
    handleQuestionBoardClick=(e)=>{
    if(e.currentTarget.value==this.state.correctAnswer){
      socket.emit('questionAnswered', {
        gameId: this.state.gameId,
        correct: true
      })
    }
    else{
      socket.emit('questionAnswered', {
        gameId: this.state.gameId,
        playerName: this.state.playerName,
        correct: false
      })
    }
  }
    render() {
        return (
        	<div>
              { this.state.step==='authentication'? <PlayerAuthentication gameId={this.state.gameId} changeHandler={this.authenticationChangeHandler} submitHandler={this.authenticationSubmitHandler} /> : null}
              {this.state.step==='wait'? <Loader />:null}
              {this.state.step==='questionCame' ? <QuestionBoard handleClick={this.handleQuestionBoardClick}/>:null}
              {this.state.step==='errorOccured' ? <ErrorHandler info={this.state.error} />:null}

              </div>
        );
    }
}