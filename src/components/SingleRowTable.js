import React from 'react';
import { BookContext } from './context/context';
import { Link } from 'react-router-dom';

const SingleRowTable = ({ ...item }) => {
  const { handleEdit } = React.useContext(BookContext);
  const { id, name, author, type, pages } = item;

  return (
    <tr>
      <th scope="row">{`${id + 1}`}</th>
      <td>{name}</td>
      <td>{author}</td>
      <td>{type}</td>
      <td>{pages}</td>
      <td className="text-center">
        <Link
          to="/addBook"
          onClick={() => handleEdit(id)}
          type="button"
          className="btn btn-success"
        >
          Edit
        </Link>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleRowTable;
