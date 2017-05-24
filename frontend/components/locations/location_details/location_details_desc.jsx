import React from 'react';

const LocationDetailsDesc = ({details}) => {

  const {title, description, street_address1, street_address2, city, state, zip} = details;
    return(
    <section>
      <section className="details-row">
        <section>
          <h2>{title}</h2>
          <p>{city}, {state} {zip} [REVIEWS]</p>
        </section>
        <section>
          OWNER
        </section>
      </section>
      <section>
        <h4>100% refundable</h4>
        <p>Cancel your reservation within 24hrs and receive a full refund. </p>
      </section>
      <section>
        <h4>About this listing </h4>
        <p>{description}</p>
      </section>

      <br/>


      <br/>
    </section>
  );
};

export default LocationDetailsDesc;
