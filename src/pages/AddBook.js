import React from 'react';
import { BookContext } from '../components/context/context';
import { CategoriesContext } from '../components/context/categoriesContext';

const AddBook = () => {
  const {
    title,
    authorId,
    singleAuthetFullName,
    category,
    price,
    language,
    publishDate,
    pageCount,
    handleTitle,
    handleAuthorId,
    handleCategory,
    handlePrice,
    handleLanguage,
    handlePublishDate,
    handlePageCount,
    handleSubmit,
    edit,
    authors
  } = React.useContext(BookContext);
  const { categories } = React.useContext(CategoriesContext);

  // # sort categories
  categories.sort();

  return (
    <section className="section">
      <div className="container col-12  pb-5">
        <div className="row pt-3">
          <form onSubmit={handleSubmit} className="mx-auto col-sm-10 col-md-6">
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                name="title"
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={handleTitle}
                placeholder="e.g JavaScript"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <select
                name="author"
                id="author"
                defaultValue={'DEFAULT'}
                className="form-control"
                onChange={handleAuthorId}
              >
                {authorId ? (
                  <option value="DEFAULT">{singleAuthetFullName}</option>
                ) : (
                  <option value="DEFAULT" disabled>
                    Choose a book author ...
                  </option>
                )}
                {authors.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.fullName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Category</label>
              <select
                name="category"
                id="category"
                defaultValue={'DEFAULT'}
                className="form-control"
                onChange={handleCategory}
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
                name="price"
                type="text"
                className="form-control"
                id="price"
                value={price}
                onChange={handlePrice}
                placeholder="e.g 25 AZN"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <input
                name="language"
                type="text"
                className="form-control"
                id="language"
                value={language}
                onChange={handleLanguage}
                placeholder="e.g English"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="publishDate">Publish Date</label>
              <input
                name="publishDate"
                type="date"
                className="form-control"
                id="publishDate"
                value={publishDate}
                onChange={handlePublishDate}
                placeholder="e.g 2020"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pageCount">Page</label>
              <input
                name="pageCount"
                type="number"
                className="form-control"
                id="pageCount"
                value={pageCount}
                onChange={handlePageCount}
                placeholder="e.g 123"
                required
              />
            </div>

            <div className="coltext-center mt-4">
              {edit ? (
                <button
                  type="submit"
                  className="col-6 btn btn-success btn-block mx-auto px-4 py-2 spacing"
                >
                  Edit
                </button>
              ) : (
                <button
                  type="submit"
                  className="col-6 btn btn-dark btn-block mx-auto px-4 py-2 spacing"
                >
                  Submit
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
