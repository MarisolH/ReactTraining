import { combineReducers } from 'redux';
import FirstReducer, * as fromFirst from './FirstReducer';

const rootReducer = combineReducers({
  FirstReducer
});

export default rootReducer;

export const getFirst = state =>
{console.log(state)
  return(fromFirst.getFirst(state.FirstReducer))}