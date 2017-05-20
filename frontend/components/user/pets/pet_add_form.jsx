import React from 'react';
import PetTypeIndexItem from './pet_type_index_item';
export default class PetAddForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      desc: '',
      type_id: '',
      owner_id: props.ownerId
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
		this.props.createPet(pet);

		this.setState({
			pet_name: "",
			pet_desc: ""
		});
  }

  render(){
    const { petTypes } = this.props;

    return (
      <section>
        <input
          type="text"
          onChange={this.update('name')}
          placeholder="Name" />

        <select
          value={this.state.type_id}
          onChange={this.update('type_id')} >

          {petTypes.map(
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
      </section>
    );
  }

}
