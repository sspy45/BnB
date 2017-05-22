import React from 'react';

const Review = ({review}) => {
  return (
    <section className="review">
      <h3>{review.body}</h3>
      <h4>rating: {review.rating}</h4>
    </section>
  );
};


export default Review;
