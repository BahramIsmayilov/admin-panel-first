import React from 'react';
import { BookContext } from './context/context';
import { CategoriesContext } from './context/categoriesContext';

const SearchForm = () => {
  const {
    setMinPrice,
    setMaxPrice,
    setSearchName,
    setPageCountRange,
    setSearchCategory,
    setSelectedPage
  } = React.useContext(BookContext);
  const { categories } = React.useContext(CategoriesContext);

  const handleSearchSubmit = e => {
    e.preventDefault();
  };

  // if (
  //   searchName !== '' &&
  //   pageCountRange !== undefined &&
  //   minPrice > 0 &&
  //   maxPrice !== undefined &&
  //   searchCategory !== 'Choose...'
  // ) {
  //   setSelectedPage(0);
  // }

  // search Name
  const searchNameValue = React.useRef('');
  React.useEffect(() => {
    searchNameValue.current.focus();
  }, []);
  const searchBookName = () => {
    let oldValue = '';
    if (oldValue !== searchNameValue.current.value) {
      setSelectedPage(0);
      oldValue = searchNameValue.current.value;
    }
    setSearchName(searchNameValue.current.value);
  };
  // search Category
  categories.sort();
  const searchCategoryValue = React.useRef('');
  React.useEffect(() => {
    searchCategoryValue.current.focus();
  }, []);
  const searchBookCategory = () => {
    let oldValue = '';
    if (oldValue !== searchCategoryValue.current.value) {
      setSelectedPage(0);
      oldValue = searchCategoryValue.current.value;
    }
    setSearchCategory(searchCategoryValue.current.value);
  };
  // search min price
  const searchMinPriceValue = React.useRef();
  React.useEffect(() => {
    searchMinPriceValue.current.focus();
  }, []);
  const searchMinPrice = () => {
    let oldValue = '';
    if (oldValue !== searchMinPriceValue.current.value) {
      setSelectedPage(0);
      oldValue = searchMinPriceValue.current.value;
    }
    setMinPrice(searchMinPriceValue.current.value);
  };
  // search max price
  const searchMaxPriceValue = React.useRef();
  React.useEffect(() => {
    searchMaxPriceValue.current.focus();
  }, []);
  const searchMaxPrice = () => {
    let oldValue = '';
    if (oldValue !== searchMaxPriceValue.current.value) {
      setSelectedPage(0);
      oldValue = searchMaxPriceValue.current.value;
    }
    setMaxPrice(searchMaxPriceValue.current.value);
  };
  // search max page count
  const searchMaxPageValue = React.useRef();
  React.useEffect(() => {
    searchMaxPageValue.current.focus();
  }, []);
  const searchMaxPageCount = () => {
    let oldValue = '';
    if (oldValue !== searchMaxPageValue.current.value) {
      setSelectedPage(0);
      oldValue = searchMaxPageValue.current.value;
    }
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
                placeholder="min"
                onChange={searchMinPrice}
                ref={searchMinPriceValue}
                className="size-input search-title"
              />
              <input
                type="number"
                name="max"
                placeholder="max"
                onChange={searchMaxPrice}
                ref={searchMaxPriceValue}
                className="size-input search-title"
              />
            </div>
          </div>
          {/* end of search book price */}
          {/* Page Count */}
          <div className="form-group">
            <label htmlFor="size">Max Page</label>
            <div className="size-inputs">
              <input
                type="number"
                name="count"
                id="count"
                onChange={searchMaxPageCount}
                ref={searchMaxPageValue}
                className="size-input search-title"
              />
            </div>
          </div>
          {/* end of Max Page Count*/}
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
