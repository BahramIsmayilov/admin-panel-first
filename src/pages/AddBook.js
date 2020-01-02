import React from 'react';
import { BookContext } from '../components/context/context';
import { CategoriesContext } from '../components/context/categoriesContext';

const AddBook = () => {
  const { singleEditBook } = React.useContext(BookContext);
  const { categories } = React.useContext(CategoriesContext);
  const {
    id,
    title,
    author,
    category,
    price,
    language,
    publishDate,
    pageCount
  } = singleEditBook;

  // # sort categories
  categories.sort();

  const handleChange = e => {
    e.target.defaultValue = e.target.value;
    console.log(e.target.defaultValue);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // setNames('');
    // console.log(names);
  };

  return (
    <section className="section">
      <div className="container col-12  pt-2">
        <div className="row pt-3">
          <form onSubmit={handleSubmit} className=" mx-auto col-sm-10 col-md-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                defaultValue={title}
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Author</label>
              <input
                defaultValue={author}
                name="author"
                type="text"
                className="form-control"
                id="author"
                placeholder="Author"
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Category</label>
              <select
                id="category"
                name="category"
                defaultValue={'DEFAULT'}
                className="form-control"
              >
                {category ? (
                  <option value="DEFAULT">{category}</option>
                ) : (
                  <option value="DEFAULT" disabled>
                    Choose a book category ...
                  </option>
                )}
                {categories.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                defaultValue={price}
                name="price"
                type="text"
                className="form-control"
                id="price"
                placeholder="25 AZN"
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <input
                defaultValue={language}
                name="language"
                type="text"
                className="form-control"
                id="language"
                placeholder="Language"
              />
            </div>
            <div className="form-group">
              <label htmlFor="publishDate">Publish Date</label>
              <input
                defaultValue={publishDate}
                name="publishDate"
                type="number"
                className="form-control"
                id="publishDate"
                placeholder="2020"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pageCount">Page</label>
              <input
                defaultValue={pageCount}
                name="pageCount"
                type="number"
                className="form-control"
                id="pageCount"
                placeholder="123"
              />
            </div>
            <div className="coltext-center">
              {title ? (
                <button
                  type="submit"
                  className="col-6 btn btn-success btn-block mx-auto px-4 py-2 spacing"
                >
                  Edit Book
                </button>
              ) : (
                <button
                  type="submit"
                  className="col-6 btn btn-dark btn-block mx-auto px-4 py-2 spacing"
                >
                  Add Book
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
