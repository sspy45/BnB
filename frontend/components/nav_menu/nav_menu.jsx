import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

export default class NavMenu extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      whichModal: ""
    };

    this.handleLogOut = this.handleLogOut.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  componentWillMount(){
    Modal.setAppElement('body');
  }

  handleLogOut() {
    this.props.logout();
    this.closeModal();
  }

  openModal(whichModal) {
    return () =>{
      this.setState({ modalIsOpen: true, whichModal: whichModal });
    };
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false, whichModal: ""});
  }

  render(){

    return (
      <section>
        <button onClick={this.openModal('userMenu')}>
          IMAGE HERE
        </button>

        <Modal
          className='menu'
          overlayClassName='menu-overlay'
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.state.whichModal}
        >
          <ul>
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
        </Modal>
      </section>
    );
  }
}
