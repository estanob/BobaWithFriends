import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from '../components/navbar/navbar_container';
import Splash from './splash';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import BobaTimesContainer from './boba_times_container';

const App = () => {
  return (
    <div>
      <header>
        <NavbarContainer />
      </header>
      <Switch>
        {/* <ProtectedRoute path="/bobatimes" component={} /> */}
        
        <AuthRoute path="/signin" component={SignInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        
        <Route exact path="/boba_times" component={BobaTimesContainer} />
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
      <footer>
        <a href="https://www.linkedin.com/in/estanob/">LinkedIn</a>
        <a href="https://github.com/estanob">Github</a>
      </footer>
    </div>
  )
}

export default App;