import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { categoriesReducer } from '../reducers/categoriesReducer';
import { productsByCategoryReducer } from '../reducers/productsByCategoryReducer'
import { singleProductReducer } from '../reducers/productsByCategoryReducer';
import { allProductsReducer } from '../reducers/allProductsReducer'
import { cartReducer } from '../reducers/cartReducer';
import { saleReducer } from '../reducers/saleReducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    product: singleProductReducer,
    products: allProductsReducer,
    cart: cartReducer,
    saleProducts: saleReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))