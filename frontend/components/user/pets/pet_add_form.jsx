import React from 'react';
import PetTypeIndexItem from './pet_type_index_item';
export default class PetAddForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      desc: '',
      type_id: '',
      owner_id: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.petTypes.length < 1
      && nextProps.petTypes.length > 0){

      this.setState({
        type_id: nextProps.petTypes[0].id
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
    pet.owner_id = this.props.ownerId;
		this.props.createPet(pet);
    this.props.toggleAdd();
  }

  render(){
    const { petTypes } = this.props;
    if(this.state.name === ''){
      this.state = ({
        type_id: petTypes[0].id
      });
    }
    return (
      <section className="edit-section">
        <section className="pets-add-row">
          <section className="pets-col-container">
            <label>Name</label>
            <input
              type="text"
              onChange={this.update('name')}
              placeholder="Name" />
          </section>
          <section className="pets-col-container">
          <label>Type</label>
            <select
              value={this.state.type_id}
              onChange={this.update('type_id')} >

              {petTypes.map(type => (
                <PetTypeIndexItem
                  key={type.id}
                  type={type} />
                )
              )}

            </select>
          </section>
        </section>
        <section className="pets-col-container">
          <label>Description</label>
          <textarea
            className="long-input"
            type="text"
            onChange={this.update('desc')}
            placeholder="Tell us something about your pet" />
        </section>
        <input
          onClick={this.handleSubmit}
          type="submit"
          value="Submit" />
      </section>
    );
  }

}
