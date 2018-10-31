import React, { Component } from 'react';
import QuakeContainer from './QuakeContainer';
import MapContainer from './MapContainer';

const endPoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson'

class App extends Component {
  constructor(){
    super();
    this.state = {
      earthquakes: []
    }
  }

  getEarthquakes = async () => {
    try {
      const earthquakes = await fetch(endPoint);
      const earthquakesJson = await earthquakes.json();
      return earthquakesJson;
    } catch(err) {
      return err
    }
  }

  componentDidMount(){
    this.getEarthquakes().then((earthquakes) => {
      console.log(earthquakes, ' this is data');
      this.setState({earthquakes: earthquakes.features});
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer
            earthquakes={this.state.earthquakes}
           />
        </div>
        <div className="quakeContainer">
          <QuakeContainer
            earthquakes={this.state.earthquakes}
           />
        </div>
      </div>
    );
  }
}

export default App;
