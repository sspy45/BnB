/* global google */

import React from 'react';
import MarkerManager from '../../util/marker_manager';



class LocationMap extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {

    const mapOptions = this.props.mapSettings || {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.createMarkerFromLocation(this.props.locations);
  }
  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.locations);
  }

  render(){
    let klass = this.props.className || 'map-container';
    return(
      <div className={klass} ref={ map => this.mapNode = map }></div>
    );
  }

}

export default LocationMap;
