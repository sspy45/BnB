import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

export default class UserDetails extends React.Component {
  constructor(props){
    super(props);
    const {currentUser} = props;

    this.state = ({
      username: currentUser.username,
      first_name: currentUser.first_name || "",
      last_name: currentUser.last_name || "",
      email: currentUser.email || "",
      phone: currentUser.phone || "",
      successToggle: false
    });

    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderSuccess = this.renderSuccess.bind(this);
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
    user.id = this.props.currentUser.id;
    this.props.clearErrors();
		this.props.editUser(user);
    this.setState({successToggle: true});
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderSuccess() {
    if(this.props.errors.length < 1
      && this.state.successToggle === true)
    return(
      <p className='success'>Update Successful</p>
    );
  }

  render(){
    const { currentUser, errors } = this.props;


    return(
      <section className='user-profile-container'>
        <h2>My Profile</h2>
        <br />

        <label>Profile page for user: {currentUser.username}</label>
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
        {this.renderErrors()}
        {this.renderSuccess()}
        <br />
        <input
          type="submit"
          onClick={this.handleSubmit}
          value="Update Profile"
        />
      </section>
    );
  }
}
