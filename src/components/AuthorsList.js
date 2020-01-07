/* eslint-disable no-loop-func */
/* eslint-disable no-const-assign */
import React from 'react';
import SingleAuthor from './SingleAuthor';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../components/context/authorsContext';
import { BookContext } from '../components/context/context';

const AuthorsList = ({ authors }) => {
  const { handleClear } = React.useContext(AuthorContext);
  const { books } = React.useContext(BookContext);
  let newAuthors = [];

  for (let i = 0; i < authors.length; i++) {
    let count = 0;
    books.map(item => {
      if (item.author.id === authors[i].id) {
        count++;
      }
    });
    let tempAuthors = { ...authors[i], count };
    newAuthors = [...newAuthors, tempAuthors];
    count = 0;
  }

  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col-1">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Books</th>
          </tr>
        </thead>
        <tbody>
          {newAuthors.map(item => {
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
