/* eslint-disable no-lone-blocks */
import React from 'react';
import axios from 'axios';
import { URL } from '../../utils/URL';
import { toast } from 'react-toastify';

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
        tempSort.sort((a, b) => {
          let x = a.fullName.toLowerCase();
          let y = b.fullName.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
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
  const refreshBooks = () => {
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
  // clear input
  const handleClearInput = () => {
    setTitle('');
    setAuthorId();
    setCategory('');
    setPrice('');
    setLanguage('');
    setPublishDate('');
    setPageCount('');
  };
  // handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    const intAuthorId = parseInt(authorId);
    const tempAutherId = authors.find(item => item.id === intAuthorId);
    if (edit) {
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
          response.status === 200
            ? toast.success('Success Edit !', {
                position: toast.POSITION.BOTTOM_RIGHT
              })
            : toast.error('Something went wrong !', {
                position: toast.POSITION.BOTTOM_RIGHT
              });
        }
      }
      postEditBooks();
      setEdit(false);
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
        {
          response.status === 200
            ? toast.success('Success Add !', {
                position: toast.POSITION.BOTTOM_RIGHT
              })
            : toast.error('Something went wrong !', {
                position: toast.POSITION.BOTTOM_RIGHT
              });
        }
      }
      postBooks();
      setBooks([...books]);
    }
  };
  // handle Clear
  const handleClear = () => {
    setBooks([]);
    async function clearAllBooks() {
      const response = await fetch(`${URL}/books/delete-all`, {
        method: 'DELETE'
      });
      {
        response.status === 200
          ? toast.success('Success Delete all books !', {
              position: toast.POSITION.BOTTOM_RIGHT
            })
          : toast.error('Something went wrong !', {
              position: toast.POSITION.BOTTOM_RIGHT
            });
      }
    }
    clearAllBooks();
  };
  // handle Delete
  const handleDelete = id => {
    const tempBooks = books.filter(book => book.id !== id);
    setBooks(tempBooks);
    async function deleteBooks() {
      const response = await fetch(`${URL}/books/delete/${id}`, {
        method: 'DELETE'
      });
      {
        response.status === 200
          ? toast.success('Success Delete !', {
              position: toast.POSITION.BOTTOM_RIGHT
            })
          : toast.error('Something went wrong !', {
              position: toast.POSITION.BOTTOM_RIGHT
            });
      }
    }
    deleteBooks();
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

  return (
    <BookContext.Provider
      value={{
        handleClear,
        handleDelete,
        handleEdit,
        handleSubmit,
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
        title,
        authorId,
        singleAuthetFullName,
        category,
        price,
        language,
        publishDate,
        pageCount,
        authors
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
