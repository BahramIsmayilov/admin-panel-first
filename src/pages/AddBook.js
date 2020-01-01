import React from 'react';
import { types } from '../components/json/typeJsonData';
import { authors } from '../components/json/jsonAutors';

const AddBook = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  authors.sort();

  return (
    <section className="section">
      <div className="container col-12  pt-5">
        <div className="row pt-5">
          <form onSubmit={handleSubmit} className=" mx-auto col-sm-10 col-md-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <select
                id="author"
                defaultValue={'DEFAULT'}
                name="author"
                className="form-control"
              >
                <option value="DEFAULT" disabled>
                  Choose a author ...
                </option>
                {authors.map((author, index) => {
                  return (
                    <option key={index} value={authors.index}>
                      {author}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                name="type"
                defaultValue={'DEFAULT'}
                className="form-control"
              >
                <option value="DEFAULT" disabled>
                  Choose a book type ...
                </option>
                {types.map(type => {
                  return (
                    <option key={type.id} value={type.id}>
                      {type.type}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Page</label>
              <input
                name="page"
                type="number"
                className="form-control"
                id="page"
                placeholder="547"
              />
            </div>
            <div className="coltext-center">
              <button
                type="submit"
                className="col-6 btn btn-dark btn-block mx-auto px-4 py-2 spacing"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
