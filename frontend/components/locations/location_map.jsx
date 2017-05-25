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

  componentWillReceiveProps(nextProps){
    window.map = this.map;
    const propsLat = this.props.locations[0].lat;
    const propsLng = this.props.locations[0].lng;
    const nextLat = nextProps.locations[0] && nextProps.locations[0].lat;
    const nextLng = nextProps.locations[0] && nextProps.locations[0].lng;

    if(propsLat !== nextLat || propsLng !== nextLng){
      this.map.setCenter({lat:nextLat, lng:nextLng});
    }
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
