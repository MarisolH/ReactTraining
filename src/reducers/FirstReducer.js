import { 
    DATA_EXAMPLE_BEGIN, 
    DATA_EXAMPLE_SUCCESS, 
    DATA_EXAMPLE_FAILURE, 
    CLEAR_DATA_EXAMPLE, 
} from '../actions/FirstActions';

const initialState = {
    data: {},
    isLoading: false,
    error:''
};

export default function DataExampleReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_EXAMPLE_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case DATA_EXAMPLE_SUCCESS:
            let data = action.payload.data;
            return {
                ...state,
                data,
                isLoading: false,
            }
        case DATA_EXAMPLE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case CLEAR_DATA_EXAMPLE:
            return {
                ...state,
                data: {},
                isLoading: false,
            }
        default:
            return state;
    }
};

export const getDataExample = state => {
    return state.data
}
export const getDataExampleError = state => {
    return state.error
}
export const getDataExampleIsLoading = state => {
    return state.error
}
//FIRSTS
// export const getIsLoadingFirst = state => {
//     return state.isLoading;
// }