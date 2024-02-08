const ADD_TO_CART = 'AD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECTEMENT'

export const addToCartAcrion = payload => ({ type: ADD_TO_CART, payload });
export const deleteItemAction = id => ({ type: DELETE_ITEM, payload: id })
export const deleteAllProductsAction = payload => ({ type: DELETE_ALL_PRODUCTS, payload })
export const incrementAction = id => ({ type: INCREMENT, payload: id })
export const decrementAction = id => ({ type: DECREMENT, payload: id })

const checkProduct = (state, payload) => {
    const productInCart = state.find(el => el.id === payload.id);
    if (!productInCart) {
      return [...state, {...payload, count: 1 }];
    } else {
      productInCart.count++;
      return [...state];
    }
  };

export const cartReducer = ( state=[], action ) => {
if(action.type === ADD_TO_CART){
return checkProduct(state, action.payload)
} else if(action.type === DELETE_ITEM){
    return state.filter(el => el.id !== action.payload)
} else if(action.type === DELETE_ALL_PRODUCTS){
    return []
} else if(action.type === INCREMENT){
    state.find(el => el.id === action.payload).count++
    return [...state]
} else if(action.type === DECREMENT){
    const target_state = state.find(el => el.id === action.payload)
    if(target_state.count === 1){
        return state.filter(el => el.id !== action.payload)
    } else {
        target_state.count--
    } return [...state]
} 
    return state
}
