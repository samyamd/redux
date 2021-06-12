const initialstate = {
  posts: [],
  selected: JSON.parse(localStorage.getItem('selected')) || {}
};

export const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'READY_PRODUCT': 
    return { ...state, loading: true}
    case "SET_POST":
      return { ...state, posts: action.payload, loading: false };
    case "SELECTED_POST":
      return { ...state, selected: action.payload, loading: false };
    case "ERROR_PRODUCT":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
