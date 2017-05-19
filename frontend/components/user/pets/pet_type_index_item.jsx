import React from 'react';

export default class PetTypeIndexItem extends React.Component {
  render(){
    return(
      <option value={this.props.type.id}>
        {this.props.type.species}
      </option>
    );
  }
}
