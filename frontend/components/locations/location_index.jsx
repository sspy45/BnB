import React from 'react';
import LocationIndexItemContainer from './location_index_item_container';
import { asArray } from '../../reducers/selectors';
import Slider from 'react-slick';

class LocationIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.fetchLocations(this.props.filter);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.locations.length < 1
      && nextProps.locations.length > 0){
        console.log("does something");
      this.setState({
        locations: nextProps.locations
      });
    }
  }

  render(){
    let {filter, locations} = this.props;
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    locations[filter] = locations[filter] || {};
    if(Object.keys(locations[filter]).length !== 0 && locations.constructor === Object){

      locations = asArray(locations[filter]);
      return(
        <section className="categories">
          <h1>locations for {filter}s</h1>
          <secton className="inner-categories">
          {locations.map(location => (
            <LocationIndexItemContainer
              key={location.id}
              location={location}
            />
          ))}
          </secton>
        </section>
      );
    } else {
      return (
        <div>Empty</div>
      );
    }
  }
}

export default LocationIndex;
