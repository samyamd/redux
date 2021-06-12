// import { createStore } from "redux";
// import rootReducer from "./reducers";

// const store = createStore(
//   rootReducer,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/postReducer";

const rootReducers = combineReducers({
  allPosts: postReducer
});

// export default rootReducers;

const store = createStore(
  rootReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
