import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute } from '../util/route_util.jsx';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import LocationIndexContainer from './locations/location_index_container';

const App = () => (
  <div>
    <header>
      <h1>Bench Bnb</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={ SessionFormContainer } />
    <AuthRoute path="/signup" component={ SessionFormContainer } />
    <Route path="/locations" component={ LocationIndexContainer } />
  </div>
);

export default App;
