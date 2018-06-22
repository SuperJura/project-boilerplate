/* eslint import/no-named-default: off */

import { combineReducers } from 'redux';
import { mainReducer } from './pages/Main/reducer'


export const reducers = combineReducers({
  main: mainReducer
  // place other reducers here,
});