import React from 'react';
import { BookContext } from './context/context';
import { Link } from 'react-router-dom';

const SingleBook = ({ ...item }) => {
  const { handleEdit, handleDelete } = React.useContext(BookContext);
  const { id, title, category, price, language, publishDate, pageCount } = item;
  const { fullName } = item.author;

  return (
    <tr className="text-center">
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{fullName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{language}</td>
      <td>{publishDate}</td>
      <td>{pageCount}</td>
      <td>
        <Link
          to="/addBook"
          onClick={() => handleEdit(id)}
          type="button"
          className="btn btn-success"
        >
          Edit
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleBook;
