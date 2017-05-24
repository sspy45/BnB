import React from 'react';
import { filterReviews } from '../../reducers/selectors';
import { browserHistory, withRouter } from 'react-router';
import Stars from '../../widget/stars';
import PictureViewer from '../../widget/picture_viewer';
import Rating from 'react-rating';

class LocationIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    return () => this.props.history.push(`/location/${id}`);
  }


  render(){
    let {local} = this.props;
    let pictureOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    return(
      <section
        className="location-tile"
        onClick={this.handleClick(local.id)}
      >
          <PictureViewer
            pictures={local.pictures}
            options={pictureOptions}
            klass={'tile-location-carousel'}/>
          <section className="tile-details">
            <p>{local.title}</p>
            <Rating
              empty="fa fa-heart-o"
              full="fa fa-heart"
              initialRate={parseInt(local.rating)}
              readonly
            />
            <p>Reviews: {local.reviews}</p>
          </section>
      </section>
    );
  }
}

export default withRouter(LocationIndexItem);
