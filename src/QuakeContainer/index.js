import React, { Component } from 'react';

class QuakeContainer extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		const currentTime = Date.now();
		const magnitudeColor = (mag) => {
			if(mag < 5) {
				return 'yellow'
			} else if(mag < 6) {
				return 'orange'
			} else {
				return 'red'
			}
		}
		const earthquakes = this.props.earthquakes.map((earthquake,i) => {
			return (
				<div key={i}>
					<p>{earthquake.properties.title.split(' ')[earthquake.properties.title.split(' ').length-2] + ' ' + earthquake.properties.title.split(' ')[earthquake.properties.title.split(' ').length-1]}</p>
					<p>{parseInt((currentTime - earthquake.properties.time)/3600000)} hours ago</p>
					<p className={magnitudeColor(earthquake.properties.mag)}>.</p>
				</div>
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