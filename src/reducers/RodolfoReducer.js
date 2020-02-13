import { 
    DATA_RODOLFO_BEGIN, 
    DATA_RODOLFO_SUCCESS, 
    DATA_RODOLFO_FAILURE, 
    CLEAR_DATA_RODOLFO, 
} from '../actions/RodolfoAction';

const initialState = {
    data: {},
    isLoading: false,
    error:''
};

export default function DataRodolfoReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_RODOLFO_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case DATA_RODOLFO_SUCCESS:
            console.log(action.payload.data)
            let data = action.payload.data;
            return {
                ...state,
                data,
                isLoading: false,
            }
        case DATA_RODOLFO_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case CLEAR_DATA_RODOLFO:
            return {
                ...state,
                data: {},
                isLoading: false,
            }
        default:
            return state;
    }
};

export const getDataRodolfo = state => {
    return state.data
}
export const getDataRodolfoError = state => {
    return state.error
}
export const getDataRodolfoIsLoading = state => {
    return state.error
}
//FIRSTS
// export const getIsLoadingFirst = state => {
//     return state.isLoading;
// }