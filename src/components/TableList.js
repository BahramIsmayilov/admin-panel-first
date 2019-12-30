import React from 'react';
import SingleRowTable from './SingleRowTable';

const TableList = ({ tables }) => {
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">N</th>
            <th scope="col">Name</th>
            <th scope="col">price</th>
            <th scope="col">time</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(item => {
            return <SingleRowTable key={item.id} {...item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
