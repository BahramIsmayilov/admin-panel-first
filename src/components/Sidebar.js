import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';

const Sidebar = () => {
  return (
    <section className="sidebar bg-secondary navbar-dark">
      <nav className="navbar">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <FaHome className="align-middle" />{' '}
              <span className="align-middle">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/author" className="nav-link">
              <GoPerson className="align-middle" />{' '}
              <span className="align-middle">Author</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
