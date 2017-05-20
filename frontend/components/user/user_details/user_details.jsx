import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

export default class UserDetails extends React.Component {
  constructor(props){
    super(props);
    const {currentUser} = props.session;
    this.state = ({
      username: currentUser.username,
      first_name: currentUser.first_name || "",
      last_name: currentUser.last_name || "",
      email: currentUser.email || "",
      phone: currentUser.phone || ""
    });

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    user.id = this.props.session.currentUser.id;
		this.props.editUser(user);
  }

  render(){
    const { currentUser } = this.props.session;
    return(
      <section>
        <label>Username: {currentUser.username}</label>
        <br/>

        <label>First Name</label>
        <br />
        <input
          type="text"
          onChange={this.update("first_name")}
          value={this.state.first_name}
          placeholder="First Name"
        />
        <br />

        <label>Last Name</label>
        <br />
        <input
          type="text"
          onChange={this.update("last_name")}
          value={this.state.last_name}
          placeholder="Last Name"
        />
        <br />

        <label>Email</label>
        <br />
        <input
          type="text"
          onChange={this.update("email")}
          value={this.state.email}
          placeholder="Email"
        />
        <br />

        <label>Phone number</label>
        <br />
        <input
          type="text"
          onChange={this.update("phone")}
          value={this.state.phone}
          placeholder="Phone number"
        />
        <br />

        <input
          type="submit"
          onClick={this.handleSubmit}
          value="Edit User"
        />
      </section>
    );
  }
}
