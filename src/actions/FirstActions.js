// this is an example of a simple Actions
import ApiService from '../services/ApiService';

export const DATA_EXAMPLE_BEGIN = 'DATA_EXAMPLE_BEGIN';
export const DATA_EXAMPLE_SUCCESS = 'DATA_EXAMPLE_SUCCESS';
export const DATA_EXAMPLE_FAILURE = 'DATA_EXAMPLE_FAILURE';
export const CLEAR_DATA_EXAMPLE = 'CLEAR_DATA_EXAMPLE';

export function fetchDataExample() {
    return async dispatch => {
        dispatch(dataExampleBegin());
        await ApiService.getDataExample()
            .then(
                result => {
                    dispatch(dataExampleSuccess(result));
                },
                error => {
                    dispatch(dataExampleError());
                    // eslint-disable-next-line no-throw-literal
                    throw ({ error: error, message: 'An error ocurred' });
                }
            )
    };
}

export const dataExampleBegin = () => ({
    type: DATA_EXAMPLE_BEGIN,
});

export const dataExampleSuccess = data => ({
    type: DATA_EXAMPLE_SUCCESS,
    payload: { data }
})

export const dataExampleError = () => ({
    type: DATA_EXAMPLE_FAILURE,
})

export const clearDataExample = () => ({
    type: CLEAR_DATA_EXAMPLE,
});