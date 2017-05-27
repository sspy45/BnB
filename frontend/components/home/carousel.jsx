import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Carousel extends React.Component {

  constructor(){
    super();

    this.state = {
      query: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e){
    this.setState({
      query: e.currentTarget.value
    });
  }

  handleSearch(){
    event.preventDefault();
    let query = this.state.query.split(" ").join("%20");


    this.props.history.push(`/search?q=${query}`);
  }

  render(){
    return(
      <section className="home-splash">

        <section className="search-bar">
          <input
            value={this.state.search}
            placeholder="Search for pet sitters"
            onChange={this.updateSearch}
          />
          <button
            onClick={this.handleSearch}>
            Search
          </button>
          <h1>Find them a home when you aren't</h1>
        </section>
      </section>
    );
  }

}

export default withRouter(Carousel);
