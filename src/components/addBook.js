import React from 'react';

const AddBook = () => (
  <div className="form-inputs">
    <h1>ADD A NEW BOOK</h1>
    <form className="inputs">
      <input type="text" name="title" placeholder="Bookk-title" />
      <input type="text" name="author" placeholder="Book-author" />
      <button type="submit">Add</button>
    </form>
  </div>
);
export default AddBook;
