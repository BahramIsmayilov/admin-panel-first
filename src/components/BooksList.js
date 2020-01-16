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
    deleteBooksAuthorId
  } = React.useContext(BookContext);
  const [allBooks, setAllBooks] = React.useState([]);
  const [pageBooks, setPageBooks] = React.useState([]);

  const [selectedPage, setSelectedPage] = React.useState(0);
  let pageBooksCount = 3;
  let pageCount = Math.ceil(books.length / pageBooksCount);
  let firstBookIndex = selectedPage * pageBooksCount;
  let lastBookIndex = firstBookIndex + pageBooksCount;
  if (books.length < lastBookIndex) {
    lastBookIndex = books.length;
  }

  const handlePageClick = e => {
    let selected = e.selected;
    setSelectedPage(selected);
  };

  // ######## sort table`s value  ########
  const handleNumber = () => {
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      return a.id - b.id;
    });
    setAllBooks(tempSort);
  };
  const handleName = () => {
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setAllBooks(tempSort);
  };
  const handleAuthor = () => {
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      let x = a.author.fullName.toLowerCase();
      let y = b.author.fullName.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setAllBooks(tempSort);
  };
  const handleCategory = () => {
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      let x = a.category.toLowerCase();
      let y = b.category.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setAllBooks(tempSort);
  };
  const handlePrice = () => {
    const tempSort = books.slice(0);

    tempSort.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price);
    });
    setAllBooks(tempSort);
  };
  const handleLanguage = () => {
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      let x = a.language.toLowerCase();
      let y = b.language.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setAllBooks(tempSort);
  };
  const handlePublishDate = () => {
    //   const tempSort = books.slice(0);
    //   tempSort.sort((a, b) => {
    //     return a.publishDate - b.publishDate;
    //   });
    //   setAllBooks(tempSort);
  };
  const handlePage = () => {
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      return a.pageCount - b.pageCount;
    });
    setAllBooks(tempSort);
  };
  // ######## end of sort table`s value  ########
  useEffect(() => {
    let tempPageBooks = [];
    for (let i = firstBookIndex; i < lastBookIndex; i++) {
      tempPageBooks = [...tempPageBooks, books[i]];
    }
    setPageBooks(tempPageBooks);
    // setAllBooks(books);
  }, [books, selectedPage]);
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col" onClick={() => handleNumber()}>
              ID
            </th>
            <th scope="col" onClick={() => handleName()}>
              Name
            </th>
            <th scope="col" onClick={() => handleAuthor()}>
              Author
            </th>
            <th scope="col" onClick={() => handleCategory()}>
              Category
            </th>
            <th scope="col" onClick={() => handlePrice()}>
              Price
            </th>
            <th scope="col" onClick={() => handleLanguage()}>
              Language
            </th>
            <th scope="col" onClick={() => handlePublishDate()}>
              Publish
            </th>
            <th scope="col" onClick={() => handlePage()}>
              Page
            </th>

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
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pagination pages'}
          activeClassName={'active actives'}
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
