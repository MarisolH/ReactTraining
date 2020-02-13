// this is an example of a simple Actions
import ApiService from '../services/ApiService';

export const DATA_RODOLFO_BEGIN = 'DATA_RODOLFO_BEGIN';
export const DATA_RODOLFO_SUCCESS = 'DATA_RODOLFO_SUCCESS';
export const DATA_RODOLFO_FAILURE = 'DATA_RODOLFO_FAILURE';
export const CLEAR_DATA_RODOLFO = 'CLEAR_DATA_RODOLFO';

export function fetchDataRodolfo() {
    return async dispatch => {
        dispatch(dataRodolfoBegin());
        await ApiService.getProducts()
            .then(
                result => {
                    dispatch(dataRodolfoSuccess(result));
                },
                error => {
                    dispatch(dataRodolfoError());
                    // eslint-disable-next-line no-throw-literal
                    throw ({ error: error, message: 'An error ocurred' });
                }
            )
    };
}

export const dataRodolfoBegin = () => ({
    type: DATA_RODOLFO_BEGIN,
});

export const dataRodolfoSuccess = data => ({
    type: DATA_RODOLFO_SUCCESS,
    payload: { data }
})

export const dataRodolfoError = () => ({
    type: DATA_RODOLFO_FAILURE,
})

export const clearDataRodolfo = () => ({
    type: CLEAR_DATA_RODOLFO,
});