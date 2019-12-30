import React from 'react';
import SingleRowTable from './SingleRowTable';

const TableList = ({ tables }) => {
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
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
