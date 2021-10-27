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
        <Route exact path="/" component={Splash} />
      </Switch>
      <footer>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/estanob/">LinkedIn</a>
          <a href="https://github.com/estanob">Github</a>
        </div>
        <div className="footer-info">
          <p>Tea With Strangers is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way. <br /> We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.</p>
        </div>
      </footer>
    </div>
  )
}

export default App;