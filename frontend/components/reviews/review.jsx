import React from 'react';

const Review = ({review}) => {
  return (
    <section className="review">
        <section className="review-inner">
          <i className="fa fa-quote-left" aria-hidden="true"></i>
            { review.body }
          <i className="fa fa-quote-right" aria-hidden="true"></i>
        </section>
      <h4>rating: {review.rating}</h4>
    </section>
  );
};


export default Review;
