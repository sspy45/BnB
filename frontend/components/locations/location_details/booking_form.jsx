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

    };
  }



  componentWillMount(){
    this.props.fetchPets(this.props.currentUser.id);
  }

  render(){
    const {pets} = this.props;
    let petList;
    if(pets.length > 0){
      petList = (
        <div>
          <label>Select a pet: </label><br/>
          <br/>
          <select
            value={pets[0].id}>
            {pets.map(pet =>
              <option key={pet.id} value={pet.id}>
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
    return (
      <section className='location-booking-form'>
        <h2>
          Make a Booking
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
          <input type="submit" value='submit'/>
        </section>
      </section>
    );
  }
}
