
import { combineReducers } from 'redux'
import DataMarisol, * as fromDataMarisol from './MarisolReducer.js'
import TypesProducts, * as fromTypesProducts from './TypesProductsReducer.js'

const rootReducer = combineReducers({
    DataMarisol,
    TypesProducts
});

export default rootReducer;


export const getDataMarisol = state =>
    fromDataMarisol.getDataMarisol(state.DataMarisol);

export const getDataMarisolError = state =>
    fromDataMarisol.getDataMarisolError(state.DataMarisol);

export const getDataMarisolIsLoading = state =>
    fromDataMarisol.getDataMarisolIsLoading(state.DataMarisol);

//typesProducts

export const getTypesProducts = state =>
    fromTypesProducts.getTypesProducts(state.TypesProducts);

export const getTypesProductsError = state =>
    fromTypesProducts.getTypesProductsError(state.TypesProducts);

export const getTypesProductsIsLoading = state =>
    fromTypesProducts.getTypesProductsIsLoading(state.TypesProducts);

    