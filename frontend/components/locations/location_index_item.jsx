import React from 'react';
import { filterReviews } from '../../reducers/selectors';
import { browserHistory, withRouter } from 'react-router';
import Stars from '../../widget/stars';
import PictureViewer from '../../widget/picture_viewer';

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
          <PictureViewer pictures={local.pictures} options={pictureOptions}/>
          <p>{local.title}</p>
          <p>Rating: {local.rating}</p>
          <p>Reviews: {local.reviews}</p>

      </section>
    );
  }
}

export default withRouter(LocationIndexItem);
