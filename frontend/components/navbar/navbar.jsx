import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
  const { session, logout } = props;

  return (
    <div className="header-navbar">
      <div className="navbar-links">
        <a href="#">Boba With Friends</a>
        <div className="navbar-right-side">
          <a href="#">Boba Times</a>
          <a href="#">Hosting</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;