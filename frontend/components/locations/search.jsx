import React from 'react';
import LocationMap from './location_map';
import LocationIndex from './location_index';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { fetchLocations, locations } = this.props;
    return(
      <div>
        <LocationMap fetchLocations={fetchLocations} locations={locations}/>
        <LocationIndex fetchLocations={fetchLocations} locations={locations}/>
      </div>
    );
  }

}

export default Search;
