/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import SingleAuthor from './SingleAuthor';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../components/context/authorsContext';

const AuthorsList = ({ authors }) => {
  const { handleClear } = React.useContext(AuthorContext);
  const [sortAuthors, setSortAuthors] = React.useState([]);

  // ######## sort table`s value  ########
  const handleNumber = () => {
    const tempSort = authors.slice(0);
    tempSort.sort((a, b) => {
      return a.id - b.id;
    });
    setSortAuthors(tempSort);
  };
  const handleName = () => {
    const tempSort = authors.slice(0);
    tempSort.sort((a, b) => {
      let x = a.fullName.toLowerCase();
      let y = b.fullName.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setSortAuthors(authors);
  };
  const handleBirthDate = () => {
    const tempSort = authors.slice(0);
    tempSort.sort((a, b) => {
      return a.birthDate - b.birthDate;
    });
    setSortAuthors(tempSort);
  };
  const handleGender = () => {
    const tempSort = authors.slice(0);
    tempSort.sort((a, b) => {
      let x = a.gender.toLowerCase();
      let y = b.gender.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setSortAuthors(tempSort);
  };
  const handleEmail = () => {
    const tempSort = authors.slice(0);
    tempSort.sort((a, b) => {
      let x = a.email.toLowerCase();
      let y = b.email.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setSortAuthors(tempSort);
  };
  const handleBooks = () => {
    const tempSort = authors.slice(0);
    tempSort.sort((a, b) => {
      return b.numberOfBooks - a.numberOfBooks;
    });
    setSortAuthors(tempSort);
  };
  useEffect(() => {
    setSortAuthors(authors);
  }, [authors]);
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col-1" onClick={() => handleNumber()}>
              ID
            </th>
            <th scope="col" onClick={() => handleName()}>
              Full Name
            </th>
            <th scope="col" onClick={() => handleBirthDate()}>
              Birthday
            </th>
            <th scope="col" onClick={() => handleGender()}>
              Gender
            </th>
            <th scope="col" onClick={() => handleEmail()}>
              Email
            </th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col" onClick={() => handleBooks()}>
              Books
            </th>
          </tr>
        </thead>
        <tbody>
          {sortAuthors.map(item => {
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
