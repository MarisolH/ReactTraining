import { 
    DATA_VICTOR_BEGIN, 
    DATA_VICTOR_SUCCESS, 
    DATA_VICTOR_FAILURE, 
    CLEAR_DATA_VICTOR, 
} from '../actions/VictorActions';

const initialState = {
    data: {},
    isLoading: false,
    error:''
};

export default function DataVictorReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_VICTOR_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case DATA_VICTOR_SUCCESS:
            let data = action.payload.data;
            return {
                ...state,
                data,
                isLoading: false,
            }
        case DATA_VICTOR_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case CLEAR_DATA_VICTOR:
            return {
                ...state,
                data: {},
                isLoading: false,
            }
        default:
            return state;
    }
};

export const getDataVictor = state => {
    return state.data
}
export const getDataVictorError = state => {
    return state.error
}
export const getDataVictorIsLoading = state => {
    return state.error
}
//FIRSTS
// export const getIsLoadingFirst = state => {
//     return state.isLoading;
// }