const initialState = {
  category: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload
      };
      default: 
      return state;
  }
}