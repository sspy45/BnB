import React from 'react';
import Rating from 'react-rating';

const Review = ({review}) => {
  console.log(review);
  return (
    <section className="review">
        <section className="review-inner">
          <p>

            "{ review.body }"
            - {review.userName ? review.userNmae : 'some person'}
          </p>
        </section>
        <section>
        <Rating
        empty="fa fa-smile-o fa-2"
        full="fa fa-smile-o fa-2"
        initialRate={parseInt(review.rating)}
        readonly
        />
      </section>
    </section>
  );
};


export default Review;
