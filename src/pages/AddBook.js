import React from 'react';
import { BookContext } from '../components/context/context';
import { CategoriesContext } from '../components/context/categoriesContext';

const AddBook = () => {
  const {
    id,
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
    handleAdd,
    handleEditButton,
    handleClearInput,
    edit,
    authors
  } = React.useContext(BookContext);
  const { categories } = React.useContext(CategoriesContext);
  console.log(id);

  // # sort categories
  categories.sort();
  return (
    <section className="section">
      <div className="container col-12  pb-5">
        <div className="row pt-5">
          <form className="mx-auto col-sm-10 col-md-10 col-lg-8">
            {edit ? (
              <div className="form-row mb-md-3">
                <div className="form-group col-md-6">
                  <label htmlFor="title">ID</label>
                  <input
                    name="id"
                    disabled
                    className="form-control"
                    id="id"
                    value={id}
                  />
                </div>
                <div className="form-group col-md-6">
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
              </div>
            ) : (
              <div className="form-group mb-md-4">
                <label htmlFor="title">Name</label>
                <input
                  name="title"
                  type="text"
                  className="form-control text-capitalize"
                  id="title"
                  value={title}
                  onChange={handleTitle}
                  placeholder="e.g JavaScript"
                  required
                />
              </div>
            )}
            <div className="form-row mb-md-3">
              <div className="form-group col-md-6">
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
              <div className="form-group col-md-6">
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
            </div>
            <div className="form-row mb-md-3">
              <div className="form-group col-md-6">
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
              <div className="form-group col-md-6">
                <label htmlFor="language">Language</label>
                <input
                  name="language"
                  type="text"
                  className="form-control text-capitalize"
                  id="language"
                  value={language}
                  onChange={handleLanguage}
                  placeholder="e.g English"
                  required
                />
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="form-group col-md-6">
                <label htmlFor="publishDate">Publish Date</label>
                <input
                  name="publishDate"
                  type="date"
                  className="form-control"
                  id="publishDate"
                  value={publishDate}
                  onChange={handlePublishDate}
                  placeholder="e.g 02/16/2019"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="pageCount">Page</label>
                <input
                  name="pageCount"
                  type="number"
                  className="form-control"
                  id="pageCount"
                  value={pageCount}
                  onChange={handlePageCount}
                  min="1"
                  placeholder="e.g 123"
                  required
                />
              </div>
            </div>
            <div className="coltext-center button-group mt-4">
              {id ? (
                <button
                  onClick={handleEditButton}
                  className="col-md-6 col-lg-4 btn btn-success spacing mx-auto py-2 border border-white editButtonClass"
                >
                  Save
                </button>
              ) : null}
              <button
                onClick={handleAdd}
                className={`${
                  id ? 'col-md-6 col-lg-4' : 'col-md-8 col-lg-6'
                } btn btn-primary py-2 small-spacing mt-sm-3 mt-md-0 border border-white`}
              >
                Add New Book
              </button>
              <button
                onClick={() => handleClearInput()}
                type="button"
                className={`${
                  id ? 'col-lg-4' : 'col-lg-6'
                } col-md-8 btn btn-danger py-2 spacing mt-sm-3 mt-md-4 mt-lg-0 border border-white`}
              >
                Clear input
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
