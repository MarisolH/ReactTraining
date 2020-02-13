
import { 
    TYPES_PRODUCTS_BEGIN, 
    TYPES_PRODUCTS_SUCCESS, 
    TYPES_PRODUCTS_FAILURE, 
    CLEAR_TYPES_PRODUCTS, 
} from '../actions/TypesProductsActions';

const initialState = {
    data: {},
    isLoading: false,
    error:''
};

export default function DataExampleReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES_PRODUCTS_BEGIN:
            return {
                ...state,
                isLoading: true
            }
        case TYPES_PRODUCTS_SUCCESS:
            let data = action.payload.data;
            return {
                ...state,
                data,
                isLoading: false,
            }
        case TYPES_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case CLEAR_TYPES_PRODUCTS:
            return {
                ...state,
                data: {},
                isLoading: false,
            }
        default:
            return state;
    }
};

export const getTypesProducts = state => {
    return state.data
}
export const getTypesProductsError = state => {
    return state.error
}
export const getTypesProductsIsLoading = state => {
    return state.error
}
//FIRSTS
// export const getIsLoadingFirst = state => {
//     return state.isLoading;
// }