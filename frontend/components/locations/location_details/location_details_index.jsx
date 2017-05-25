import React from 'react';
import LocationMap from '../location_map';
import Carousel from './carousel';
import LocationDetailsDesc from './location_details_desc';
import BookingContainer from './booking_container';
import { asArray } from '../../../reducers/selectors';
export default class LocationDetails extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchSingleLocation(parseInt(id))
      .then(location => {
        this.props.fetchLocationReviews(location);
        this.props.fetchLocationBookings(location);
      });
  }

  render(){

    let locationDetails;
    let map;
    let reviewList;
    let { reviews } = this.props;
    let carousel;
    let bookingContainer;

    if(this.props.local){
      const {
        id,
        title,
        street_address1,
        street_address2,
        city,
        state,
        zip,
        lat,
        lng,
        description,
        pictures
      } = this.props.local;

      let locations = asArray({id: this.props.local});

      carousel = <Carousel pictures={pictures} />;
      locationDetails =
      <LocationDetailsDesc
        details={this.props.local}
        review={reviews}
        locationId={id}
        currentUser={this.props.currentUser}
        createReview={this.props.createReview} />;

      let mapSettings = {
        center: { lat, lng },
        zoom: 13,
        draggable: false,
        zoomControl: false,
        scrollwheel: false
      };

      map = locations.length > 0 ?
        <LocationMap
          locations={locations}
          mapSettings={mapSettings}
          className={'location-detail-map'}
        /> : "";

      bookingContainer = <BookingContainer map={map} />;
    } else {
      locationDetails = (
        <section>
          An error has occured
        </section>
      );
    }


    return(
      <section className="location-container">
        <section className="location-carousel">
          {carousel}
        </section>
        <section className="location-details">
          <section className="location-details-static">
            {locationDetails}
          </section>
          <section className="location-details-form">
            {bookingContainer}
          </section>
        </section>

      </section>
    );
  }
}
