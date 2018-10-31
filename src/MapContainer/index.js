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
		const earthquakes = this.props.earthquakes.map((earthquake,i) => {
			return (
				<Marker
					key={i}
					position={{
						lat: earthquake.geometry.coordinates[1],
						lng: earthquake.geometry.coordinates[0]
					}}
					icon={{
						url: "https://i.imgur.com/xDAa0TO.png",
          				scaledSize: {width: 40, height: 40}
					}}
				/>
			)
		})
		return (
			
			<Map
				google={this.props.google}
				initialCenter={{lat: 41.878, lng: -87.630}}
          		zoom={8}
          		style={{height: '175px', width: '225px', position: 'relative'}}
          	>
          	
          		{earthquakes}
      		
      		</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',

})(MapContainer)