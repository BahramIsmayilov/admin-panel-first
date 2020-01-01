import React, { useEffect } from 'react';
import SingleRowTable from './SingleRowTable';
import { Link } from 'react-router-dom';

const TableList = ({ tables }) => {
  const [allBooks, setAllBooks] = React.useState([]);
  // ######## sort table`s value  ########
  const handleNumber = () => {
    const tempSort = tables.slice(0);
    tempSort.sort((a, b) => {
      return a.id - b.id;
    });
    setAllBooks(tempSort);
  };
  const handleName = () => {
    const tempSort = tables.slice(0);
    tempSort.sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setAllBooks(tempSort);
  };
  const handleAuthor = () => {
    const tempSort = tables.slice(0);
    tempSort.sort((a, b) => {
      let x = a.author.toLowerCase();
      let y = b.author.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setAllBooks(tempSort);
  };
  const handleType = () => {
    const tempSort = tables.slice(0);
    tempSort.sort((a, b) => {
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setAllBooks(tempSort);
  };
  const handlePages = () => {
    const tempSort = tables.slice(0);
    tempSort.sort((a, b) => {
      return a.pages - b.pages;
    });
    setAllBooks(tempSort);
  };
  // ######## end of sort table`s value  ########
  useEffect(() => {
    setAllBooks(tables);
  }, [tables]);
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={() => handleNumber()}>
              N
            </th>
            <th scope="col" onClick={() => handleName()}>
              Name
            </th>
            <th scope="col" onClick={() => handleAuthor()}>
              Author
            </th>
            <th scope="col" onClick={() => handleType()}>
              Type
            </th>
            <th scope="col" onClick={() => handlePages()}>
              Page
            </th>
            <th scope="col" className="text-center">
              Edit
            </th>
            <th scope="col" className="text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map(item => {
            return <SingleRowTable key={item.id} {...item} />;
          })}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Link to="/addBook">
          <button
            type="submit"
            className="col-4 btn btn-dark mx-auto px-4 py-2 spacing"
          >
            Add New Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TableList;
