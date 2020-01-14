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
    authors,
    handleSubmit
  } = React.useContext(BookContext);
  const { categories } = React.useContext(CategoriesContext);

  // # sort categories
  categories.sort();
  return (
    <section className="section">
      <div className="container col-12  pb-5 ">
        <h1 className=" text-center mt-3 header">
          {edit || id ? 'Edit Book or Add New Book' : 'Add New Book'}
        </h1>
        <div className="row pt-5">
          <form
            onSubmit={handleSubmit}
            className="mx-auto col-sm-10 col-md-10 col-lg-8"
          >
            {edit || id ? (
              <div className="form-row mb-md-3">
                <div className="form-group col-md-6">
                  <label htmlFor="title" className="text-left mb-2">
                    ID
                  </label>
                  <input
                    name="id"
                    disabled
                    className="form-control"
                    id="id"
                    value={id}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="title" className="text-left mb-2">
                    Name
                  </label>
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={handleTitle}
                    placeholder="e.g JavaScript"
                  />
                </div>
              </div>
            ) : (
              <div className="form-group  mb-md-4">
                <label htmlFor="title" className="text-left mb-2">
                  Name
                </label>
                <input
                  name="title"
                  type="text"
                  className="form-control text-capitalize"
                  id="title"
                  value={title}
                  onChange={handleTitle}
                  placeholder="e.g JavaScript"
                />
              </div>
            )}
            <div className="form-row mb-md-3">
              <div className="form-group  col-md-6">
                <label htmlFor="author" className="text-left mb-2">
                  Author
                </label>
                <select
                  type="text"
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
                <label htmlFor="type" className="text-left mb-2">
                  Category
                </label>
                <select
                  type="text"
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
                <label htmlFor="price" className="text-left mb-2">
                  Price
                </label>
                <input
                  name="price"
                  type="text"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={handlePrice}
                  placeholder="e.g 25 AZN"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="language" className="text-left mb-2">
                  Language
                </label>
                <input
                  name="language"
                  type="text"
                  className="form-control text-capitalize"
                  id="language"
                  value={language}
                  onChange={handleLanguage}
                  placeholder="e.g English"
                />
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="form-group col-md-6">
                <label htmlFor="publishDate" className="text-left mb-2">
                  Publish Date
                </label>
                <input
                  name="publishDate"
                  type="date"
                  className="form-control"
                  id="publishDate"
                  value={publishDate}
                  onChange={handlePublishDate}
                  placeholder="e.g 02/16/2019"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="pageCount" className="text-left mb-2">
                  Page
                </label>
                <input
                  name="pageCount"
                  type="number"
                  className="form-control"
                  id="pageCount"
                  value={pageCount}
                  onChange={handlePageCount}
                  min="1"
                  placeholder="e.g 123"
                />
              </div>
            </div>
            {title &&
            handleAuthorId &&
            category &&
            price &&
            language &&
            publishDate &&
            pageCount ? null : (
              <p className="text-danger small-spacing">
                Please Fill Out All Form Fields
              </p>
            )}

            <div className="coltext-center button-group mt-4">
              {id ? (
                title &&
                handleAuthorId &&
                category &&
                price &&
                language &&
                publishDate &&
                pageCount ? (
                  <button
                    onClick={handleEditButton}
                    type="submit"
                    className="col-md-6 col-lg-4 btn btn-success spacing mx-auto py-2 border border-white editButtonClass"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={handleEditButton}
                    type="submit"
                    className="col-md-6 col-lg-4 btn btn-success spacing mx-auto py-2 border border-white editButtonClass"
                    disabled
                  >
                    Save
                  </button>
                )
              ) : null}
              {title &&
              handleAuthorId &&
              category &&
              price &&
              language &&
              publishDate &&
              pageCount ? (
                <button
                  onClick={handleAdd}
                  type="submit"
                  className={`${
                    id ? 'col-md-6 col-lg-4' : 'col-md-8 col-lg-6'
                  } btn btn-primary py-2 small-spacing mt-sm-3 mt-md-0 border border-white`}
                >
                  Add New Book
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  type="submit"
                  className={`${
                    id ? 'col-md-6 col-lg-4' : 'col-md-8 col-lg-6'
                  } btn btn-primary py-2 small-spacing mt-sm-3 mt-md-0 border border-white`}
                  disabled
                >
                  Add New Book
                </button>
              )}

              <button
                onClick={() => handleClearInput()}
                type="submit"
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
