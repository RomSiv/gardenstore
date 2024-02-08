import { loadAllCategoriesAction } from "../reducers/categoriesReducer"
import { loadProductsByCategoryAction } from '../reducers/productsByCategoryReducer'

export const getAllCategories = callback => {
    fetch('http://localhost:3333/categories/all')
    .then(res => res.json())
    .then(json => callback(loadAllCategoriesAction(json)))
}

export const getAllProductsByCategory = category => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/${category}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
}