/* eslint-disable no-lone-blocks */
import React from 'react';
import axios from 'axios';
import { URL } from '../../utils/URL';
import { successNotify } from './properties';
import { errorNotify } from './properties';

export const AuthorContext = React.createContext();

export function AuthorProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [authors, setAuthors] = React.useState([]);
  const [id, setId] = React.useState();
  const [fullName, setFullName] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [edit, setEdit] = React.useState(false);

  React.useEffect(() => {
    async function getAuthors() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/authors`);
        const data = await response.json();
        const tempAuthors = await data;
        const tempSort = tempAuthors.slice(0);
        tempSort.sort((a, b) => {
          let x = a.fullName.toLowerCase();
          let y = b.fullName.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        setAuthors(tempSort);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAuthors();
  }, []);
  // refresh function authors data
  const refreshAuthors = () => {
    async function getAuthors() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/authors`);
        const data = await response.json();
        const tempBooks = await data;
        setAuthors(tempBooks);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAuthors();
  };
  // author`s handle function
  const handleFullName = e => {
    setFullName(e.target.value);
  };
  const handleBirthDate = e => {
    setBirthDate(e.target.value);
  };
  const handleGender = e => {
    setGender(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (edit) {
      async function postEditAuthor() {
        const response = await axios.post(
          `${URL}/authors/add`,
          {
            id,
            fullName,
            birthDate,
            email,
            gender
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        {
          response.status === 200
            ? successNotify('Successfully Edited !')
            : errorNotify();
        }
      }
      postEditAuthor();
      setEdit(false);
    } else {
      async function postAuthors() {
        const response = await axios.post(
          `${URL}/authors/add`,
          {
            fullName,
            birthDate,
            email,
            gender
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        {
          if (response.status === 200) {
            successNotify('Successfully Added !');
            refreshAuthors();
          } else {
            errorNotify();
          }
        }
      }
      postAuthors();
    }
  };

  // handle Clear
  const handleClear = () => {
    async function clearAllAuthors() {
      const response = await fetch(`${URL}/authors/delete-all`, {
        method: 'DELETE'
      });
      {
        if (response.status === 200) {
          successNotify('Successfully Delete all Books !');
          setAuthors([]);
        } else {
          errorNotify();
        }
      }
    }
    clearAllAuthors();
  };
  // handle Delete
  const handleDelete = id => {
    const tempAuthor = authors.filter(author => author.id !== id);
    async function deleteAuthor() {
      const response = await fetch(`${URL}/authors/delete/${id}`, {
        method: 'DELETE'
      });
      {
        if (response.status === 200) {
          successNotify('Successfully Deleted !');
          setAuthors(tempAuthor);
        } else {
          errorNotify();
        }
      }
    }
    const disable = document.getElementById(id);
    if (disable) {
      disable.classList.add('disabled');
      deleteAuthor();
      setTimeout(() => {
        disable.classList.remove('disabled');
      }, 6000);
    }
  };
  // handle edit
  const handleEdit = id => {
    const tempAuthor = authors.find(author => author.id === id);
    const { fullName, birthDate, gender, email } = tempAuthor;
    setFullName(fullName);
    setBirthDate(birthDate);
    setGender(gender);
    setEmail(email);
    setEdit(true);
    setId(id);
  };

  return (
    <AuthorContext.Provider
      value={{
        loading,
        authors,
        id,
        fullName,
        birthDate,
        gender,
        email,
        edit,
        handleFullName,
        handleBirthDate,
        handleGender,
        handleEmail,
        handleSubmit,
        handleEdit,
        handleClear,
        handleDelete,
        refreshAuthors
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
}
