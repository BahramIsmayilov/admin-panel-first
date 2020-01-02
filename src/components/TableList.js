import React, { useEffect } from 'react';
import SingleRowTable from './SingleRowTable';
import { Link } from 'react-router-dom';

const TableList = ({ books }) => {
  const [allBooks, setAllBooks] = React.useState([]);
  // ######## sort table`s value  ########
  const handleNumber = () => {
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      return a.index - b.index;
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
      let x = a.author.toLowerCase();
      let y = b.author.toLowerCase();
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
      return a.price - b.price;
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
    const tempSort = books.slice(0);
    tempSort.sort((a, b) => {
      return a.publishDate - b.publishDate;
    });
    setAllBooks(tempSort);
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
    setAllBooks(books);
  }, [books]);
  return (
    <div className="table-list">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={() => handleNumber()}>
              N
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
              Publish Date
            </th>
            <th scope="col" onClick={() => handlePage()}>
              Page
            </th>

            <th scope="col" className="text-center">
              Edit
            </th>
            <th scope="col" className="text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((item, index) => {
            return <SingleRowTable key={item.id} index={index} {...item} />;
          })}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Link to="/addBook">
          <button
            type="submit"
            className="col-4 btn btn-dark mx-auto px-4 py-2 spacing"
          >
            Add New Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TableList;
