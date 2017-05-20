import React from 'react';
import { Link, NavLink, withRouter, Route, Switch } from 'react-router-dom';
import { asArray } from '../../reducers/selectors';
import PetsIndexContainer from './pets/pets_index_container';
import BookingsDetailContainer from './bookings/bookings_detail_container';

export default class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pets:{
        owner_id: '',
        type_id: '',
        name: '',
        desc: ''
      },
    };
  }

  componentWillMount(){
    const { currentUser } = this.props.session;
    this.props.fetchPets(currentUser.id);
    this.props.fetchBookings(currentUser.id);
  }

  render(){
    const { pets, bookings, petTypes } = this.props.user_details;
    return(
      <section>
        <nav>
          <NavLink exact to="/user/">Profile</NavLink>
          <NavLink to="/user/pets">My pets </NavLink>
          <NavLink to="/user/bookings">Bookings</NavLink>
        </nav>
        <section>
          <Route path="/user/pets" component={PetsIndexContainer} petTypes={petTypes} />
          <Route path="/user/bookings" component={BookingsDetailContainer} />
        </section>

      </section>
    );
  }

}
