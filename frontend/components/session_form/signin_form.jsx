import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SigninForm = props => {
  const [user, setUser] = useState({username: "", password: ""});
  let { login, demoLogin } = props;

  function submitHandler (e) {
    e.preventDefault()
    login(user);
  }
  
  return (
    <div className="signin-form-container">
      <div className="full-signin">
        <h1>Hello friend!</h1>
        <p>
          It's good to have you back. Sign in here and find your next boba time!
        </p>
        <form className="signin-form" onSubmit={submitHandler}>
          <input 
            type="text" 
            name="username" 
            value={user.username}
            onChange={e => setUser({...user, username: e.target.value})} 
            placeholder="Username" 
            className="signin-input" />
          <input 
            type="password" 
            name="password" 
            value={user.password}
            onChange={e => setUser({...user, password: e.target.value})} 
            placeholder="Password" 
            className="signin-input" />
          <input type="submit" value="SIGN IN"/>
        </form>
        <br />
        <Link to="/signup">If you've never signed up before, click here</Link>
        <button onClick={demoLogin}>Demo User</button>
      </div>
    </div>
  );
};

export default SigninForm;