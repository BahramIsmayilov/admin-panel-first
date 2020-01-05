import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BookProvider } from './components/context/context';
import { CategoriesProvider } from './components/context/categoriesContext';
// import { AuthorProvider } from './components/context/authorsContext';

ReactDOM.render(
  // <AuthorProvider>
  <BookProvider>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </BookProvider>,
  // </AuthorProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
