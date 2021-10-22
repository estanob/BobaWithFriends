import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
  const { session, logout } = props;

  function loggedIn () {
    if (session) {
      return (
        <div>
          <button onClick={logout}>Log Out</button>
        </div>
      )
    }
  }

  function loggedOut () {
    if (!session) {
      return (
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }
  }
  
  return (
    <div className="header-navbar">
      <div className="navbar-links">
        <a href="#">Boba With Friends</a>
        <div className="navbar-right-side">
          <a href="#">Boba Times</a>
          <a href="#">Hosting</a>
        </div>
        {loggedIn()}
        {loggedOut()}
      </div>
    </div>
  )
}

export default Navbar;