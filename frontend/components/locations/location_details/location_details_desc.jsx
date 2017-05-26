import React from 'react';
import Rating from 'react-rating';
import { asArray } from '../../../reducers/selectors';
import ReviewsList from '../../reviews/reviews_list';

const LocationDetailsDesc = ({details, review, createReview, currentUser, locationId}) => {
  const {
    title, description,
    street_address1,
    street_address2,
    city, state, zip,
    rating, ownerUrl,
    reviews} = details;
  let reviewList = (
    <ReviewsList
      locationId ={locationId}
      reviews={review}
      createReview={createReview}
      currentUser={currentUser}
    />);
    return(
    <section>
      <section className="details-row">
        <section>
          <h1>{title}</h1>
          <section>
            <p>{city}, {state} {zip} {"   "}
              <Rating
              empty="fa fa-heart-o"
              full="fa fa-heart"
              initialRate={parseInt(rating)}
              readonly
              /> {reviews} reviews</p>


          </section>
        </section>
        <section className='details-owner-icon'>
          {ownerUrl ? <img src={ownerUrl}/> : ""}

        </section>
      </section>
      <section>
        <section>
          <h4>100% refundable</h4>
          <p>Cancel your reservation within 24hrs and receive a full refund. </p>
        </section>
      </section>
      <section>
        <section>
          <h4>About this listing </h4>
          <p>{description}</p>
        </section>
      </section>
      <section>
        <section>
          <h4>Reviews </h4>
          {reviewList}
        </section>
      </section>
    </section>
  );
};

export default LocationDetailsDesc;
