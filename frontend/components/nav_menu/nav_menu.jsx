import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

export default class NavMenu extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      toggleMenu: false
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleLogOut() {
    this.props.logout();
    this.props.closeModal();
    this.setState({
      toggleMenu: false
    });
  }

  toggleMenu() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  render(){

    return (
      <section>
        <img
          id="gear-dropdown-btn"
          className='user-icon'
          onClick={this.toggleMenu}/>
        <ul className={this.state.toggleMenu ? "gear-dropdown" : "gear-dropdown hidden"}>
          <li>
            <Link
              to="/user"
              onClick={this.closeModal}
              >Profile
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              onClick={this.closeModal}
              >Search
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={this.handleLogOut}
              >Logout
            </Link>
          </li>
        </ul>

      </section>
    );
  }
}
