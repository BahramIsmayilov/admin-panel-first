import React from 'react';

const SingleRowTable = ({ ...item }) => {
  const { id, title, price, created_at: time } = item;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{price}</td>
      <td>{time}</td>
    </tr>
  );
};

export default SingleRowTable;
