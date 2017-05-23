/*global google*/

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromLocation = this.createMarkerFromLocation.bind(this);
  }

  updateMarkers(locations) {
    const locationsObj ={};
    if(locations.length > 0){
      locations.forEach((location) => {locationsObj[location.id] = location;});
      debugger
      locations
        .filter(location => !this.markers[location.id])
        .forEach(newLocation => this.createMarkerFromLocation(newLocation));
    }

  }

  createMarkerFromLocation(location){
    debugger
    const position = new google.maps.LatLng(location.lat, location.lng);
    let marker = new google.maps.Marker({
      position,
      map: this.map,
      locationId: location.id
    });

    marker.setMap(this.map);
    this.markers[marker.locationId] = marker;

  }
}
