import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

