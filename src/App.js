import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './pages/Books';
import Author from './pages/Author';
import AddBook from './pages/AddBook';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/addBook">
          <AddBook />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
