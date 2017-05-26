import React from 'react';
import Review from './review';
import Rating from 'react-rating';
import { asArray } from '../../reducers/selectors';

export default class ReviewList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      body: "",
      rating: 2.5,
      review_type: "location",
      location_id: props.locationId,
      status: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(){
    event.preventDefault();
    if(this.props.currentUser){
      const review = Object.assign({}, this.state);
      review.user_id = this.props.currentUser.id;
      this.props.createReview(review);
      this.setState({
        body: "",
        rating: 2.5,
        status: ""
      });
    } else {
      this.setState({
        status: "You must log in to leave reviews"
      });
    }

  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  render(){
    const {reviews} = this.props;
    let rev;
    if(Object.keys(reviews).length > 0){
      let tempReviews = asArray(reviews);
      rev = (
        <section>
          {tempReviews.map(review => <Review key={review.id} review={review}/>)}
        </section>
      );
    }
    return(
      <section>
        <section className="review-container">
          <label>
            {this.state.status}
          </label>
          <textarea
            onChange={this.update("body")}
            value={this.state.body}
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
        {rev}

      </section>
    );
  }
}
