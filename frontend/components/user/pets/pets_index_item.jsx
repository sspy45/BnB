import React from 'react';
import PetEditForm from './pet_edit_form';

export default class PetsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      editActive: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(){
    event.preventDefault();
    this.setState({
      editActive: !this.state.editActive
    });
  }

  render(){
    const { pet, removePet, editPet, petTypes } = this.props;

    const editButton = (
      <button
        onClick={this.toggleEdit}
        className={this.state.editActive === false ?
          'inactive-edit' : 'active-edit'}>
        {this.state.editActive === false ?
          'Edit' : 'Cancel'}
      </button>
    );

    let petType;

      if(petTypes.length > 0){
        petType = petTypes[pet.type_id - 1].species;
      } else {
        petType  = "";
      }

    let petItem = this.state.editActive ?
      <PetEditForm
        pet={pet}
        editPet={editPet}
        petTypes={petTypes}
        toggle={this.toggleEdit}
      /> :
      <section className="pets-row-container" >
        <h4>{pet.name} the {petType}</h4>
      </section>;


    return(
      <section className="pets-container-item">
        {petItem}
        <section className="pets-row-container">
          {editButton}
          <button
            className="delete-button"
            onClick={removePet(pet)}>Delete
          </button>
        </section>
      </section>
    );
  }
}
