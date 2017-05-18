import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class UserDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchPets();
  }

  render(){
    return(<h1>USER DETAIL AREA WHOOO</h1>);
  }

}
