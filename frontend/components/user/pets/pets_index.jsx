import React from 'react';
import PetIndexItem from './pets_index_item';
import PetTypeIndexItem from './pet_type_index_item';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import PetEdit from './pet_edit';

export default class PetsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      desc: '',
      type_id: '',
      owner_id: props.session.currentUser.id
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    this.props.fetchPetTypes();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.pet_types.length < 1
      && nextProps.pet_types.length > 0){

      this.setState({
        type_id: nextProps.pet_types[0].id
      });
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const pet = Object.assign({}, this.state);
		this.props.createPet(pet);

		this.setState({
			pet_name: "",
			pet_desc: ""
		});
  }

  render(){
    const { pets, pet_types, removePet } = this.props;
    return (
      <section>
        <h3>---------PET LIST---------</h3>
        {pets.map(pet => {
          return <PetIndexItem
            key={pet.name+pet.id}
            pet={pet}
            removePet={removePet}
          />
        ;})}

        <h3>---------ADD PET---------</h3>
        <input
          type="text"
          onChange={this.update('name')}
          placeholder="Name" />

        <select
          value={this.state.type_id}
          onChange={this.update('type_id')} >

          {pet_types.map(
            type =>(
              <PetTypeIndexItem
                key={type.id}
                type={type} />
            )
          )}

        </select>

        <input
          type="text"
          onChange={this.update('desc')}
          placeholder="Tell us something about your pet" />
        <input
          onClick={this.handleSubmit}
          type="submit"
          value="Submit" />

        <Route path='/user/pet/edit' component={PetEdit} />
      </section>
    );
  }

}
