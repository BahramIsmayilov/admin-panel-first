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
    handleClearInput
  } = React.useContext(AuthorContext);

  return (
    <div className="section">
      <div className="container col-12  pb-5">
        <div className="row pt-5">
          <form
            onSubmit={handleSubmit}
            className="mx-auto col-sm-10 col-md-10 col-lg-6"
          >
            {edit ? (
              <div className="form-group mb-4">
                <label htmlFor="title">ID</label>
                <input
                  name="id"
                  disabled
                  className="form-control"
                  id="id"
                  value={id}
                />
              </div>
            ) : null}
            <div className="form-group mb-4">
              <label htmlFor="fullName">Full Name</label>
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
            <div className="form-group mb-4">
              <label htmlFor="birthDate">Birthday</label>
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
            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
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

            <label>Gender</label>
            <div className="form-group mb-4 radio-button">
              <div></div>
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
                <label className="form-check-label" htmlFor="male">
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
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className="coltext-center mt-5">
              {edit ? (
                <button
                  type="submit"
                  className="col-md-6 col-lg-5 btn btn-success mx-auto px-4 py-2 spacing"
                >
                  Edit
                </button>
              ) : (
                <button
                  type="submit"
                  className="col-md-6 col-lg-5 btn btn-dark px-4 py-2 spacing"
                >
                  Submit
                </button>
              )}
              <button
                onClick={() => handleClearInput()}
                type="button"
                className="col-md-6 col-lg-5 mt-sm-3 mt-md-0 float-right btn btn-danger px-4 py-2 spacing"
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
