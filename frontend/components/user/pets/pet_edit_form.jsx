import React from 'react';
import PetTypeIndexItem from './pet_type_index_item';

export default class PetEdit extends React.Component {
  constructor(props){
    super(props);
    const { pet } = props;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      desc: '',
      type_id: ''
    };

  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const pet = Object.assign({}, this.state);
    pet.id = this.props.pet.id;
    pet.owner_id = this.props.pet.owner_id;
		this.props.editPet(pet);

		this.setState({
			pet_name: "",
			pet_desc: ""
		});
  }

  render(){
    const { pet } = this.props;
    if(this.state.name === ''){
      this.state = ({
        name: pet.name,
        desc: pet.desc,
        type_id: pet.type_id
      });
    }
    return (
      <section>
        <label>Name</label>
        <input
          type="text"
          onChange={this.update('name')}
          value={this.state.name}
          placeholder="Name" />

        <label>Desc</label>
        <input
          type="text"
          onChange={this.update('desc')}
          value={this.state.desc}
          placeholder="Desc" />

        <select
          value={this.state.type_id}
          onChange={this.update('type_id')} >

          {this.props.petTypes.map(
            type =>(
              <PetTypeIndexItem
                key={type.id}
                type={type} />
            )
          )}
        </select>
        <input
          type="submit"
          onClick={this.handleSubmit}
          value="Edit Pet" />
      </section>
    );
  }

}
