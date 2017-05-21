import React from 'react';
import PetIndexItem from './pets_index_item';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import PetsEditFormContainer from './pet_edit_form_container';
import PetsAddForm from './pet_add_form';

export default class PetsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggleAdd: false,
      toggleEdit: false
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  componentWillMount(){
    this.props.fetchPetTypes();
  }

  toggleAdd(){
    event.preventDefault();
    this.setState({
      toggleAdd: !this.state.toggleAdd
    });
  }

  render(){
    const {
      pets,
      petTypes,
      removePet,
      editPet,
      createPet,
      fetchPetTypes
    } = this.props;

    let petList;

    if(pets.length > 0) {
      petList = pets.map(pet => {
          return <PetIndexItem
            key={pet.name+pet.id}
            pet={pet}
            removePet={removePet}
            editPet={editPet}
            petTypes={petTypes}
          />
        ;});
      } else {
      petList = (
        <p className='subtle-message'>Your Pet List is Empty</p>
      );
    }
    let petAddForm;

    if(this.state.toggleAdd){
      petAddForm = (
        <PetsAddForm
          petTypes={petTypes}
          createPet={createPet}
          fetchPetTypes={fetchPetTypes}
          toggleAdd={this.toggleAdd}
          ownerId={this.props.session.currentUser.id}

          />
      );
    }

    const addButton = (
      <button
        onClick={this.toggleAdd}
        className={this.state.toggleAdd === false ?
          'inactive-edit' : 'active-edit'}>
        {this.state.toggleAdd === false ?
          'Add a new pet' : 'Close'}
      </button>
    );

    return (
      <section className="pets-container">
        <h2>Your Pets</h2>
        {petList}
        <section>
          {petAddForm}
          {addButton}
        </section>


      </section>
    );
  }

}
