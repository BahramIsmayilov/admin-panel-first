/* eslint-disable no-lone-blocks */
import React from 'react';
import axios from 'axios';
import { URL } from '../../utils/URL';
import {
  successNotify,
  infoNotify,
  errorNotify,
  redNotify
} from './properties';

export const BookContext = React.createContext();

export function BookProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  // book`s parametrs
  const [title, setTitle] = React.useState('');
  const [authorId, setAuthorId] = React.useState();
  const [singleAuthetFullName, setSingleAuthetFullName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [publishDate, setPublishDate] = React.useState('');
  const [pageCount, setPageCount] = React.useState('');
  // edit book
  const [edit, setEdit] = React.useState(false);
  const [id, setId] = React.useState();
  // authors
  const [authors, setAuthors] = React.useState([]);
  const [deleteBooksAuthorId, setDeleteBooksAuthorId] = React.useState();
  // all books page`s header
  const [header, setHeader] = React.useState('');
  const [headerNoBooks, setHeaderNoBooks] = React.useState(false);

  //**** useEffect get books from data ****
  React.useEffect(() => {
    async function getBooks() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/books`);
        const data = await response.json();
        const tempBooks = await data;
        setBooks(tempBooks);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getBooks();
  }, []);

  //**** useEffect get authors from data ****
  React.useEffect(() => {
    async function getAuthors() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/authors`);
        const data = await response.json();
        const tempAuthors = await data;
        const tempSort = tempAuthors.slice(0);
        // tempSort.sort((a, b) => {
        //   let x = a.fullName.toLowerCase();
        //   let y = b.fullName.toLowerCase();
        //   return x < y ? -1 : x > y ? 1 : 0;
        // });
        setAuthors(tempSort);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAuthors();
  }, []);

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
    async function getBooks() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/books`);
        const data = await response.json();
        const tempBooks = await data;
        setBooks(tempBooks);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getBooks();
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
  // empty value inputs
  const emptyValue = () => {
    setTitle('');
    setAuthorId('');
    setCategory('');
    setPrice('');
    setLanguage('');
    setPublishDate('');
    setSingleAuthetFullName('');
    setPageCount('');
  };
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
  };
  // clear input
  const handleClearInput = () => {
    emptyValue();
    // setEdit(false);
    redNotify('Successfully Clear Input`s Value !');
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
        console.log('handle edited');
        console.log(response);
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
    const tempBooks = books.filter(book => book.id !== id);
    async function deleteBook() {
      const response = await fetch(`${URL}/books/delete/${id}`, {
        method: 'DELETE'
      });
      {
        if (response.status === 200) {
          successNotify('Successfully Deleted !');
          setBooks(tempBooks);
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
    const tempBook = books.find(book => book.id === id);
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
  };

  //**** handleAuthorAllBooks get author all books from data ****
  const handleAuthorAllBooks = id => {
    handleRefreshAuthorsName();
    async function getAuthorAllBooks() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/books/by-author/${id}`);
        const data = await response.json();
        const tempBooks = await data;
        setBooks(tempBooks);
        let tempHeader = tempBooks.map(item => tempBooks[0].author.fullName);
        setHeader(tempHeader[0]);
        setDeleteBooksAuthorId(id);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAuthorAllBooks();
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
        handleSubmit
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
