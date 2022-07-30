import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore({
  reducer: rootStore,
});

export default store;
