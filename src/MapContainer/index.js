import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		console.log(this.props.earthquakes, 'mc version');
		return (
			<Map
				google={this.props.google}
				initialCenter={{lat: 41.878, lng: -87.630}}
          		zoom={8}
          		style={{height: 175, width: 225}}
			/>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer)