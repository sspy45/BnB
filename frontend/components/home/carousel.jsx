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
    return () => this.setState({
      query: e.currentTarget.value
    });
  }

  handleSearch(){
    event.preventDefault();
    let query = this.state.query;
    this.props.history.push('/search', {query});
  }

  render(){
    return(
      <section className="home-splash">
        <h1>Find them a home when you aren't home</h1>
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
        </section>
      </section>
    );
  }

}

export default withRouter(Carousel);
