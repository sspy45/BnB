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
          <title>Bnb</title>
          <h2>Welcome {this.props.currentUser.username}</h2>
          <button onClick={this.handleLogOut}>Logout</button>
        </header>);
      } else {
        return(
          <section>
          <header>
            <title>Bnb</title>
            <button onClick={this.openModal('login')}>Log in</button>
            <button onClick={this.openModal('signup')}>Sign up</button>

            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal">

              <h1>MODAL IS HERE</h1>
              <SessionFormContainer formType={this.state.whichModal}/>
            </Modal>

          </header>
          </section>

        );
      }
    }
  }

export default Greeting;
