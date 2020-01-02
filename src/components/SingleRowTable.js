import React from 'react';
import { BookContext } from './context/context';
import { Link } from 'react-router-dom';

const SingleRowTable = ({ index, ...item }) => {
  const { handleEdit } = React.useContext(BookContext);
  const {
    id,
    title,
    author,
    category,
    price,
    language,
    publishDate,
    pageCount
  } = item;

  return (
    <tr>
      <th scope="row">{`${index + 1}`}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{language}</td>
      <td>{publishDate}</td>
      <td>{pageCount}</td>
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
