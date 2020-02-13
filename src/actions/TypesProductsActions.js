// this is an example of a simple Actions
import ApiService from '../services/ApiService';

export const TYPES_PRODUCTS_BEGIN = 'TYPES_PRODUCTS_BEGIN';
export const TYPES_PRODUCTS_SUCCESS = 'TYPES_PRODUCTS_SUCCESS';
export const TYPES_PRODUCTS_FAILURE = 'TYPES_PRODUCTS_FAILURE';
export const CLEAR_TYPES_PRODUCTS = 'CLEAR_TYPES_PRODUCTS';

export function fetchTypesProducts() {
    return async dispatch => {
        dispatch(typesProductsBegin());
        await ApiService.getTypesProducts()
            .then(
                result => {
                    dispatch(typesProductsSuccess(result));
                },
                error => {
                    dispatch(typesProductsError());
                    // eslint-disable-next-line no-throw-literal
                    throw ({ error: error, message: 'An error ocurred' });
                }
            )
    };
}

export const typesProductsBegin = () => ({
    type: TYPES_PRODUCTS_BEGIN,
});

export const typesProductsSuccess = data => ({
    type: TYPES_PRODUCTS_SUCCESS,
    payload: { data }
})

export const typesProductsError = () => ({
    type: TYPES_PRODUCTS_FAILURE,
})

export const clearTypesProducts = () => ({
    type: CLEAR_TYPES_PRODUCTS,
});