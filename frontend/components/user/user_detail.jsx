import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class UserDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pets:{
        owner_id: '',
        type_id: '',
        name: '',
        desc: ''
      },
      bookings:{
        location_id: '',
        pet_id: '',
        check_in: '',
        check_out: ''
      }
    };
  }

  componentWillMount(){
    const { currentUser } = this.props.session;
    this.props.fetchPets(currentUser.id);
    this.props.fetchBookings(currentUser.id);
  }

  render(){
    const { pets, bookings } = this.props.user_details;

    debugger;
    const petsList = pets ? (
      <ul>
        {pets.map( pet => {
          return (
            <li key={pet.id}>
              Name: {pet.name}
            </li>);
        })}
      </ul>
    ) : "";

    const bookingsList = bookings ? (
      <ul>
        {bookings.map( booking => {
          return (
            <li key={booking.id}>
              Location: {booking.location_id}
            </li>);
        })}
      </ul>
    ) : "";

    return(
      <section>
      <h1>USER DETAIL AREA WHOOO</h1>
      {petsList}
      <br />
      {bookingsList}
      </section>
    );
  }

}
