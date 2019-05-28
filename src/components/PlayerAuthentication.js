import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
export default class PlayerAuthentication extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>  <MDBContainer>
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
              value={this.props.gameId}
              onChange={this.props.changeHandler}
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
         	  value={this.props.playerName}
         	  onChange={this.props.changeHandler}
              className="form-control"
            />
            <div className="text-center py-4 mt-3">
              <MDBBtn className="btn btn-outline-purple" type="button" onClick={this.props.submitHandler}>
                Join
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
		);
	}
}
