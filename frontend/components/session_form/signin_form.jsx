import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SigninForm = props => {
  const [user, setUser] = useState({username: "", password: ""});
  let { login, signup } = props;

  const submitHandler = (e) => {
    e.preventDefault()
    login(user);
  }
  
  return (
    <div className="signin-form-container">
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
      <button>If you've never signed up before, click here</button>
      <button>Demo User</button>
    </div>
  );
};

export default SigninForm;