import React from 'react';
import AuthorsList from '../components/AuthorsList';
import Loading from '../components/Loading';
import { AuthorContext } from '../components/context/authorsContext';

const Authors = () => {
  const { authors, loading } = React.useContext(AuthorContext);
  if (loading) {
    return <Loading type="spokes" color="#000" />;
  }
  return (
    <section className="section books pt-4">
      <h1>All Authors</h1>
      <AuthorsList authors={authors} />
    </section>
  );
};

export default Authors;
