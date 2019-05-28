import React, { Fragment } from 'react';
import client from 'socket.io-client';
import Host from './Host';
import Player from './Player';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            endpoint: "http://localhost:3001/quizland",
            clientType: ''
        }


    }
    newGame() {
        this.setState({
            clientType: 'host'
        });
    }
    joinGame(){
        this.setState({
            clientType: 'player'
        })
    }
    render() {
        return (
            <div>
            {this.state.clientType===''? <MDBContainer>
      <MDBRow>
        <MDBCol size="6">
        <Fragment>
        	<MDBBtn gradient="aqua" type="button" onClick={()=>this.newGame()}>Create new Game</MDBBtn>
        </Fragment>
        </MDBCol>
        <MDBCol size="6">
        <Fragment>
        	<MDBBtn gradient="aqua" type="button" onClick={()=>this.joinGame()}>Start Game</MDBBtn>
        </Fragment>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>:null}
    {this.state.clientType==='host'? <Host endpoint={this.state.endpoint} />:null}
    {this.state.clientType==='player'? <Player endpoint={this.state.endpoint} />:null}
    </div>
        );
    }
}