import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SearchContainer from './locations/search_container';
import HomeContainer from './home/home_container';
import UserContainer from './user/user_container';
import LocationDetailsContainer from './locations/location_details_container';

const App = () => (
  <div className="app-container">
    <GreetingContainer />
    <AuthRoute path="/login" component={ SessionFormContainer } />
    <AuthRoute path="/signup" component={ SessionFormContainer } />
    <Switch>
      <ProtectedRoute path="/user" component={ UserContainer } />
      <Route exact path="/search" component={ SearchContainer } />
      <Route path="/location/:id" component={ LocationDetailsContainer} />
      <Route path="/" component={ HomeContainer } />
    </Switch>


  </div>
);

export default App;
