import React from 'react';
import { URL } from '../../utils/URL';

export const BookContext = React.createContext();

// Provider Consumer useContext()
export function BookProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  const [singleEditBook, setSingleEditBook] = React.useState([]);

  // get books from data
  React.useEffect(() => {
    async function getTables() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        const tempTables = await data;
        setBooks(tempTables);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getTables();
  }, []);

  const handleEdit = id => {
    const tempBook = books.find(book => id === book.id);
    setSingleEditBook(tempBook);
  };

  return (
    <BookContext.Provider
      value={{ handleEdit, singleEditBook, loading, books }}
    >
      {children}
    </BookContext.Provider>
  );
}
