import React from 'react';
import { filterReviews, averageRating } from '../../reducers/selectors';
import Stars from '../../widget/stars';

class LocationIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchLocationReviews(this.props.location);
  }

  render(){
    let {location, reviews} = this.props;
    let rating = "";
    if(Object.keys(reviews).length !== 0 && reviews.constructor === Object){
      reviews = filterReviews(reviews, location.id);
      rating = averageRating(reviews);
    }
    return(
      <section className="location-tile">
        <img src="http://www.iconsfind.com/wp-content/uploads/2015/11/20151125_5655088ba5cdf.png"></img>
        <p>{location.id}: {location.title}</p>
        <p>Rating({rating}) {reviews.length} reviews</p>
      </section>
    );
  }
}

export default LocationIndexItem;
