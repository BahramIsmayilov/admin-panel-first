import React from 'react';
import { BookContext } from './context/context';
import { CategoriesContext } from './context/categoriesContext';

const SearchForm = () => {
  const {
    setMinPrice,
    setMaxPrice,
    minPrice,
    maxPrice,
    setSearchName,
    maxPageCount,
    pageCountRange,
    setPageCountRange,
    setSearchCategory
  } = React.useContext(BookContext);
  const { categories } = React.useContext(CategoriesContext);
  console.log(minPrice, maxPrice, maxPageCount, pageCountRange);

  const handleSearchSubmit = e => {
    e.preventDefault();
  };

  // search Name
  const searchNameValue = React.useRef('');
  React.useEffect(() => {
    searchNameValue.current.focus();
  }, []);
  const searchBookName = () => {
    setSearchName(searchNameValue.current.value);
  };
  // search Category
  categories.sort();
  const searchCategoryValue = React.useRef('');
  React.useEffect(() => {
    searchCategoryValue.current.focus();
  }, []);
  const searchBookCategory = () => {
    setSearchCategory(searchCategoryValue.current.value);
  };
  // search min price
  const searchMinPriceValue = React.useRef();
  React.useEffect(() => {
    searchMinPriceValue.current.focus();
  }, []);
  const searchMinPrice = () => {
    setMinPrice(searchMinPriceValue.current.value);
  };
  // search max price
  const searchMaxPriceValue = React.useRef();
  React.useEffect(() => {
    searchMaxPriceValue.current.focus();
  }, []);
  const searchMaxPrice = () => {
    setMaxPrice(searchMaxPriceValue.current.value);
  };
  // search max page count
  const searchMaxPageValue = React.useRef();
  React.useEffect(() => {
    searchMaxPageValue.current.focus();
  }, []);
  const searchMaxPageCount = () => {
    setPageCountRange(searchMaxPageValue.current.value);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <form onSubmit={handleSearchSubmit} className="search-form">
          {/*  book name */}

          <div className="form-group">
            <label htmlFor="type">Book Name</label>
            <input
              className="form-controls search-title"
              id="name"
              type="text"
              placeholder=""
              name="name"
              onChange={searchBookName}
              ref={searchNameValue}
            />
          </div>
          {/* end of  book name */}
          {/*  book category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="search-title .select"
              onChange={searchBookCategory}
              ref={searchCategoryValue}
            >
              <option value="" selected>
                Choose...
              </option>
              {categories.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* end of  book category */}
          {/*  book price */}
          <div className="form-group">
            <label htmlFor="size">Price</label>
            <div className="size-inputs">
              <input
                type="number"
                name="min"
                value={minPrice}
                onChange={searchMinPrice}
                ref={searchMinPriceValue}
                className="size-input search-title"
              />
              <input
                type="number"
                name="max"
                value={maxPrice}
                onChange={searchMaxPrice}
                ref={searchMaxPriceValue}
                className="size-input search-title"
              />
            </div>
          </div>
          {/* end of search book price */}
          {/* Max Page Count */}
          <div className="form-group mt-2">
            <label htmlFor="count">Page: {pageCountRange}</label>
            <input
              className="form-control "
              type="range"
              name="count"
              id="count"
              step="1"
              min={0}
              value={pageCountRange}
              max={maxPageCount}
              onChange={searchMaxPageCount}
              ref={searchMaxPageValue}
            />
          </div>
          {/* end of Max Page Count*/}
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
