import { 
    FIRST_BEGIN,
    FIRST_SUCCESS,
    FIRST_FAILURE,
    CLEAR_FIRST,
} from '../actions/FirstActions';

const initialState = {
    data: {},
    isLoading: false,
    error:''
};

export default function FirstReducer(state = initialState, action) {
    switch (action.type) {
        case FIRST_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case FIRST_SUCCESS:
            let data = action.payload.data;
            return {
                ...state,
                data,
                isLoading: false,
            }
        case CLEAR_FIRST:
            return {
                ...state,
                data: {},
                isLoading: false,
            }
        case FIRST_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};

export const getFirst = state => {
    return state.data
}
//FIRSTS
// export const getIsLoadingFirst = state => {
//     return state.isLoading;
// }