import React from 'react';
import LocationMap from './location_map';
import LocationIndex from './location_index';
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

  handleChange(filter, updateFilter){
    return (e) => updateFilter(filter, e.currentTarget.value);
  }

  updateSearch(e){
    this.setState({
      search: e.currentTarget.value
    });
  }

  render(){
    let { updateFilter, locations } = this.props;
    let map;

    if(Object.keys(locations).length !== 0 && locations.constructor === Object){
      locations = asArray(this.props.locations);
      map = (
        <div>
          <LocationMap
            locations={locations}
            className="search-map-container"
            updateFilter={updateFilter}
            singleLocation={false}
          />
        </div>
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
            <LocationsContainer filter={this.state.search}/>
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
