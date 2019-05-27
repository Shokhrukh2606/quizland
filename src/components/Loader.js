import React from 'react';

export default class Loader extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="spinner-grow text-success" role="status">
        			<span className="sr-only">Loading...</span>
      			</div>
			</div>
		);
	}
}
