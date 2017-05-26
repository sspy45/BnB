import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Link } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export default class BookingForm extends React.Component {
  constructor(props){
    super(props);
    let currentDate = new Date();
    this.state = {
      startDate: null,
      endDate: null,
      location_id: props.local.id,
      pet_id: "",
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.isDayBlocked = this.isDayBlocked.bind(this);

  }



  componentWillReceiveProps(nextProps){
    if(this.props.pets.length < 1
      && nextProps.pets.length > 0){
      this.setState({
        pet_id: nextProps.pets[0].id
      });
    }
  }

  componentWillMount(){
    this.props.clearErrors();
    if(this.props.currentUser){
      this.props.fetchPets(this.props.currentUser.id);
    }

  }
  isDayBlocked(el){
    const {bookings} = this.props;
    return el.format("LL") in bookings;
  }
  handleSubmit(){
    event.preventDefault();
    let booking = {
      check_in: this.state.startDate._d,
      check_out: this.state.endDate._d,
      location_id: this.state.location_id,
      pet_id: this.state.pet_id,
      submitted: true
    };
    this.props.createBooking(booking);
    this.setState({
      startDate: null,
      endDate: null,
      submitted: true
    });
  }


  handleSwitch(e){
    let pet_id = e.currentTarget.value;
    this.setState({
      pet_id
    });
  }

  render(){
    const {pets, map, bookings, errors} = this.props;
    let petList;
    if(pets.length > 0){
      petList = (
        <div>
          <label>Select a pet: </label><br/>
          <br/>
          <select
            onChange={this.handleSwitch}
            value={this.state.pet_id}>
            {pets.map(pet =>
              <option
                key={pet.id}
                value={pet.id}>
                {pet.name}
              </option>
            )}
          </select>
        </div>
      );
    } else {
      petList = (
      <section>
        <h4>
          Register a <Link to="/user/pets">pet</Link> before booking
        </h4>
      </section>);
    }
    let submitButton;
    if(this.state.startDate && this.state.endDate){
      submitButton = <input
        onClick={this.handleSubmit}
        type="submit"
        className="booking-button"
        value='Request'/>;
    } else {
      submitButton = <input
        type="submit"
        className="disabled-booking-button"
        value='Request'/>;
    }
    if(this.props.currentUser){
    return (
      <section className='location-booking-form'>
        {map}
        <h2>
          Book this place
        </h2>
          <ul>
            {errors.map(error =>
              <li
                key={error}
                className="errors"
                >{error}
              </li>
            )}
          </ul>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            isDayBlocked={(el) => this.isDayBlocked(el)}
          />
          {!this.state.submitted ?
            <section className='location-booking-form'>
              {petList}
              {submitButton}
            </section>
            :
            <section>
              <p className="booking-submitted">
                Thank you your request will be processed shortly!
              </p>
            </section>}
        </section>

      );
    } else {
      return (<section className='location-booking-form'>
        {map}
        <h2>
          Book this place
        </h2>

          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />

        <section>
          <h4>Please log in make Bookings</h4>
        </section>
      </section>);
    }
  }
}
