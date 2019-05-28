import React from 'react';
import Room from './Room';
import Statistics from './Statistics';
import client from 'socket.io-client';
var socket;

export default class Host extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            gameId: Math.floor(1000 + Math.random() * (9999 - 1000)),
            step: 'gameCreation',
            numOfPlayers: 0,
            players: [],
            currentQuestion: 0,
            numOfAnsweredPlayers: 0,
            answers: ['A', 'B'],
            quiz: {
                "questions": [{
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
        };
        socket = client(this.props.endpoint);
        socket.emit('createNewGame', {
            gameId: this.state.gameId
        });
    }
    addPlayer = (p) => {
        this.setState({
            players: [...this.state.players, p]
        })
    }
    startGame = () => {
        socket.emit('sendQuestion', {
            answer: this.state.answers[this.state.currentQuestion],
            gameId: this.state.gameId
        });
    }
    componentDidMount() {
       
        socket.on('playerJoined', data => {
            this.addPlayer(data.playerName);
            this.setState({
                numOfPlayers: this.state.numOfPlayers+1
            })
        });
        socket.on('questionResult', data=>{
            this.setState({
                numOfAnsweredPlayers: this.state.numOfAnsweredPlayers+1,
                step: 'resultRender'
            })
        });
    }

    render() {
        return (
            <div>
                 {this.state.step==='gameCreation'? <Room gameId={this.state.gameId} players={this.state.players} numOfPlayers={this.state.numOfPlayers} startGame={this.startGame} />:null}
                 {this.state.step==='resultRender'? <Statistics numOfAnsweredPlayers={this.state.numOfAnsweredPlayers}/> : null}   
                </div>
        )
    }
}