import React from 'react';

export default class PetEdit extends React.Component {
  constructor(props){
    super(props);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    // const pet = Object.assign({}, this.state);
		// this.props.createPet(pet);
    //
		// this.setState({
		// 	pet_name: "",
		// 	pet_desc: ""
		// });
  }

  render(){

    return (
      <h1>hihiiiiiii</h1>
    );
  }

}
