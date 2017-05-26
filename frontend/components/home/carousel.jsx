import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Link } from 'react-router-dom';

export default class Carousel extends React.Component {

  constructor(){
    super();

    this.state = {
      startDate: null,
      endDate: null,
    };
  }


  render(){
    return(
      <section className="home-splash">
        <h1>Find them a home when you aren't home</h1>
        <section className="search-bar">
          <input
            value={this.state.search}
            placeholder="Search for pet sitters">

          </input>
          <Link
            to="/search"
            onClick={this.handleSearch}>
            Search
          </Link>
        </section>
      </section>
    );
  }

}
