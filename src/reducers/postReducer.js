const initialstate = {
  posts: [],
};

export const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_POST":
      return { ...state, posts: action.payload };
    case "SELECTED_POST":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
