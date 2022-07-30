import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { checkStatus } from '../redux/categories/categories';

function Categories({ categories }) {
  const dispatch = useDispatch();

  const showStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" onClick={() => showStatus()}>Check status</button>
      <br />
      {categories}
    </>
  );
}

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.oneOfType(
    [PropTypes.string],
  )),
};

export default Categories;
