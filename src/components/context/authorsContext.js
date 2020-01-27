/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../../utils/URL';
import { successNotify, infoNotify } from './properties';
import { errorNotify } from './properties';

export const AuthorContext = React.createContext();

export function AuthorProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [id, setId] = useState();
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [edit, setEdit] = useState(false);
  // pagination
  const [selectedPage, setSelectedPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [totalPages, setTotalPages] = useState();
  const [totalAuthors, setTotalAuthors] = useState();

  React.useEffect(() => {
    async function getAuthors() {
      try {
        // setLoading(true);
        const response = await fetch(
          `${URL}/authors?page=${selectedPage}&size=${pageSize}`
        );
        const data = await response.json();
        const tempAuthors = await data;
        setAuthors(tempAuthors.content);
        setTotalPages(tempAuthors.totalPages);
        setTotalAuthors(tempAuthors.totalElements);
      } catch (error) {
        console.log(error);
      }
      // setLoading(false);
    }
    getAuthors();
  }, [selectedPage, pageSize]);
  // refresh function authors data
  const refreshAuthors = () => {
    async function getAuthors() {
      try {
        // setLoading(true);
        const response = await fetch(
          `${URL}/authors?page=${selectedPage}&size=${pageSize}`
        );
        const data = await response.json();
        const tempAuthors = await data;
        setAuthors(tempAuthors.content);
        setTotalPages(tempAuthors.totalPages);
        setTotalAuthors(tempAuthors.totalElements);
      } catch (error) {
        console.log(error);
      }
      // setLoading(false);
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
  // handle edit author
  const handleEditAuthor = e => {
    e.preventDefault();
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
      setEdit(true);
      {
        response.status === 200
          ? successNotify('Successfully Edited !')
          : errorNotify();
      }
    }
    postEditAuthor();
  };
  // handle Add author
  const handleAddAuthor = e => {
    e.preventDefault();
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
      setId(response.data);
      setEdit(true);
      {
        if (response.status === 200) {
          infoNotify('Successfully Added !');
          refreshAuthors();
        } else {
          errorNotify();
        }
      }
    }
    postAuthors();
  };
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
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
    deleteAuthor();
    const disable = document.getElementById(id);
    if (disable) {
      disable.classList.add('disabled');

      setTimeout(() => {
        disable.classList.remove('disabled');
      }, 6000);
    }
  };
  // handle edit
  const handleEdit = id => {
    async function getAuthors() {
      try {
        setLoading(true);
        const response = await fetch(`${URL}/authors/${id}`);
        const data = await response.json();
        const tempAuthor = await data;
        const { fullName, birthDate, gender, email } = tempAuthor;
        setFullName(fullName);
        setBirthDate(birthDate);
        setGender(gender);
        setEmail(email);
        setEdit(true);
        setId(id);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAuthors();
  };
  // handle clear input
  const handleClearInput = () => {
    setFullName('');
    setBirthDate('');
    setGender('');
    setEmail('');
  };
  const refreshAddAuthor = () => {
    handleClearInput();
    setEdit(false);
    setId();
  };
  // pagination
  const handlePageClick = e => {
    setSelectedPage(e.selected);
    console.log(selectedPage, e.selected);
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
        handleClearInput,
        handleDelete,
        refreshAuthors,
        handleEditAuthor,
        handleAddAuthor,
        refreshAddAuthor,
        totalPages,
        handlePageClick,
        totalAuthors
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
}
