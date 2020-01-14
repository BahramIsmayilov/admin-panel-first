import React from 'react';
import { AuthorContext } from '../components/context/authorsContext';

const AddAuthor = () => {
  const {
    id,
    fullName,
    birthDate,
    email,
    edit,
    gender,
    handleFullName,
    handleBirthDate,
    handleGender,
    handleEmail,
    handleSubmit,
    handleClearInput,
    handleEditAuthor,
    handleAddAuthor
  } = React.useContext(AuthorContext);

  return (
    <div className="section">
      <div className="container col-12  pb-5">
        <h1 className=" text-center mt-5 header  col-sm-10 col-md-10 col-lg-7 mx-auto">
          {edit || id ? 'Edit Author or Add New Author' : 'Add New Author'}
        </h1>
        <div className="row pt-5">
          <form
            onSubmit={handleSubmit}
            className="mx-auto col-sm-10 col-md-10 col-lg-7 mt-4"
          >
            {id ? (
              <div className="form-group mb-4">
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
            ) : null}
            <div className="form-row mb-md-3">
              <div className="form-group col-md-6 mb-4">
                <label htmlFor="fullName" className="text-left mb-2">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  className="form-control text-capitalize"
                  id="fullName"
                  value={fullName}
                  onChange={handleFullName}
                  placeholder="e.g Full Name"
                  required
                />
              </div>
              <div className="form-group col-md-6 mb-4">
                <label htmlFor="birthDate" className="text-left mb-2">
                  Birthday
                </label>
                <input
                  name="birthDate"
                  type="date"
                  className="form-control"
                  id="birthDate"
                  value={birthDate}
                  onChange={handleBirthDate}
                  placeholder="e.g 10/21/1960"
                  required
                />
              </div>
            </div>
            <div className="form-row mb-md-3">
              <div className="form-group col-md-6 mb-4">
                <label htmlFor="email" className="text-left mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="e.g example@gmail.com"
                  required
                />
              </div>

              <div className="form-group  col-md-6">
                <label className="d-block text-left mb-2">Gender</label>
                <div className="radio-button">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      onChange={handleGender}
                      checked={gender === 'Male' ? true : false}
                    />
                    <label
                      className="form-check-label font-weight-normal m-0"
                      htmlFor="male"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      onChange={handleGender}
                      checked={gender === 'Female' ? true : false}
                    />
                    <label
                      className="form-check-label font-weight-normal m-0"
                      htmlFor="female"
                    >
                      Female
                    </label>
                  </div>
                </div>
                <div />
              </div>
            </div>
            {fullName && birthDate && email && gender ? null : (
              <p className="text-danger small-spacing">
                Please Fill Out All Form Fields
              </p>
            )}
            <div className="coltext-center  button-group mt-4">
              {id ? (
                fullName && birthDate && email && gender ? (
                  <button
                    onClick={handleEditAuthor}
                    type="submit"
                    className="col-md-6 col-lg-6 btn btn-success mx-auto mb-sm-3 mb-md-0 px-4 py-2 spacing border border-white"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={handleEditAuthor}
                    type="submit"
                    className="col-md-6 col-lg-6 btn btn-success mx-auto mb-sm-3 mb-md-0 px-4 py-2 spacing border border-white"
                    disabled
                  >
                    Save
                  </button>
                )
              ) : null}
              {fullName && birthDate && email && gender ? (
                <button
                  onClick={handleAddAuthor}
                  type="submit"
                  className="col-md-6 col-lg-6 btn btn-primary py-2 small-spacing border border-white"
                >
                  Add New Author
                </button>
              ) : (
                <button
                  onClick={handleAddAuthor}
                  type="submit"
                  className="col-md-6 col-lg-6 btn btn-primary py-2 small-spacing border border-white"
                  disabled
                >
                  Add New Author
                </button>
              )}

              <button
                onClick={handleClearInput}
                type="button"
                className={`col-md-6 col-lg-6 mt-sm-3 ${
                  id ? 'mt-md-4' : 'mt-md-0'
                } btn btn-danger px-4 py-2 spacing border border-white`}
              >
                Clear input
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAuthor;
