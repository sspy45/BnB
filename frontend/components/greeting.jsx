import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form/session_form_container';


class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      whichModal: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
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
    this.setState({modalIsOpen: false, whichModal: ""});
  }


  render(){
    if (this.props.currentUser){
      return (
        <header>
          <h1>Happy Hour?</h1>
          <div className='header-session'>
            <h2>Welcome {this.props.currentUser.username}</h2>
            <button onClick={this.handleLogOut}>Logout</button>
          </div>
        </header>);
      } else {
        return(
          <header>
            <h1>Happy Hour?</h1>
            <div className='header-session'>
              <button onClick={this.openModal('login')}>Log in</button>
              <button onClick={this.openModal('signup')}>Sign up</button>
            </div>
            <Modal
              className='modal'
              overlayClassName='overlay'
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel={this.state.whichModal}>

              <SessionFormContainer formType={this.state.whichModal}/>
            </Modal>
          </header>

        );
      }
    }
  }

export default Greeting;
