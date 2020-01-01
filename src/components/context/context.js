import React from 'react';
import { items } from '../json/jsonData';

export const BookContext = React.createContext();

// Provider Consumer useContext()
export function BookProvider({ children }) {
  const [singleEditBook, setSingleEditBook] = React.useState([]);
  const handleEdit = id => {
    const tempBook = items.find(item => id === item.id);
    setSingleEditBook(tempBook);
  };

  return (
    <BookContext.Provider value={{ handleEdit, singleEditBook }}>
      {children}
    </BookContext.Provider>
  );
}
