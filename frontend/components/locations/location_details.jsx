import React from 'react';
import LocationMap from './location_map';
import { asArray } from '../../reducers/selectors';
import ReviewsList from '../reviews/reviews_list';
export default class LocationDetails extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.fetchSingleLocation(parseInt(id))
      .then(location => this.props.fetchLocationReviews(location));
  }

  render(){
    let locationDetails;
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
        description
      } = this.props.local;

      const id = this.props.match.params.id;
      let locations = asArray({id: this.props.local});
      let focus = {center: { lat, lng }, zoom: 13 };

      locationDetails = (
        <section className="location-details">
          <h2>{title}</h2>
          <br/>
          <p>{description}</p>
          <br/>
          <p>{street_address1} {street_address2}</p>
          <br/>
          <p>{city}, {state} {zip}</p>
          <LocationMap locations={locations} focus={focus}/>
          <br/>
        </section>
      );
    } else {
      locationDetails = (
        <section>
          SOMETHING WENT WRONG, FIND AN ADULT!!!
        </section>
      );
    }

    let review;
    let { reviews } = this.props;
    if(Object.keys(reviews).length !== 0 && reviews.constructor === Object){
      reviews = asArray(reviews);
    }

    return(
      <section>
        {locationDetails}
        {reviews.length > 0 ? <ReviewsList reviews={reviews} /> : "" }
      </section>
    );
  }
}
