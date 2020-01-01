import React from 'react';
import SingleRowTable from './SingleRowTable';
import { Link } from 'react-router-dom';

const TableList = ({ tables }) => {
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">N</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Type</th>
            <th scope="col">Page</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(item => {
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
