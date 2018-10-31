import React, { Component } from 'react';

const endPoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson'

class App extends Component {
  constructor(){
    super();
    this.state = {
      earthquakes: ''
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
      this.setState({earthquakes: earthquakes});
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          ...put Quakes Component here...
        </div>
      </div>
    );
  }
}

export default App;
