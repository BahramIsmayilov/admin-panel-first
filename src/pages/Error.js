import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-page">
      <h1>oops:! it`s a dead end</h1>
      <Link to="/" className="btn btn-secondary">
        back books
      </Link>
    </section>
  );
};

export default Error;
