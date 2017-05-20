import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

				username: "",
				password: "",
				formType: props.formType

		};

		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSwitch = this.handleSwitch.bind(this);
		this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
  }
	componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }
	handleGuestSubmit(e) {
		e.preventDefault();
		const user = {
			username: 'demo',
			password: 'password'
		};
		this.props.login({user});
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
		if(this.state.formType === "login"){
			this.props.login({user});
		} else if (this.state.formType === "signup"){
			this.props.signup({user});
		}
		this.setState({
			username: this.state.username,
			password: "",
		});
  }
	handleSwitch(e) {
		e.preventDefault();
		const formType = (this.state.formType === "login") ? "signup" : "login";
		this.setState({formType});
		this.props.clearErrors();
	}

	update(property) {
		return e => this.setState({
			[property]: e.currentTarget.value
		});
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

  render(){
		const {loggedIn, errors} = this.props;
		const formType = this.state.formType;
		const header = formType === "login" ?
			<h2>Log In</h2> :
			<h2>Sign Up</h2>;

		const link = formType === "login" ?
			<div className='session-form-switch'>
				<h4>Don't have an account?</h4>
				<Link
					to="/"
					className='session-button'
					onClick={this.handleSwitch}
					>Sign Up
				</Link>
			</div> :
			<div className='session-form-switch'>
				<h4>Already have an account?</h4>
				<Link
					to="/"
					className='session-button'
					onClick={this.handleSwitch}
					>Log in
				</Link>

			</div>;


		return(
			<section	className='session-container'>
				<section className='session-form'>
				{header}
				{this.renderErrors()}
				<div>
					<h3>Username</h3>
					<input
						type="text"
						className='session-form-input'
						onChange={this.update('username')}
						value={this.state.username}
						placeholder="username"></input>
					<h3>Password</h3>
					<input
						type="password"
						className='session-form-input'
						onChange={this.update('password')}
						value={this.state.password}
						placeholder="password"></input>
				</div>
				<div>
					<input
						className='session-form-submit'
						onClick={this.handleGuestSubmit}
						type="submit"
						value="Guest"/>
					<input
						className='session-form-submit'
						onClick={this.handleSubmit}
						type="submit"
						value="Submit"/>
				</div>
				<br/>
				{link}
				</section>
			</section>
		);
  }
}

export default withRouter(SessionForm);
