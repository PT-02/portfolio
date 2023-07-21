// Navbar.js
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">            
      <div className="nav-menu">
      <Link to="/" className="nav-link" activeClassName="active">
        Home
      </Link>
        <Link to="/about_page" className="nav-link" activeClassName="active">
          About
        </Link>
        <Link to="/project" className="nav-link" activeClassName="active">
          Project
        </Link>
        <Link to="/email" className="nav-link" activeClassName="active">
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
