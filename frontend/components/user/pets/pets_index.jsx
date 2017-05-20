import React from 'react';
import PetIndexItem from './pets_index_item';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import PetsEditFormContainer from './pet_edit_form_container';
import PetsAddForm from './pet_add_form';

export default class PetsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addForm: false
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  componentWillMount(){
    this.props.fetchPetTypes();
  }

  toggleAdd(e){
    e.preventDefault();
    this.setState({
      addForm: !this.state.addForm
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
    let petAddForm;

    if(this.state.addForm){
      petAddForm = (
        <PetsAddForm
          petTypes={petTypes}
          createPet={createPet}
          fetchPetTypes={fetchPetTypes}
          ownerId={this.props.session.currentUser.id}
          />
      );
    }

    const addButton = (
      <button
        onClick={this.toggleAdd}
        className={this.state.addForm === false ?
          'inactive-edit' : 'active-edit'}>
        {this.state.addForm === false ?
          'Add' : 'Close'}
      </button>
    );

    return (
      <section>
        <h3>---------PET LIST---------</h3>
        {pets.map(pet => {
          return <PetIndexItem
            key={pet.name+pet.id}
            pet={pet}
            removePet={removePet}
            editPet={editPet}
            petTypes={petTypes}
          />
        ;})}

        <h3>---------ADD PET---------</h3>
        {addButton}

        {petAddForm}

      </section>
    );
  }

}
