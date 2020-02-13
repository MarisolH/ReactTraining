// this is an example of a simple Actions
import ApiService from '../services/ApiService';

export const DATA_VICTOR_BEGIN = 'DATA_VICTOR_BEGIN';
export const DATA_VICTOR_SUCCESS = 'DATA_VICTOR_SUCCESS';
export const DATA_VICTOR_FAILURE = 'DATA_VICTOR_FAILURE';
export const CLEAR_DATA_VICTOR = 'CLEAR_DATA_VICTOR';

export function fetchDataVictor() {
    return async dispatch => {
        dispatch(dataVictorBegin());
        await ApiService.getProducts()
            .then(
                result => {
                    dispatch(dataVictorSuccess(result));
                },
                error => {
                    dispatch(dataVictorError());
                    // eslint-disable-next-line no-throw-literal
                    throw ({ error: error, message: 'An error ocurred' });
                }
            )
    };
}

export const dataVictorBegin = () => ({
    type: DATA_VICTOR_BEGIN,
});

export const dataVictorSuccess = data => ({
    type: DATA_VICTOR_SUCCESS,
    payload: { data }
})

export const dataVictorError = () => ({
    type: DATA_VICTOR_FAILURE,
})

export const clearDataVictor = () => ({
    type: CLEAR_DATA_VICTOR,
});