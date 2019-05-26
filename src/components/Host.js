import React from 'react';
import Room from './Room';
import client from 'socket.io-client';
var socket;

export default class Host extends React.Component {



    constructor(props) {
        super(props);
        this.state={
				gameId: Math.floor(1000 + Math.random() * (9999 - 1000))        	
        }
        socket = client(this.props.endpoint);
        socket.emit('createNewGame', {
            gameId: this.state.gameId
        });
    }

    componentDidMount() {
        socket.on('gameCreated', data => {
            console.log(data);
        });
        
    }

    render() {
        return (
            <div><Room gameId={this.state.gameId} socket={socket}/></div>
        );
    }
}