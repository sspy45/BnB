import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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
        <select
          value={pets[0].id}>
          {pets.map(pet =>
            <option value={pet.id}>
              {pet.name}
            </option>
          )}
        </select>
      );
    }
    return (
      <section>
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
        <p>CALENDAR</p>
        <p>CALENDAR</p>
        {petList}
        <input type="submit" value='submit'/>
      </section>
    );
  }
}
