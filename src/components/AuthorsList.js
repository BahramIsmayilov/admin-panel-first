import React, { useEffect } from 'react';
import SingleAuthor from './SingleAuthor';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../components/context/authorsContext';

const AuthorsList = ({ authors }) => {
  const { handleClear } = React.useContext(AuthorContext);
  const [allAuthors, setAllAuthors] = React.useState([]);

  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">All Books</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(item => {
            return <SingleAuthor key={item.id} {...item} />;
          })}
        </tbody>
      </table>
      <div className="text-center mt-4 mb-5">
        <Link to="/addAuthor">
          <button
            type="submit"
            className="col-3 btn btn-dark mr-4 px-4 py-2 spacing"
          >
            Add New Authors
          </button>
        </Link>
        {authors.length > 0 ? (
          <button
            onClick={handleClear}
            type="submit"
            className="col-3 btn btn-danger px-4 py-2 spacing"
          >
            Clear All Author
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default AuthorsList;
