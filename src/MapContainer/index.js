import React, { Component } from 'react';

class MapContainer extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		console.log(this.props.earthquakes, 'mc version');
		return (
			<div id="info">
				have the map
			</div>
		)
	}
}

export default MapContainer;