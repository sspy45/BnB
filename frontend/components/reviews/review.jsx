import React from 'react';
import Rating from 'react-rating';

const Review = ({review}) => {
  return (
    <section className="review">
        <section className="review-inner">
          <p>
            "{ review.body }"
            - {review.userName ? review.userName : 'some person'}
          </p>
        </section>
        <section>
        <Rating
        empty="fa fa-heart-o"
        full="fa fa-heart"
        initialRate={parseInt(review.rating)}
        readonly
        />
      </section>
    </section>
  );
};


export default Review;
