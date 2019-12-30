import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Active
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Link
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
