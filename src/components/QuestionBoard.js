import React from 'react';
import Button from './Button';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
export default class QuestionBoard extends React.Component {
	

	constructor(props) {
		super(props);
	}
	setAnswer=(ans)=>{
		this.props.setAnswer();
	}
	render() {
		return (
			<div>
			  <MDBContainer>
      <MDBRow>
        <MDBCol size="6"><Button type="button" id="A" answer={this.props.question['answerA']} onClick={this.props.setAnswer} /></MDBCol>
        <MDBCol size="6"><Button type="button" id="B" answer={this.props.question['answerB']} onClick={this.props.setAnswer} /></MDBCol>
     </MDBRow>
       <MDBRow>
        <MDBCol size="6"><Button type="button" id="C" answer={this.props.question['answerC']} onClick={this.props.setAnswer} /></MDBCol>
        <MDBCol size="6"><Button type="button" id="D" answer={this.props.question['answerD']} onClick={this.props.setAnswer} /></MDBCol>
     </MDBRow>
</MDBContainer>
			</div>
		);
	}
}
