import React from 'react';
import axios from 'axios';
import { URL } from '../../utils/URL';

export const BookContext = React.createContext();

// Provider Consumer useContext()
export function BookProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  // book`s parametrs
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [language, setLanguage] = React.useState('');
  const [publishDate, setPublishDate] = React.useState();
  const [pageCount, setPageCount] = React.useState('');
  // edit book
  const [edit, setEdit] = React.useState(false);
  const [id, setId] = React.useState();

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

  // book`s handle function
  const handleTitle = e => {
    setTitle(e.target.value);
  };
  const handleAuthor = e => {
    setAuthor(e.target.value);
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
  const refreshPage = () => {
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
  // handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    if (edit) {
      async function postEditBooks() {
        const response = await axios.post(
          `${URL}/books/add`,
          {
            id,
            title,
            author,
            category,
            price,
            language,
            publishDate,
            pageCount
          },
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(response);
      }
      postEditBooks();
      setEdit(false);
    } else {
      async function postBooks() {
        const response = await axios.post(
          `${URL}/books/add`,
          {
            title,
            author,
            category,
            price,
            language,
            publishDate,
            pageCount
          },
          { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(response);
      }
      postBooks();
      setBooks([...books]);
    }
    setTitle('');
    setAuthor('');
    setCategory('');
    setPrice('');
    setLanguage('');
    setPublishDate('');
    setPageCount('');
  };

  // handle edit
  const handleEdit = id => {
    const tempBook = books.find(book => book.id === id);
    const {
      title,
      author,
      category,
      price,
      language,
      publishDate,
      pageCount
    } = tempBook;
    setTitle(title);
    setAuthor(author);
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
        handleEdit,
        handleSubmit,
        handleTitle,
        handleAuthor,
        handleCategory,
        handlePrice,
        handleLanguage,
        handlePublishDate,
        handlePageCount,
        refreshPage,
        edit,
        loading,
        books,
        title,
        author,
        category,
        price,
        language,
        publishDate,
        pageCount
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
