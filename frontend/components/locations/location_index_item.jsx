import React from 'react';
import { filterReviews, averageRating } from '../../reducers/selectors';
import { browserHistory, withRouter } from 'react-router';
import Stars from '../../widget/stars';

class LocationIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    return () => this.props.history.push(`/location/${id}`);
  }
  componentWillMount(){
    this.props.fetchLocationReviews(this.props.local);
  }

  render(){
    let {local, reviews} = this.props;
    let rating = "";
    if(Object.keys(reviews).length !== 0 && reviews.constructor === Object){
      reviews = filterReviews(reviews, local.id);
      rating = averageRating(reviews);
    }
    return(
      <section
        className="location-tile"
        onClick={this.handleClick(local.id)}
      >
        <img src="http://www.iconsfind.com/wp-content/uploads/2015/11/20151125_5655088ba5cdf.png"></img>
        <p>{local.title}</p>
        <p>Rating({rating}) {reviews.length} reviews</p>
      </section>
    );
  }
}

export default withRouter(LocationIndexItem);
