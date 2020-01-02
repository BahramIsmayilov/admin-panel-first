import React, { useEffect } from 'react';
import { categoriesUrl } from '../../utils/URL';

export const CategoriesContext = React.createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(categoriesUrl);
        const data = await response.json();
        const tempCategories = await data;
        setCategories(tempCategories);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
    return () => {};
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
