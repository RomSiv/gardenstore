import { loadAllProductsAction } from "../reducers/allProductsReducer";
import { loadSingleProductAction } from "../reducers/productsByCategoryReducer";
import { addSaleProductsAction } from "../reducers/saleReducer";

export const getAllProducts = callback => {
    fetch(`http://localhost:3333/products/all`)
    .then(res => res.json())
    .then(json => callback(loadAllProductsAction(json)))
}

export const getSingleProduct = id => {
    return dispatch => {
fetch(`http://localhost:3333/products/${id}`)
   .then(res => res.json())
   .then(json => dispatch(loadSingleProductAction(json[0])))
}
}

export const getSaleProducts = callback => {
    fetch(`http://localhost:3333/products/all`)
    .then(res => res.json())
    .then(json => callback(addSaleProductsAction(json)))
}

export const priceOff = product =>{
    fetch(`http://localhost:3333/sale/send`,{
        method:'POST',
        body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(json=> console.log(json, 'You got 5% off on the first order'))
}