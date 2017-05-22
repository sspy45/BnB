import React from 'react';
import Review from './review';

const ReviewList = ({reviews}) => {
  return <section>
    {reviews.map(review => <Review key={review.id} review={review}/>)}
  </section>;
};

export default ReviewList;
