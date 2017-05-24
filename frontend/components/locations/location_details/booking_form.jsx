import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Link } from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
export default class BookingForm extends React.Component {
  constructor(props){
    super(props);
    let currentDate = new Date();
    this.state={
      startDate: null,
      endDate: null,
      locationId: props.local.id,
      petId: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }


  componentWillReceiveProps(nextProps){
    if(this.props.pets.length < 1
      && nextProps.pets.length > 0){
      this.setState({
        petId: nextProps.pets[0].id
      });
    }
  }
  componentWillMount(){
    this.props.fetchPets(this.props.currentUser.id);
  }

  handleSubmit(){
    event.preventDefault();
    debugger
  }

  handleSwitch(e){
    let petId = e.currentTarget.value;
    this.setState({
      petId
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
            value={this.state.petId}>
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

    const defaultProps = {
      isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
    };
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
  }
}
