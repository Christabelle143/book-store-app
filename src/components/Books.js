import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */

const Books = () => {
  const bookList = [{
    id: 1,
    title: 'THE HUNGER GAMES',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'DUNE',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-first Century',
    author: 'Suzanne Collins',
  },
  ];

  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
