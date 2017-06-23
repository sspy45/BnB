import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form/session_form_container';
import NavMenuContainer from './nav_menu/nav_menu_container';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      whichModal: "",
      userMenu: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentWillMount(){
    Modal.setAppElement('body');
  }

  openModal(whichModal) {
    return () =>{
      this.setState({ modalIsOpen: true, whichModal: whichModal });
    };
  }

  afterOpenModal() {
  }

  handleLogOut() {
    this.props.logout();
    this.closeModal();
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: false, whichModal: ""});
  }

  toggleMenu(type){
    event.preventDefault();
    return () => this.setState({
      [type]: !this.state[type]
    });
  }
  render(){

    if (this.props.currentUser){
      return (
        <header>
          <section>
          <Link to="/">
            <h1 className="title"><i className="fa fa-paw" aria-hidden="true"></i> Air Bark n Bite</h1>
          </Link>

          </section>

          <div className='header-session'>
            <h3>Welcome {this.props.currentUser.username}</h3>

            <NavMenuContainer
              formType={'user'}
              closeModal={this.closeModal}
            />
          </div>
        </header>);
      } else {
        return(
          <header>
            <Link to="/">
              <h1 className="title">Air Bark n Bite</h1>
            </Link>
            <div className='header-session'>
              <button
                className='nav-button'
                onClick={this.openModal('login')}>Log in</button>
              <button
                className='nav-button'
                onClick={this.openModal('signup')}>Sign up</button>
            </div>
            <Modal
              className='modal'
              overlayClassName='overlay'
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel={this.state.whichModal}>

              <button
                className="modal-close-button"
                onClick={this.closeModal}>x
              </button>

              <SessionFormContainer
                formType={this.state.whichModal}
                closeModal={this.closeModal}/>
            </Modal>
          </header>

        );
      }
    }
  }

export default Greeting;
