/*global google*/

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromLocation = this.createMarkerFromLocation.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(locations) {
    const locationsObj ={};
    locations.forEach((location) => {locationsObj[location.id] = location;});
    locations
      .filter(location => !this.markers[location.id])
      .forEach(newLocation => this.createMarkerFromLocation(newLocation));

    Object.keys(this.markers)
      .filter(locationId => !locationsObj[locationId])
      .forEach((locationId) => this.removeMarker(this.markers[locationId]));
  }

  createMarkerFromLocation(location){
    const position = new google.maps.LatLng(location.lat, location.lng);
    let marker = new google.maps.Marker({
      position,
      map: this.map,
      locationId: location.id
    });

    marker.setMap(this.map);
    this.markers[marker.locationId] = marker;

  }

  removeMarker(marker) {
    this.markers[marker.locationId].setMap(null);
    delete this.markers[marker.locationId];
  }
}
