import React from 'react';
import { filterReviews } from '../../reducers/selectors';
import { browserHistory, withRouter } from 'react-router';
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
      >
          <PictureViewer
            pictures={local.pictures}
            options={pictureOptions}
            klass={'tile-location-carousel'}/>
          <section className="tile-details">
            <h3>{local.title}</h3>
            <Rating
              empty="fa fa-heart-o"
              full="fa fa-heart"
              initialRate={parseInt(local.rating)}
              readonly
            />
          <h4>Reviews: {local.reviews}</h4>
          </section>
          <div
            className="tile-overlay"
            onClick={this.handleClick(local.id)}>

          </div>
      </section>
    );
  }
}

export default withRouter(LocationIndexItem);
