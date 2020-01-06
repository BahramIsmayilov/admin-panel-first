import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaBookMedical } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { IoMdPersonAdd } from 'react-icons/io';
import { BookContext } from '../components/context/context';
import { AuthorContext } from '../components/context/authorsContext';

const Sidebar = () => {
  const { refreshBooks, handleRefreshAuthorsName } = React.useContext(
    BookContext
  );
  const { refreshAuthors } = React.useContext(AuthorContext);
  return (
    <section className="sidebar bg-secondary navbar-dark">
      <nav className="navbar">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link to="/" onClick={() => refreshBooks()} className="nav-link">
              <FaBookOpen className="align-middle" />{' '}
              <span className="align-middle">Books</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              to="/addBook"
              onClick={() => handleRefreshAuthorsName(1)}
              className="nav-link"
            >
              <FaBookMedical className="align-middle" />{' '}
              <span className="align-middle">Add Book</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              to="/authors"
              onClick={() => refreshAuthors()}
              className="nav-link"
            >
              <GoPerson className="align-middle" />{' '}
              <span className="align-middle">Authors</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/addAuthor" className="nav-link">
              <IoMdPersonAdd className="align-middle" />{' '}
              <span className="align-middle">Add Author</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
