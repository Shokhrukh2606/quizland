import React from 'react';

export default class Statistics extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{this.props.numOfAnsweredPlayers}</div>
		);
	}
}
