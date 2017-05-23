import React from 'react';
import LocationMap from './location_map';
import { asArray } from '../../reducers/selectors';
import ReviewsList from '../reviews/reviews_list';
import PictureViewer from '../../widget/picture_viewer';
export default class LocationDetails extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchSingleLocation(parseInt(id))
      .then(location => {
        this.props.fetchLocationReviews(location);
      });
  }

  render(){

    let locationDetails;
    let map;
    let review;
    let { reviews } = this.props;
    let pictureContainer;
    let pictureOptions={
      className: "location-carousel"
    };
    if(this.props.local){
      const {
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

      const id = this.props.match.params.id;
      let locations = asArray({id: this.props.local});
      let focus = {center: { lat, lng }, zoom: 13, draggable: false, zoomControl: false, scrollwheel: false};

      locationDetails = (
        <section className="location-details">
          <h2>{title}</h2>
          <br/>
          <p>{description}</p>
          <br/>
          <p>{street_address1} {street_address2}</p>
          <br/>
          <p>{city}, {state} {zip}</p>

          <br/>
        </section>
      );


      map = locations.length > 0 ?
        <LocationMap
          locations={locations}
          focus={focus}
          className={'location-detail-map'} /> : "";

      pictureContainer = pictures.length > 0 ?
        <PictureViewer
          pictures={pictures}
          options={pictureOptions} /> : "";

    } else {
      locationDetails = (
        <section>
          SOMETHING WENT WRONG, FIND AN ADULT!!!
        </section>
      );
    }

    if(Object.keys(reviews).length !== 0 && reviews.constructor === Object){
      reviews = asArray(reviews);
      review = <ReviewsList reviews={reviews} />;
    }

    return(
      <section>
        {pictureContainer}
        {locationDetails}
        {review}
        {map}
      </section>
    );
  }
}
