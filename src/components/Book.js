import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */

const Book = ({ title, author }) => (
  <div className="book-container">
    <h3 className="book-title">{title}</h3>
    <p className="book-author">{author}</p>
    <button type="button" className="remove-btn">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
