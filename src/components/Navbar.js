import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            <h4>Book Admin Panel</h4>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
