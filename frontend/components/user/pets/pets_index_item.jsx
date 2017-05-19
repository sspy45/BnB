import React from 'react';

export default class PetsIndexItem extends React.Component {


  render(){
    const {name, desc} = this.props.pet;
    return(
      <section>
        <h3>Name: {name}</h3>
        <h3>Desc: {desc}</h3>
      </section>
    );
  }
}
