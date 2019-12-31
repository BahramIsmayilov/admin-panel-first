import React from 'react';
import TableList from '../components/TableList';
import { items } from '../components/jsonData';

const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [tables, setTables] = React.useState([]);

  React.useEffect(() => {
    setTables(items);
  }, []);

  // const url =
  //   'https://johnsmilgatutorials.com/projects/react-tech-store-v2/products';

  // React.useEffect(() => {
  //   async function getTables() {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       const tempTables = await data;
  //       setTables(tempTables);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   }
  //   getTables();
  // }, []);
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
