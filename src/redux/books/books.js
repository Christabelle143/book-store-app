// Define action types for adding and removing a book.
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { state: [...state.state, action.payload] };
    case REMOVE_BOOK:
      return [...state.slice(0, action.index),
        ...state.slice(action.index + 1), state.length];
    default:
      return { state };
  }
};

export default booksReducer;
