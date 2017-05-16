import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    if (this.props.currentUser){
      return (<div>
        <h2>Welcome {this.props.currentUser.username}</h2>
        <button onClick={this.props.logout}>Logout</button>
      </div>);
    } else {
      return(
        <div>
          <ul>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      );
      }
    }
  }

export default Greeting;
