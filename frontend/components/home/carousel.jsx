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

    this.addEnterListener = this.addEnterListener.bind(this);
    this.enter = this.enter.bind(this);
  }
  componentWillMount(){
    this.addEnterListener();
  }

  updateSearch(e){
    this.setState({
      query: e.currentTarget.value
    });
  }

  handleSearch(){
    event.preventDefault();
    let query = this.state.query.split(" ").join("+");


    this.props.history.push(`/search?q=${query}`);
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.enter);
  }

  addEnterListener(){

    window.addEventListener('keydown', this.enter, false);
  }

  enter(e){
    if (e.keyCode === 13) {
      this.handleSearch();
    }
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
