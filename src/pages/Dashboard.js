import React from 'react';
import axios from 'axios';
import TableList from '../components/TableList';
import { items } from '../components/jsonData';

const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [tables, setTables] = React.useState([]);
  // const url =
  //   'https://gist.githubusercontent.com/nanotaboada/6396437/raw/82dca67cc3b6a5ccfcf8af012664cdaa0025d999/books.json';
  const url =
    'https://johnsmilgatutorials.com/projects/react-tech-store-v2/products';
  React.useEffect(() => {
    async function getTables() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        const tempTables = await data;
        setTables(tempTables);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getTables();
  }, []);
  console.log(tables);
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <section className="author">
      <TableList tables={tables} />
    </section>
  );
};

export default Dashboard;
