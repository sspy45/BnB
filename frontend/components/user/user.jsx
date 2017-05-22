import React from 'react';
import { Link, NavLink, withRouter, Route, Switch } from 'react-router-dom';
import { asArray } from '../../reducers/selectors';
import PetsIndexContainer from './pets/pets_index_container';
import BookingsDetailContainer from './bookings/bookings_detail_container';
import UserDetailContainer from './user_details/user_details_container';
import LocationsContainer from '../locations/locations_container';

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
      <section className='profile-container'>
        <nav className='profile-container-nav'>
          <Link to="/user/">Profile</Link><br />
          <Link to="/user/pets">My pets </Link><br />
          <Link to="/user/bookings">Bookings</Link>
        </nav>
        <section className='profile-container-main'>
          <Route path="/user/pets" component={PetsIndexContainer} petTypes={petTypes} />
          <Route path="/user/bookings" component={BookingsDetailContainer} />
          <Route path="/user/locations" component={LocationsContainer} />
          <Route exact path="/user/" component={UserDetailContainer} />
        </section>

      </section>
    );
  }

}
