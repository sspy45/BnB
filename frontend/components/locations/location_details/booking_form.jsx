import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Link } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

export default class BookingForm extends React.Component {
  constructor(props){
    super(props);
    let currentDate = new Date();
    this.state={
      startDate: null,
      endDate: null,
      location_id: props.local.id,
      pet_id: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    // this.isDayBlocked = this.isDayBlocked.bind(this);

  }



  componentWillReceiveProps(nextProps){
    if(this.props.pets.length < 1
      && nextProps.pets.length > 0){
      this.setState({
        pet_id: nextProps.pets[0].id
      });
    }
    //
    // if(this.props.currentUser){
    //   this.props.fetchPets(this.props.currentUser.id);
    // }
  }
  componentWillMount(){
    if(this.props.currentUser){
      this.props.fetchPets(this.props.currentUser.id);
    }

  }
  isDayBlocked(el){
    const now = moment();
    return el.format("LL") === now.format("LL");
  }
  handleSubmit(){
    event.preventDefault();
    let booking = {
      check_in: this.state.startDate._d,
      check_out: this.state.endDate._d,
      location_id: this.state.location_id,
      pet_id: this.state.pet_id
    };
    this.props.createBooking(booking);
  }


  handleSwitch(e){
    let pet_id = e.currentTarget.value;
    this.setState({
      pet_id
    });
  }

  render(){
    const {pets, map, bookings} = this.props;
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

    if(this.props.currentUser){

    return (
      <section className='location-booking-form'>
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
            isDayBlocked={(el) => this.isDayBlocked(el)}
          />
          {petList}

          <section>
            <input
              onClick={this.handleSubmit}
              type="submit"
              value='Request'/>
          </section>
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
