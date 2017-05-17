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

		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
		this.handleSwitch = this.handleSwitch.bind(this);
  }
	componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
		if(this.state.formType === "login"){
			this.props.login({user});
		} else if (this.state.formType === "signup"){
			this.props.signup({user});
		}
		this.setState = {
			username: this.state.username,
			password: "",
			formType: this.props.formType
		};
  }
	handleSwitch(e) {
		e.preventDefault();
		const formType = this.state.formType === "login" ? "signup" : "login";
		this.setState({formType});
	}

	update(property) {
		return e => this.setState({
			[property]: e.currentTarget.value
		});
	}

	renderErrors() {
    return(
      <ul>
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
				<h3>Don't have an account?</h3>
				<Link
					to="/"
					className='session-link'
					onClick={this.handleSwitch}
					>Sign Up
				</Link>
			</div> :
			<div className='session-form-switch'>
				<h3>Already have an account?</h3>
				<Link
					to="/"
					className='session-link'
					onClick={this.handleSwitch}
					>Log in
				</Link>

			</div>;


		return(
			<form	className='session-container' onSubmit={this.handleSubmit}>
				<section className='session-form'>
				{header}
				{this.renderErrors()}
				<input
					type="text"
					className='session-form-input'
					onChange={this.update('username')}
					value={this.state.username}
					placeholder="username"></input>
				<input
					type="password"
					className='session-form-input'
					onChange={this.update('password')}
					value={this.state.password}
					placeholder="password"></input>

				<input
					className='session-form-submit'
					type="submit"
					value="Submit"/>
				<br/>
				{link}
				</section>
			</form>
		);
  }
}

export default withRouter(SessionForm);
