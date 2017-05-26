import React from 'react';
import Footer from './footer';
import { Provider } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SearchContainer from './locations/search_container';
import HomeContainer from './home/home_container';
import UserContainer from './user/user_container';
import LocationDetailsContainer from './locations/location_details/location_details_container';

class App extends React.Component{

  componentWillReceiveProps(nextProps){
    if(this.props.location.pathname !== nextProps.location.pathname){
      window.scrollTo(0,0);
    }
  }
  render(){
    return(
      <div className="app-container">
        <GreetingContainer />
        <AuthRoute path="/login" component={ SessionFormContainer } />
        <AuthRoute path="/signup" component={ SessionFormContainer } />
        <Switch>
          <ProtectedRoute path="/user" component={ UserContainer } />
          <Route path="/search/:query" component={ SearchContainer } />
          <Route path="/location/:id" component={ LocationDetailsContainer} />
          <Route path="/" component={ HomeContainer } />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
