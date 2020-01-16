import React, { useEffect } from 'react';
import SingleBook from './SingleBook';
import { Link } from 'react-router-dom';
import { BookContext } from './context/context';
import ReactPaginate from 'react-paginate';

const BooksList = ({ books }) => {
  const {
    handleClear,
    handleDeleteBooksByAuthors,
    header,
    deleteBooksAuthorId,
    selectedPage,
    firstBookIndex,
    lastBookIndex,
    handlePageClick,
    pageCounts
  } = React.useContext(BookContext);
  const [pageBooks, setPageBooks] = React.useState([]);

  useEffect(() => {
    let tempPageBooks = [];
    for (let i = firstBookIndex; i < lastBookIndex; i++) {
      tempPageBooks = [...tempPageBooks, books[i]];
    }
    setPageBooks(tempPageBooks);
  }, [books, selectedPage]);
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col" on>
              ID
            </th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Language</th>
            <th scope="col">Publish</th>
            <th scope="col">Page</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {pageBooks.map(item => {
            return <SingleBook key={item.id} {...item} />;
          })}
        </tbody>
      </table>
      <div className="text-center mt-4 mb-5">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCounts}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pagination pages'}
          activeClassName={'active actives'}
          pageClassName={'pagination-count'}
          previousClassName={'previousClassName'}
          nextClassName={'nextClassName'}
        />
        <Link to="/addBook">
          <button
            type="submit"
            className="col-3 col-md-4 col-lg-3 col-md-4 btn btn-dark mr-4 px-4 py-2 spacing"
          >
            Add New Book
          </button>
        </Link>
        {books.length > 0 ? (
          <button
            onClick={
              header
                ? () => handleDeleteBooksByAuthors(deleteBooksAuthorId)
                : handleClear
            }
            type="submit"
            className="col-3 col-md-4 col-lg-3 btn btn-danger px-4 py-2 spacing"
          >
            Clear All Books
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default BooksList;
