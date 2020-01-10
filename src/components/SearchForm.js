import React from 'react';

const SearchForm = ({ setSearchName }) => {
  const searchValue = React.useRef('');
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSearchSubmit = e => {
    e.preventDefault();
  };
  const searchBookName = () => {
    setSearchName(searchValue.current.value);
  };
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        className="col-10 col-lg-4 search-title"
        type="text"
        placeholder="Search Book Name"
        name="name"
        onChange={searchBookName}
        ref={searchValue}
      />
    </form>
  );
};

export default SearchForm;
