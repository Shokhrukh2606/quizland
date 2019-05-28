import React from 'react';

export default class ErrorHandler extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{this.props.info}</div>
		);
	}
}
