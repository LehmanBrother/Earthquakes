import React, { Component } from 'react';
import QuakeContainer from './QuakeContainer';
import MapContainer from './MapContainer';

const weeklyEndPoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson'

const monthlyEndPoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'

class App extends Component {
  constructor(){
    super();
    this.state = {
      earthquakes: [],
      monthly: false
    }
  }

  timeSwitch = () => {
    console.log('timeswitch called');
    if(this.state.monthly) {
      this.setState({
        monthly: false
      })
    } else {
      this.setState({
        monthly: true
      })
    }
  }

  getEarthquakes = async () => {
    try {
      if(this.state.monthly) {
        const earthquakes = await fetch(monthlyEndPoint);
        const earthquakesJson = await earthquakes.json();
        return earthquakesJson;
      } else {
        const earthquakes = await fetch(weeklyEndPoint);
        const earthquakesJson = await earthquakes.json();
       return earthquakesJson;
      }
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
          <button onClick={this.timeSwitch}>Switch Weekly/Monthly</button>
          <QuakeContainer
            earthquakes={this.state.earthquakes}
           />
        </div>
      </div>
    );
  }
}

export default App;
