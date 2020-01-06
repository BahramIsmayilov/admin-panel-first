import React from 'react';
import { AuthorContext } from './context/authorsContext';
import { Link } from 'react-router-dom';

const SingleAuthor = ({ ...item }) => {
  const { handleEdit, handleDelete } = React.useContext(AuthorContext);
  const { id, fullName, birthDate, email, gender } = item;
  return (
    <tr className="text-center">
      <th scope="row">{id}</th>
      <td>{fullName}</td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>
        <Link
          to="/"
          // onClick={() => handleAllBooks(id)}
          type="button"
          className="btn btn-info"
        >
          All Books
        </Link>
      </td>
      <td>
        <Link
          to="/addAuthor"
          onClick={() => handleEdit(id)}
          type="button"
          className="btn btn-success"
        >
          Edit
        </Link>
      </td>
      <td>
        <Link
          to="/authors"
          onClick={() => handleDelete(id)}
          id={id}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default SingleAuthor;
