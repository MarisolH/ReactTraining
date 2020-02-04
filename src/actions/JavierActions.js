import ApiService from '../services/ApiService';

export const DATA_JAVIER_BEGIN = 'DATA_JAVIER_BEGIN';
export const DATA_JAVIER_SUCCESS = 'DATA_JAVIER_SUCCESS';
export const DATA_JAVIER_FAILURE = 'DATA_JAVIER_FAILURE';
export const CLEAR_DATA_JAVIER = 'CLEAR_DATA_JAVIER';

export function fetchDataJavier() {
    return async dispatch => {
        dispatch(dataJavierBegin());
        await ApiService.getDataJavier()
            .then(
                result => {
                    dispatch(dataJavierSuccess(result));
                },
                error => {
                    dispatch(dataJavierError());
                    // eslint-disable-next-line no-throw-literal
                    throw ({ error: error, message: 'An error ocurred' });
                }
            )
    };
}

export const dataJavierBegin = () => ({
    type: DATA_JAVIER_BEGIN,
});

export const dataJavierSuccess = data => ({
    type: DATA_JAVIER_SUCCESS,
    payload: { data }
})

export const dataJavierError = () => ({
    type: DATA_JAVIER_FAILURE,
})

export const clearDataJavier = () => ({
    type: CLEAR_DATA_JAVIER,
});