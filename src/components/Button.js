import React, {Fragment} from 'react';
import { MDBBtn } from "mdbreact";
export default class Button extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Fragment>
      <MDBBtn gradient="peach" id={this.props.id} onClick={this.props.onClick}>{this.props.answer}</MDBBtn>
    </Fragment>
            </div>
        );
    }
}
