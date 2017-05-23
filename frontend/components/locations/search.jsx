import React from 'react';
import LocationMap from './location_map';
import LocationIndex from './location_index';
import { asArray } from '../../reducers/selectors';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchAllLocations();
  }

  render(){
    let { fetchLocations, locations } = this.props;
    if(Object.keys(locations).length !== 0 && locations.constructor === Object){
      locations = asArray(this.props.locations);
      return(
        <div>
          <LocationMap locations={locations}/>
        </div>
      );
    } else {
      return <h1>EMPTY</h1>;
    }
  }

}

export default Search;
