import {combineReducers} from 'redux'
import { postReducer } from "./postReducer";
const rootReducers = combineReducers({
  allPosts: postReducer
});

export default rootReducers;