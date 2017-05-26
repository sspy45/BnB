import React from 'react';
import LocationMap from './location_map';
import LocationIndexItem from './location_index_item';
import LocationsContainer from './locations_container';
import { asArray } from '../../reducers/selectors';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.state ={
      search: ""
    };
  }

  componentWillMount(){
    this.props.fetchAndReplace();
  }
  handleChange(filter, updateFilter){
    return (e) => updateFilter('search', filter);
  }

  updateSearch(e){
    this.setState({
      search: e.currentTarget.value
    });
  }

  render(){
    let { updateFilter, locations } = this.props;
    let map;
    let tiles;

    let mapSettings = {
      center: { lat: 37.773972, lng: -122.431297 },
      zoom: 13,
      draggable: false,
      zoomControl: false,
      scrollwheel: false
    };

    if(Object.keys(locations).length !== 0 && locations.constructor === Object){
      locations = asArray(this.props.locations);

      map = (
        <div>
          <LocationMap
            mapSettings={mapSettings}
            locations={locations}
            className="search-map-container"
            updateFilter={updateFilter}
            singleLocation={false}
          />
        </div>
      );
      tiles = (
        <section className="search-tiles">
          {locations.map(location =>
            <LocationIndexItem
              key={location.id}
              local={location} />)}
        </section>
      );
    } else {
      map = (
        <div>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return(
      <section>
        <section className="search-bar">
          <input
            value={this.state.search}
            placeholder="Search for pet sitters"
            onChange={this.updateSearch}
          />
          <button
            onClick={this.handleChange(this.state.search, updateFilter)}>
            Search
          </button>
        </section>
        <section className="search-items">
          <section>
            {tiles}
          </section>
          <section>
            {map}
          </section>

        </section>
      </section>
    );
  }

}

export default Search;
