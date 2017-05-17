import React from 'react';
import LocationIndexItem from './location_index_item';

class LocationIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchLocations();
  }
  render(){
    const {locations} = this.props;

    if (locations.length > 0){

      return(
        <ul>
        {
          locations.map(location => {
            return (
              <LocationIndexItem location={location} />
            );
          }
        )}
      </ul>
      );
    } else {
      return (
        <div>Empty</div>
      );
    }
  }
}

export default LocationIndex;
