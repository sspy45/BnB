import React from 'react';
import LocationIndexItemContainer from './location_index_item_container';
import { asArray } from '../../reducers/selectors';

class LocationIndex extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.fetchLocations(this.props.filter);
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.locations.length < 1
  //     && nextProps.locations.length > 0){
  //       console.log("does something");
  //     this.setState({
  //       locations: nextProps.locations
  //     });
  //   }
  // }

  render(){
    let {filter, locations} = this.props;

    locations[filter] = locations[filter] || {};
    if(Object.keys(locations[filter]).length !== 0 && locations.constructor === Object){

      locations = asArray(locations[filter]);
      return(
        <section className="categories">
          <h1>locations for {filter}s</h1>
          <secton className="inner-categories">



          {locations.map(local => (
            <LocationIndexItemContainer
              key={local.id}
              local={local}
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
