import React from 'react';
import Rating from 'react-rating';

const LocationDetailsDesc = ({details}) => {

  const {
    title, description,
    street_address1,
    street_address2,
    city, state, zip,
    rating, ownerUrl} = details;
    return(
    <section>
      <section className="details-row">
        <section>
          <h1>{title}</h1>
          <section className="details-row">
            <p>{city}, {state} {zip} {"   "}</p>
            <Rating
              empty="fa fa-heart-o"
              full="fa fa-heart"
              initialRate={parseInt(rating)}
              readonly
            />
          </section>
        </section>
        <section className='details-owner-icon'>
          <img src={ownerUrl}/>

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

      <br/>


      <br/>
    </section>
  );
};

export default LocationDetailsDesc;
