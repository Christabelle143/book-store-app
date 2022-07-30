import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <button type="button" className="remove-btn" onClick={deleteBook} value={id}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
