import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from '../components/navbar/navbar_container';
import Splash from './splash';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';

const App = () => {
  return (
    <div>
      <header>
        <NavbarContainer />
      </header>
      <Switch>
        <AuthRoute path="/signin" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
      <footer>
        <a href="https://www.linkedin.com/in/estanob/">Linkedin</a>
        <a href="https://github.com/estanob">Github</a>
      </footer>
    </div>
  )
}

export default App;