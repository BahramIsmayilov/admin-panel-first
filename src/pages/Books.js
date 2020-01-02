import React from 'react';
import TableList from '../components/TableList';
import { BookContext } from '../components/context/context';

const Books = () => {
  const { books, loading } = React.useContext(BookContext);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <section className="section books">
      <TableList books={books} />
    </section>
  );
};

export default Books;
