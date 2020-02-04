import { 
    DATA_JAVIER_BEGIN, 
    DATA_JAVIER_SUCCESS, 
    DATA_JAVIER_FAILURE, 
    CLEAR_DATA_JAVIER, 
} from '../actions/FirstActions';

const initialState = {
    data: {},
    isLoading: false,
    error:''
};

export default function DataJavierReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_JAVIER_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case DATA_JAVIER_SUCCESS:
            let data = action.payload.data;
            return {
                ...state,
                data,
                isLoading: false,
            }
        case DATA_JAVIER_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case CLEAR_DATA_JAVIER:
            return {
                ...state,
                data: {},
                isLoading: false,
            }
        default:
            return state;
    }
};

export const getDataJavier = state => {
    return state.data
}
export const getDataJavierError = state => {
    return state.error
}
export const getDataJavierIsLoading = state => {
    return state.error
}
//FIRSTS
// export const getIsLoadingFirst = state => {
//     return state.isLoading;
// }