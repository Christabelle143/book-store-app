// Action type
const STATUS_CHECK = 'bookstore/categories/STATUS_CHECK';
const initialState = [];

// Action creator
export const checkStatus = () => ({
  type: STATUS_CHECK,
});

// Reducer
// eslint-disable-next-line default-param-last
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
