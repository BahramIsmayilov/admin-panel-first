import React from 'react';
import BooksList from '../components/BooksList';
import Loading from '../components/Loading';
import { BookContext } from '../components/context/context';

const Books = () => {
  const { books, loading } = React.useContext(BookContext);

  if (loading) {
    return <Loading type="spokes" color="#000" />;
  }
  return (
    <section className="section books">
      <BooksList books={books} />
    </section>
  );
};

export default Books;
