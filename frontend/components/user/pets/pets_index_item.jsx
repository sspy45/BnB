import React from 'react';
import PetEditFrom from './pet_edit_form';

export default class PetsIndexItem extends React.Component {

  render(){
    const { pet, removePet, editPet, petTypes } = this.props;
    return(
      <section>
        <h3>Name: {pet.name}</h3>
        <h3>Desc: {pet.desc}</h3>
        <button onClick={removePet(pet)}>delete</button>
        <PetEditFrom
          pet={pet}
          editPet={editPet}
          petTypes={petTypes}/>
      </section>
    );
  }
}
