import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import { filterReducer } from './filters';

export const rootReducer = combineReducers({
  post: postsReducer,
  filter: filterReducer,
});
