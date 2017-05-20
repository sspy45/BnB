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

  toggleEdit(e){
    e.preventDefault();
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
          'Edit' : 'Undo'}
      </button>
    );

    let petEditForm;

    if(this.state.editActive) {
      petEditForm =
          <PetEditForm
            pet={pet}
            editPet={editPet}
            petTypes={petTypes}/>;
      }

    return(
      <section>
        <h3>Name: {pet.name}</h3>
        <h3>Desc: {pet.desc}</h3>
        {editButton}
        <button onClick={removePet(pet)}>Delete</button>

        {petEditForm}
      </section>
    );
  }
}
