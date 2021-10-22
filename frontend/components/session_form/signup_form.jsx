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
    <div>
      <h1>Join for boba time</h1>
      <p>1000s of strangers across the world have sat together for conversations. Create an account and you'll be on your way to join the community.</p>
      <form className="signup-form" onSubmit={submitHandler}>
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
        <input type="submit" value="LET'S GET BOBA"/>
      </form>
      <button onClick={demoLogin}>Demo User</button>
      <Link to="/signin">If you've already done this before, click here to log in</Link>
    </div>
  );
};

export default SignupForm;