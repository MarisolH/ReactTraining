import ApiService from '../services/ApiService';

export const DATA_MARISOL_BEGIN = 'DATA_MARISOL_BEGIN';
export const DATA_MARISOL_SUCCESS = 'DATA_MARISOL_SUCCESS';
export const DATA_MARISOL_FAILURE = 'DATA_MARISOL_FAILURE';
export const CLEAR_DATA_MARISOL = 'CLEAR_DATA_MARISOL';

export function fetchDataMarisol() {
    return async dispatch => {
        dispatch(dataMarisolBegin());
        await ApiService.getDataMarisol()
            .then(
                result => {
                    dispatch(dataMarisolSuccess(result));
                },
                error => {
                    dispatch(dataMarisolError());
                    // eslint-disable-next-line no-throw-literal
                    throw ({ error: error, message: 'An error ocurred' });
                }
            )
    };
}

export const dataMarisolBegin = () => ({
    type: DATA_MARISOL_BEGIN,
});

export const dataMarisolSuccess = data => ({
    type: DATA_MARISOL_SUCCESS,
    payload: { data }
})

export const dataMarisolError = () => ({
    type: DATA_MARISOL_FAILURE,
})

export const clearDataMarisol = () => ({
    type: CLEAR_DATA_MARISOL,
});