import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = props => {
  const [user, setUser] = useState({username: "", password: ""});
  let { signup, demoLogin, clearErrors } = props;

  function submitHandler (e) {
    e.preventDefault();
    signup(user)
  }
  
  return (
    <div className="signin-form-container">
      <div className="full-signin">
        <h1>Join for boba time</h1>
        <p>1000s of strangers across the world have sat together for conversations. Create an account and you'll be on your way to join the community.</p>
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
            placeholder="Password (at least 6 characters you won't forget)" 
            className="signin-input" />
          <input className="signin-button" type="submit" value="LET'S GET BOBA"/>
        </form>
        <Link to="/signin" className="signup-link">If you've already done this before, click here to log in</Link>
        <button onClick={demoLogin} className="signin-button">Demo User</button>
      </div>
    </div>
  );
};

export default SignupForm;