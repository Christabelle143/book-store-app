/* eslint-disable*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import { fetchBooks } from './Books';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uR4N2zYKBpWiNUXcGKzN/books';
function AddBook(props) {
  const { fetchBooks } = props
  const bookList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: 'Action',
    item_id: uuidv4(),
  });

  const read = (e) => {
    const input = e.target;
    setState({
      ...state,
      [input.name]: input.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (state.title && state.author) {
      let maxID = 0;
      for (let i = 0; i < bookList.books.length; i += 1) {
        if (bookList.books[i].id > maxID) {
          maxID = bookList.books[i].id;
        }
      }

      fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(response => {if(response.status == 201)fetchBooks()});

     // dispatch(
     //   addBook({
     //     id: maxID + 1,
    //      title: state.title,
     //     author: state.author,
     //   }),
    //  );
      setState({
        ...state, title: '', author: '', item_id: uuidv4(),
      });
    }
  };

  return (
    <div className="form-inputs">
      <h1>ADD A NEW BOOK</h1>
      <form className="inputs" onSubmit={submit}>
        <input type="text" name="title" placeholder="Bookk-title" value={state.title} onChange={read} />
        <input type="text" name="author" placeholder="Book-author" value={state.author} onChange={read} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddBook;
