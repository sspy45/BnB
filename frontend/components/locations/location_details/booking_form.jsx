import React from 'react';

export default class BookingForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchPets(this.props.currentUser.id);
  }

  render(){
    const {pets} = this.props;
    let petList;
    if(pets.length > 0){
      debugger
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
        <p>CALENDAR</p>
        <p>CALENDAR</p>
        {petList}

      </section>
    );
  }
}
