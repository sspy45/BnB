/* global google */

import React from 'react';
import MarkerManager from '../../util/marker_manager';



class LocationMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {

    const mapOptions = this.props.focus || {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.locations);
  }
  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.locations);
  }

  render(){
    return(
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }

}

export default LocationMap;
