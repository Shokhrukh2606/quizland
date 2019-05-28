import React, {Fragment} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
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
<Fragment>
      {['A', 'B', 'C', 'D'].map((buttonId)=>(
         <MDBBtn gradient="peach" key={buttonId} value={buttonId} onClick={this.props.handleClick} ></MDBBtn>
        ))
      }  
        </Fragment>
     </MDBRow>
</MDBContainer>
			</div>
		);
	}
}