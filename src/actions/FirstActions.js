// import ApiService from '../services/ApiService'
export const FIRST_SUCCESS = 'FIRST_SUCCESS';
export const FIRST_BEGIN = 'FIRST_BEGIN';
export const FIRST_FAILURE = 'FIRST_FAILURE';
export const CLEAR_FIRST = 'CLEAR_FIRST';
const Data={text:'Redux'}
export function fetchFirstAction() {
    return async dispatch => {
        dispatch(firstBegin());
        dispatch(firstSuccess(Data));
        // await ApiService.getSomething()
        //     .then(
        //     result => {
        //         dispatch(firstSuccess(result));
        //         },
        //         error => {
        //             dispatch(firstError(error, 'An error ocurred'));
        //             // throw ({ error: error, message: 'An error ocurred' });
        //         }
            // )
    };
}

export const firstSuccess = (data) => ({
    type: FIRST_SUCCESS,
    payload: {data}
})

export const firstBegin = () => ({
    type: FIRST_BEGIN,
})

export const firstError = (error, message) => ({
    type: FIRST_FAILURE,
    payload: {error, message}
})

export const firstClear = () => ({
    type: CLEAR_FIRST,
})