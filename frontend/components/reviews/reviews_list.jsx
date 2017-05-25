import React from 'react';
import Review from './review';
import Rating from 'react-rating';

export default class ReviewList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      body: "",
      rating: 2.5,
      review_type: "location",
      user_id: props.currentUser.id,
      location_id: props.locationId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(){
    event.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  render(){
    const {reviews} = this.props;

    return(
      <section>
        <section className="review-container">
          <textarea
            onChange={this.update("body")}
            placeholder="Leave a nice review">
          </textarea>
          <section>
            <section>
             Rating:
            <Rating
              empty="fa fa-heart-o"
              full="fa fa-heart"
              initialRate={this.state.rating}
              value={this.state.rating}
              onChange={(rating) => this.setState({rating})}
            />
            </section>
            <input
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </section>

        </section>
        <section>
          {reviews.map(review => <Review key={review.id} review={review}/>)}
        </section>
      </section>
    );
  }
}
