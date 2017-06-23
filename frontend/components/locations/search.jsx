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
    this.parseQuery = this.parseQuery.bind(this);
    this.addEnterListener = this.addEnterListener.bind(this);
    this.enter = this.enter.bind(this);
    this.state ={
      search: ""
    };
  }

  componentWillMount(){
    let filter;
    let { search } = this.props.location;
    if(search !== ""){
      filter = this.parseQuery(search);
    }
    this.props.updateFilter('search', filter);
    this.addEnterListener();
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.enter);
  }

  addEnterListener(){

    window.addEventListener('keydown', this.enter, false);
  }

  enter(e){
    if (e.keyCode === 13) {
      this.handleChange();
    }
  }
  parseQuery(search){
    let query = search.substring(3);
    let vars = query.split('+');
    for (let i = 0; i < vars.length; i++) {
      if(typeof vars[i] === "string"){
        vars[i] = vars[i].toLowerCase();
      }
    }
    return vars;
  }
  handleChange(){
    let search = this.state.search.split(" ");

    let query = search.join("+");
    history.pushState(
      null,
      null,
      `/#/search?q=${query}`);
    this.props.updateFilter('search', search);
  }

  updateSearch(e){
    this.setState({
      search: e.currentTarget.value
    });
    this.handleChange();
  }

  render(){
    let { updateFilter, locations } = this.props;
    let map;
    let tiles;


    if(Object.keys(locations).length !== 0 && locations.constructor === Object){
      locations = asArray(this.props.locations);

      let mapSettings = {
        center: {
          lat: locations[0].lat || 37.773972,
          lng: locations[0].lng || -122.431297
        },
        zoom: 13,
        draggable: true,
        zoomControl: true,
        scrollwheel: true
      };

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
          <h2>No locations found for {this.state.search}</h2>
        </div>
      );
    }

    return(
      <section className="search-container">
        <section className="search">
          <input
            value={this.state.search}
            placeholder="Search for pet sitters"
            onChange={this.updateSearch}
          />
          <button
            onClick={this.handleChange}>
            Search
          </button>
        </section>
        <section className="search-items">
          {tiles}
          <section>
            {map}
          </section>

        </section>
      </section>
    );
  }

}

export default Search;
