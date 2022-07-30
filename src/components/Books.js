/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';
import AddBook from './addBook';

function Books(props) {
  // eslint-disable-next-line react/prop-types
  const { bookList } = props;
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <AddBook />
    </div>
  );
}

Books.defaultProps = {
  books: [],
};

export default Books;
