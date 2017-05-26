/* global google */

import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class LocationMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    const mapOptions = this.props.mapSettings || {
      center: { lat: 37.773972, lng: -122.431297 },
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleBench) {
      this.props.fetchLocation(this.props.locationId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.locations);
    }
  }

  componentDidUpdate() {
    if (this.props.singleLocation) {
      const targetLocationKey = Object.keys(this.props.locations)[0];
      const targetLocation = this.props.locations[targetLocationKey];
      this.MarkerManager.updateMarkers([targetLocation]);
    } else {
      this.MarkerManager.updateMarkers(this.props.locations);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updateFilter('bounds', bounds);
    });
    // google.maps.event.addListener(this.map, 'click', (event) => {
    //   const coords = getCoordsObj(event.latLng);
    //   this.handleClick(coords);
    // });
  }

  handleMarkerClick(location) {
    this.props.history.push(`location/${location.id}`);
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

  // handleClick(coords) {
  //   this.props.history.push({
  //     pathname: 'benches/new',
  //     search: `lat=${coords.lat}&lng=${coords.lng}`
  //   });
  // }

  render() {
    let klass = this.props.className || 'map-container';
    return (
      <div className={klass} ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(LocationMap);
