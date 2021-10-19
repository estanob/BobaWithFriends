import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  )
}

export default App;