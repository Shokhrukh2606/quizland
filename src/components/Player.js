import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import client from 'socket.io-client';
var socket;
export default class Player extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={
        	step: 'authentication', 
      		playerName: '',
       		gameId: ''
        }
        socket = client(this.props.endpoint);
    }
    changeHandler=e=>{
    	this.setState({
    		[e.target.name]: e.target.value
    	});
    }
    handleSubmit=e=>{
    	socket.emit('joinGame', {
    		gameId: this.state.gameId,
    		playerName: this.state.playerName
    	})
    }
    render() {
        return (
        	<div>
              { this.state.step==='authentication'? 

              	   <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center py-4">Join game by entering game code</p>
            <label
              htmlFor="gameId"
              className="grey-text font-weight-light"
            >
              Game code
            </label>
            <input
              type="text"
              id="gameId"
              name="gameId"
              value={this.state.gameId}
              onChange={this.changeHandler}
              className="form-control"
            />
            <br />
            <label
              htmlFor="playerName"
              className="grey-text font-weight-light"
            >
              Your name
            </label>
            <input
              type="text"
              id="playerName"
         	  name="playerName"	
         	  value={this.state.playerName}
         	  onChange={this.changeHandler}
              className="form-control"
            />
            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="button" onClick={this.handleSubmit}>
                Join
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

              :null}
              </div>
        );
    }
}