import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { asArray } from '../../reducers/selectors';
import PetsIndexContainer from './pets/pets_index_container';
import BookingsDetailContainer from './bookings/bookings_detail_container';

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
    };
  }

  componentWillMount(){
    const { currentUser } = this.props.session;
    this.props.fetchPets(currentUser.id);
    this.props.fetchBookings(currentUser.id);
  }

  render(){
    const { pets, bookings, pet_types } = this.props.user_details;
    return(
      <section>
        <nav>
          <Link to="/user/">Profile</Link>
          <Link to="/user/pets">My pets </Link>
          <Link to="/user/pets/edit">My pets edit </Link>
          <Link to="/user/rentals">Rentals</Link>
        </nav>
        <section>
          <h1>Pets List</h1>
          <PetsIndexContainer pet_types={pet_types}/>
        </section>
        <section>
          <h1>Bookings</h1>
          <br/>
          <BookingsDetailContainer />
        </section>

      </section>
    );
  }

}
