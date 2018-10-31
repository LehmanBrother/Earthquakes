import React, { Component } from 'react';

class QuakeContainer extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		console.log(this.props.earthquakes, 'qc version');
		console.log(this.props.earthquakes.features, 'qc version');
		const earthquakes = this.props.earthquakes.map((earthquake,i) => {
			return (
				<p key={i}>{earthquake.properties.title}</p>
			)
		})
		return (
			<div id="info">
				{earthquakes}
			</div>
		)
	}
}

export default QuakeContainer;