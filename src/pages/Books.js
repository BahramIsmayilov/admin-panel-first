import React from 'react';
import axios from 'axios';
import TableList from '../components/TableList';
import URL from '../utils/URL';
// import { items } from '../components/json/jsonData';

const Books = () => {
  const [loading, setLoading] = React.useState(false);
  const [books, setBooks] = React.useState([]);

  // React.useEffect(() => {
  //   setTables(items);
  // }, []);

  // React.useEffect(() => {
  //   setLoading(true);
  //   axios.get(URL).then(response => {
  //     console.log(response.data);
  //     setLoading(false);
  //   });

  //   return () => {};
  // }, []);
  // console.log(products);
  React.useEffect(() => {
    async function getTables() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        console.log(response);

        const data = await response.json();
        const tempTables = await data;
        console.log(tempTables);

        setBooks(tempTables);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getTables();
  }, []);
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <section className="section books">
      <TableList books={books} />
    </section>
  );
};

export default Books;
