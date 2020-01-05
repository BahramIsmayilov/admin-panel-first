import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import Authors from './pages/Authors';
import AddAuthor from './pages/AddAuthor';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/addBook">
          <AddBook />
        </Route>
        <Route path="/authors">
          <Authors />
        </Route>
        <Route path="/addAuthor">
          <AddAuthor />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
