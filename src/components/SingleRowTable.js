import React from 'react';

const SingleRowTable = ({ ...item }) => {
  const { id, name, price, time } = item;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{time}</td>
    </tr>
  );
};

export default SingleRowTable;
