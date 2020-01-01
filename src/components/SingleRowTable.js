import React from 'react';

const SingleRowTable = ({ ...item }) => {
  const { id, name, author, type, pages } = item;
  return (
    <tr>
      <th scope="row">{`${id + 1}`}</th>
      <td>{name}</td>
      <td>{author}</td>
      <td>{type}</td>
      <td>{pages}</td>
    </tr>
  );
};

export default SingleRowTable;
