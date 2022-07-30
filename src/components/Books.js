/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './addBook';
import { getBooks } from '../redux/books/books';

function Books(props) {
  // eslint-disable-next-line react/prop-types
  const [bookList, setBookList] = useState({})
  const dispatch = useDispatch();
  const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uR4N2zYKBpWiNUXcGKzN/books';
  const fetchBooks = () => {
    fetch(baseURL).then((data) => {
      data.json().then((dataJson) => {
        dispatch(getBooks(dataJson));
        setBookList(dataJson)
      });
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //const { bookList } = props;
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {Object.values(bookList).map((book, index) => (
        <Book key={index} title={ book[0]?.title} author={book[0]?.author} id={index} />
      ))}
      <AddBook fetchBooks={fetchBooks} />
    </div>
  );
}

Books.defaultProps = {
  books: [],
};

export default Books;
