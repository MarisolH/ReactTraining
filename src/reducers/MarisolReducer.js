import { 
    DATA_MARISOL_BEGIN, 
    DATA_MARISOL_SUCCESS, 
    DATA_MARISOL_FAILURE, 
    CLEAR_DATA_MARISOL, 
} from '../actions/MarisolActions';

const initialState = {
    data: {},
    isLoading: false,
    error:''
};

export default function DataMarisolReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_MARISOL_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case DATA_MARISOL_SUCCESS:
            let data = action.payload.data;
            return {
                ...state,
                data,
                isLoading: false,
            }
        case DATA_MARISOL_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case CLEAR_DATA_MARISOL:
            return {
                ...state,
                data: {},
                isLoading: false,
            }
        default:
            return state;
    }
};

export const getDataMarisol = state => {
    return state.data
}
export const getDataMarisolError = state => {
    return state.error
}
export const getDataMarisolIsLoading = state => {
    return state.error
}
//FIRSTS
// export const getIsLoadingFirst = state => {
//     return state.isLoading;
// }