/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../utils/URL';
import { successNotify, infoNotify, errorNotify } from './properties';

export const BookContext = React.createContext();

export function BookProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  // book`s parametrs
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState();
  const [singleAuthetFullName, setSingleAuthetFullName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [language, setLanguage] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [pageCount, setPageCount] = useState('');
  // edit book
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  // authors
  const [authors, setAuthors] = useState([]);
  const [deleteBooksAuthorId, setDeleteBooksAuthorId] = useState();
  // all books page`s header
  const [header, setHeader] = useState('');
  const [headerNoBooks, setHeaderNoBooks] = useState(false);
  // search
  const [searchName, setSearchName] = useState('');
  const [maxPageCount, setMaxPageCount] = useState(0);
  const [pageCountRange, setPageCountRange] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState();
  const [searchCategory, setSearchCategory] = useState('');
  // pagination
  const [selectedPage, setSelectedPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [totalPages, setTotalPages] = useState();
  const [totalBooks, setTotalBooks] = useState();
  const [onePageBooks, setOnePageBooks] = useState([]);
  const [pahingId, setPagingId] = useState(false);
  const [pahingIdCount, setPagingIdCount] = useState();
  const [selectedPageId, setSelectedPageId] = useState(0);

  // Pagination
  function handlePageClick(e) {
    if (pahingId) {
      console.log(selectedPageId, e.selected);
      handleAuthorAllBooks(pahingIdCount);
      setSelectedPageId(e.selected);
    } else {
      setSelectedPage(e.selected);
      console.log(selectedPage, e.selected);
    }
  }

  //**** handleAuthorAllBooks get author all books from data ****
  const handleAuthorAllBooks = id => {
    setPagingIdCount(id);
    setPagingId(true);
    // handleRefreshAuthorsName();
    console.log(id, selectedPageId, pageSize);

    async function getAuthorAllBooks() {
      try {
        // setLoading(true);
        const response = await fetch(
          `${URL}/books/by-author/${id}?page=${selectedPageId}&size=${pageSize}`
        );
        const data = await response.json();
        const tempBooks = await data;
        let tempHeader = tempBooks.content.map(
          item => tempBooks.content[0].author.fullName
        );
        console.log(tempBooks);
        setHeader(tempHeader[0]);
        setDeleteBooksAuthorId(id);
        setTotalPages(tempBooks.totalPages);
        setTotalBooks(tempBooks.totalElements);
        // setBooks(tempBooks.content);
        setOnePageBooks(tempBooks.content);
      } catch (error) {
        console.log(error);
      }
      // setLoading(false);
    }
    getAuthorAllBooks();
  };

  //**** useEffect get books from data ****
  // eslint-disable-next-line no-unused-expressions
  React.useEffect(() => {
    async function getBooks() {
      try {
        // setLoading(true);
        const response = await fetch(
          `${URL}/books?page=${selectedPage}&size=${pageSize}`
        );
        const data = await response.json();
        const tempBooks = await data;
        setTotalPages(tempBooks.totalPages);
        setTotalBooks(tempBooks.totalElements);
        setBooks(tempBooks.content);
        setOnePageBooks(tempBooks.content);
      } catch (error) {
        console.log(error);
      }
      // setLoading(false);
    }
    getBooks();
  }, [pageSize, selectedPage]);

  //**** useEffect get authors from data ****
  React.useEffect(() => {
    async function getAuthors() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/authors?page=&size=`);
        const data = await response.json();
        const tempAuthors = await data;
        const tempSort = tempAuthors.content;
        setAuthors(tempSort);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAuthors();
  }, []);
  //**** useEffect search form book name ****
  useEffect(() => {
    if (searchCategory === 'Choose...') {
      setSearchCategory();
    }
    if (searchName !== '') {
      setSelectedPage(0);
    }
    async function searchBooks() {
      const response = await axios.post(
        `${URL}/books/search?page=${selectedPage}&size=${pageSize}`,
        {
          title: searchName,
          maxPageCount: pageCountRange,
          priceFrom: minPrice,
          priceTo: maxPrice,
          category: searchCategory
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setOnePageBooks(response.data.content);
      setTotalPages(response.data.totalPages);
      setTotalBooks(response.data.totalElements);
    }
    searchBooks();
  }, [
    searchName,
    pageCountRange,
    minPrice,
    maxPrice,
    searchCategory,
    selectedPage,
    pageSize
  ]);

  // handleSearchTitle();
  // book`s handle function
  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const handleAuthorId = e => {
    setAuthorId(e.target.value);
  };
  const handleCategory = e => {
    setCategory(e.target.value);
  };
  const handlePrice = e => {
    setPrice(e.target.value);
  };
  const handleLanguage = e => {
    setLanguage(e.target.value);
  };
  const handlePublishDate = e => {
    setPublishDate(e.target.value);
  };
  const handlePageCount = e => {
    setPageCount(e.target.value);
  };
  // refresh function books data
  const refreshBooks = () => {
    setHeader('');
    setPagingId(false);
    async function getBooks() {
      try {
        // setLoading(true);
        const response = await fetch(
          `${URL}/books?page=${selectedPage}&size=${pageSize}`
        );
        const data = await response.json();
        const tempBooks = await data;
        setTotalPages(tempBooks.totalPages);
        setTotalBooks(tempBooks.totalElements);
        setBooks(tempBooks.content);
        setOnePageBooks(tempBooks.content);
      } catch (error) {
        console.log(error);
      }
      // setLoading(false);
    }
    getBooks();
  };
  // empty value inputs
  const emptyValue = () => {
    setTitle('');
    setAuthorId();
    setCategory('');
    setPrice('');
    setLanguage('');
    setPublishDate('');
    setSingleAuthetFullName('');
    setPageCount('');
  };
  // handle refresh add book onClick
  const handleRefreshAuthorsName = () => {
    async function getAuthors() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/authors`);
        const data = await response.json();
        const tempAuthors = await data;
        const tempSort = tempAuthors.slice(0);
        setAuthors(tempSort);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAuthors();
    emptyValue();
    setEdit(false);
    setId();
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
  };
  // clear input
  const handleClearInput = () => {
    emptyValue();
    // successNotify('Successfully Clear Input`s Value !');
  };
  const handleAdd = e => {
    e.preventDefault();
    const intAuthorId = parseInt(authorId);
    const tempAutherId = authors.find(item => item.id === intAuthorId);
    async function postBooks() {
      const response = await axios.post(
        `${URL}/books/add`,
        {
          title,
          category,
          price,
          language,
          publishDate,
          pageCount,
          author: {
            id: tempAutherId.id
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      {
        if (response.status === 200) {
          infoNotify('Successfully Added !');
          setId(response.data);
          refreshBooks();
        } else {
          errorNotify();
        }
      }
    }
    postBooks();
  };
  // handle Edit Book button
  const handleEditButton = e => {
    e.preventDefault();
    const intAuthorId = parseInt(authorId);
    const tempAutherId = authors.find(item => item.id === intAuthorId);
    if (edit || id) {
      async function postEditBooks() {
        const response = await axios.post(
          `${URL}/books/add`,
          {
            id,
            title,
            category,
            price,
            language,
            publishDate,
            pageCount,
            author: {
              id: tempAutherId.id
            }
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        {
          if (response.status === 200) {
            successNotify('Successfully Edited !');
            setId(response.data);
          } else {
            errorNotify();
          }
        }
      }
      postEditBooks();
      setEdit(true);
    } else {
      async function postBooks() {
        const response = await axios.post(
          `${URL}/books/add`,
          {
            title,
            category,
            price,
            language,
            publishDate,
            pageCount,
            author: {
              id: tempAutherId.id
            }
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        console.log('handle added');
        console.log(response);

        {
          if (response.status === 200) {
            infoNotify('Successfully Added !');
            setId(response.data);
            refreshBooks();
          } else {
            errorNotify();
          }
        }
      }
      postBooks();
    }
  };
  // handle Clear
  const handleClear = () => {
    async function clearAllBooks() {
      const response = await fetch(`${URL}/books/delete-all`, {
        method: 'DELETE'
      });
      {
        if (response.status === 200) {
          successNotify('Successfully Delete all Books !');
          setBooks([]);
        } else {
          errorNotify();
        }
      }
    }
    clearAllBooks();
  };
  // handle Delete
  const handleDelete = id => {
    const tempBook = books.filter(book => book.id !== id);
    async function deleteBook() {
      const response = await fetch(`${URL}/books/delete/${id}`, {
        method: 'DELETE'
      });
      {
        if (response.status === 200) {
          successNotify('Successfully Deleted !');
          setBooks(tempBook);
        } else {
          errorNotify();
        }
      }
    }
    const disable = document.getElementById(id);
    if (disable) {
      disable.classList.add('disabled');
      deleteBook();
      setTimeout(() => {
        disable.classList.remove('disabled');
      }, 6000);
    }
  };

  // handle Delete
  const handleDeleteBooksByAuthors = id => {
    const tempAuthorBooks = books.filter(book => book.author.id !== id);
    async function deleteBook() {
      const response = await fetch(`${URL}/books/by-author/${id}`, {
        method: 'DELETE'
      });
      {
        if (response.status === 200) {
          successNotify(`Successfully Deleted ${header}'s All Books!`);
          setBooks(tempAuthorBooks);
          setHeaderNoBooks(true);
        } else {
          errorNotify();
        }
      }
    }
    deleteBook();
  };

  // handle edit
  const handleEdit = id => {
    async function getBooks() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/books/${id}`);
        const data = await response.json();
        const tempBook = await data;
        const {
          title,
          category,
          price,
          language,
          publishDate,
          pageCount
        } = tempBook;
        const { fullName } = tempBook.author;
        const tempAuthorId = tempBook.author.id;
        setTitle(title);
        setAuthorId(tempAuthorId);
        setSingleAuthetFullName(fullName);
        setCategory(category);
        setPrice(price);
        setLanguage(language);
        setPublishDate(publishDate);
        setPageCount(pageCount);
        setEdit(true);
        setId(id);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getBooks();
  };

  return (
    <BookContext.Provider
      value={{
        handleClear,
        handleDelete,
        handleEdit,
        handleTitle,
        handleAuthorId,
        handleCategory,
        handlePrice,
        handleLanguage,
        handlePublishDate,
        handlePageCount,
        handleClearInput,
        refreshBooks,
        edit,
        loading,
        books,
        id,
        title,
        authorId,
        singleAuthetFullName,
        category,
        price,
        language,
        publishDate,
        pageCount,
        authors,
        handleAuthorAllBooks,
        handleRefreshAuthorsName,
        header,
        deleteBooksAuthorId,
        headerNoBooks,
        handleDeleteBooksByAuthors,
        handleAdd,
        handleEditButton,
        handleSubmit,
        setSearchName,
        pageCountRange,
        setPageCountRange,
        maxPageCount,
        setMinPrice,
        setMaxPrice,
        minPrice,
        maxPrice,
        setSearchCategory,
        selectedPage,
        setSelectedPage,
        pageSize,
        setPageSize,
        totalPages,
        totalBooks,
        onePageBooks,
        pahingId,
        pahingIdCount,
        handlePageClick
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
