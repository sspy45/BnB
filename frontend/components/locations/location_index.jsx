import React from 'react';
import LocationIndexItemContainer from './location_index_item_container';
import { asArray } from '../../reducers/selectors';

class LocationIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchLocations();
  }

  render(){
    let {locations, filter} = this.props;
    if(Object.keys(locations).length !== 0 && locations.constructor === Object){
      locations = asArray(locations.locations);
      return(
        <section>
          <h1>{filter}</h1>
          <section className="location-category">
            {locations.map(location => (
              <LocationIndexItemContainer
                key={location.id}
                location={location}
              />
            ))}
          </section>
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
