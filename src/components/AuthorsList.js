/* eslint-disable array-callback-return */
import React from 'react';
import SingleAuthor from './SingleAuthor';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../components/context/authorsContext';
import { BookContext } from '../components/context/context';

const AuthorsList = ({ authors }) => {
  const { handleClear } = React.useContext(AuthorContext);
  const { books } = React.useContext(BookContext);
  const [sortAuthors, setSortAuthors] = React.useState([]);

  React.useEffect(() => {
    function joinArrays() {
      let tempnewAuthors = [];
      for (let i = 0; i < authors.length; i++) {
        let count = 0;
        books.map(item => {
          if (item.author.id === authors[i].id) {
            count++;
          }
        });
        let tempAuthors = { ...authors[i], count };
        tempnewAuthors = [...tempnewAuthors, tempAuthors];
        count = 0;
      }
      setSortAuthors(tempnewAuthors);
    }
    joinArrays();
  }, [authors, books]);

  // ######## sort table`s value  ########
  const handleNumber = () => {
    const tempSort = sortAuthors.slice(0);
    tempSort.sort((a, b) => {
      return a.id - b.id;
    });
    setSortAuthors(tempSort);
  };
  const handleName = () => {
    const tempSort = sortAuthors.slice(0);
    tempSort.sort((a, b) => {
      let x = a.fullName.toLowerCase();
      let y = b.fullName.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setSortAuthors(tempSort);
  };
  const handleBirthDate = () => {
    const tempSort = sortAuthors.slice(0);
    tempSort.sort((a, b) => {
      return a.birthDate - b.birthDate;
    });
    setSortAuthors(tempSort);
  };
  const handleGender = () => {
    const tempSort = sortAuthors.slice(0);
    tempSort.sort((a, b) => {
      let x = a.gender.toLowerCase();
      let y = b.gender.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setSortAuthors(tempSort);
  };
  const handleEmail = () => {
    const tempSort = sortAuthors.slice(0);
    tempSort.sort((a, b) => {
      let x = a.email.toLowerCase();
      let y = b.email.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setSortAuthors(tempSort);
  };
  const handleBooks = () => {
    const tempSort = sortAuthors.slice(0);
    tempSort.sort((a, b) => {
      return b.count - a.count;
    });
    setSortAuthors(tempSort);
  };
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
