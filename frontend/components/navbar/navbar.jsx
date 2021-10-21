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
  
  return (
    <div className="header-navbar">
      <div className="navbar-links">
        <a href="#">Boba With Friends</a>
        <div className="navbar-right-side">
          <a href="#">Boba Times</a>
          <a href="#">Hosting</a>
        </div>
        {loggedIn()}
      </div>
    </div>
  )
}

export default Navbar;