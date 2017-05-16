import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

				username: "",
				password: ""

		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
  }
	componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
		this.state = {username: "", password: ""};
    this.props.processForm({user});
  }

	update(property) {
		return e => this.setState({
			[property]: e.currentTarget.value
		});
	}

  render(){
		const {loggedIn, errors, formType} = this.props;
		const header = formType === "login" ?
			<h2>Log In</h2> :
			<h2>Sign Up</h2>;

		const link = formType === "login" ?
			<div>
				<h3>Don't have an account?  <Link to="/signup">Sign Up</Link></h3>
			</div> :
			<div>
				<h3>Already have an account?  <Link to="/login">Log in</Link></h3>
			</div>;


		return(
			<form	className='session-container' onSubmit={this.handleSubmit}>
				<section className='session-form'>
				{header}
				<input
					type="text"
					onChange={this.update('username')}
					value={this.state.username}
					placeholder="username"></input>
				<input
					type="password"
					onChange={this.update('password')}
					value={this.state.password}
					placeholder="password"></input>

				<input
					className='session-form-submit'
					type="submit"
					value="Submit"/>
				<br/>
				{link}
				{errors}
				</section>
			</form>
		);
  }
}

export default withRouter(SessionForm);
