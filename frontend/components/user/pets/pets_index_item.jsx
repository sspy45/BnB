import React from 'react';

export default class PetsIndexItem extends React.Component {


  render(){
    const { pet, removePet } = this.props;
    return(
      <section>
        <h3>Name: {pet.name}</h3>
        <h3>Desc: {pet.desc}</h3>
        <button onClick={removePet(pet)}>delete</button>
      </section>
    );
  }
}