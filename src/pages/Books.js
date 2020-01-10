import React from 'react';
import BooksList from '../components/BooksList';
import Loading from '../components/Loading';
import { BookContext } from '../components/context/context';
import SearchForm from '../components/SearchForm';

const Books = () => {
  const {
    books,
    loading,
    header,
    headerNoBooks,
    setSearchName
  } = React.useContext(BookContext);
  if (loading) {
    return <Loading type="spokes" color="#000" />;
  }
  return (
    <section className="section books pt-4">
      {header ? (
        <h1>
          {header}`s{' '}
          {books.length > 1
            ? 'Books'
            : books.length === 0 && headerNoBooks
            ? 'All Books deleted'
            : 'Book'}
        </h1>
      ) : header === undefined ? (
        <h1>Not Found Any Book</h1>
      ) : books.length > 0 ? (
        <h1>All Books</h1>
      ) : (
        <h1>There Are Not Any Books</h1>
      )}
      <SearchForm setSearchName={setSearchName} />
      <BooksList books={books} />
    </section>
  );
};

export default Books;
