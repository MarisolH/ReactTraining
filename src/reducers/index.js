// import { CLEAR_ALL_STATES } from '../actions/LoginActions';
// import DataExample, * as fromDataExample from './FirstReducer.js';
import DataMarisol, * as fromDataMarisol from './MarisolReducer.js'

import DataVictor, * as fromDataVictor from './VictorReducer.js'


import { combineReducers } from 'redux';

const appReducer = combineReducers({
    DataMarisol, DataVictor,
});

const rootReducer = (state, action) => {
    // Clear all data in redux store to initial.
    // if (action.type === CLEAR_ALL_STATES)
        // state = undefined;
    return appReducer(state, action);
};

export default rootReducer;

// EXAMPLE OF SELECTORS
// export const getDataExample = state =>
//     fromDataExample.getDataExample(state.DataExample);
// export const getDataExampleError = state =>
//     fromDataExample.getDataExampleError(state.DataExample);
// export const getDataExampleIsLoading = state =>
//     fromDataExample.getDataExampleIsLoading(state.DataExample);

//MARISOL REDUCER
export const getDataMarisol = state =>
    fromDataMarisol.getDataMarisol(state.DataExample);
export const getDataMarisolError = state =>
    fromDataMarisol.getDataMarisolError(state.DataExample);
export const getDataMarisolIsLoading = state =>
    fromDataMarisol.getDataMarisolIsLoading(state.DataExample);


export const getDataVictor = state =>
    fromDataVictor.getDataVictor(state.DataVictor);
export const getDataVictorError = state =>
    fromDataVictor.getDataVictorError(state.DataVictor);
export const getDataVictorIsLoading = state =>
    fromDataVictor.getDataVictorIsLoading(state.DataVictor);
