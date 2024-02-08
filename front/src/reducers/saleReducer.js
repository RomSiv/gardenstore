const ADD_SALE_PRODUCTS = 'ADD_SALE_PRODUCTS'
const SORT_PRODUCTS_OF_SALE = "SORT_PRODUCTS_OF_SALE"
const FILTER_PRODUCTS_OF_SALE = "FILTER_PRODUCTS_OF_SALE" 

export const addSaleProductsAction = payload => ({ type: ADD_SALE_PRODUCTS, payload })
export const sortProductsOfSaleAction = payload => ({type: SORT_PRODUCTS_OF_SALE, payload})
export const filterProductsOfSaleAction = payload => ({type: FILTER_PRODUCTS_OF_SALE, payload})

export const saleReducer = (state = [], action) => {
    if(action.type === ADD_SALE_PRODUCTS) {
        return action.payload
        .filter(el => el.discont_price !== null)
        .map(el => ({ ...el, show_product: true }))
        
    }else if(action.type === SORT_PRODUCTS_OF_SALE){
        if(action.payload === 'title'){
            state.sort((a, b) => a.title.localeCompare(b.title))
        } else if(action.payload === 'price_asc') {
            state.sort((a, b) => a.discont_price - b.discont_price)
        } else if(action.payload === 'price_desc'){
            state.sort((a, b) => b.discont_price - a.discont_price)
        }
        return [...state]

        }else if(action.type === FILTER_PRODUCTS_OF_SALE) {
            const { min_value, max_value } = action.payload
            return state.map(el => {
                if(el.discont_price >= min_value && el.discont_price <= max_value){
                    el.show_product = true
                } else {
                    el.show_product = false
                }
                return el
            })
        } else {
        return state
    }
}