const LOAD_ALL_PRODUCTS_BY_CATEGORY = 'LOAD_ALL_PRODUCTS_BY_CATEGORY'
const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT'
const SORT_PRODUCTS = "SORT_PRODUCTS"
const FILTER_PRODUCTS = "FILTER_PRODUCTS"
const DISCONTED_PRODUCTS = "DISCONTED_PRODUCTS"


export const loadProductsByCategoryAction = payload => ({ type: LOAD_ALL_PRODUCTS_BY_CATEGORY, payload })
export const loadSingleProductAction = payload => ({ type: LOAD_SINGLE_PRODUCT, payload })
export const sortByCategoryProductsAction = payload => ({type: SORT_PRODUCTS, payload})
export const filterByCategoryProductsAction = payload => ({type: FILTER_PRODUCTS, payload})
export const discontedByCategoryProductsAction = payload => ({type: DISCONTED_PRODUCTS, payload})

const filter = { min: 0, max: Infinity, discont: false };

export const productsByCategoryReducer = (state = {}, action) => {
    if(action.type === LOAD_ALL_PRODUCTS_BY_CATEGORY){
      const products = action.payload.data.map((el) => ({...el, show_product: true }))
      action.payload.data = products;
      return action.payload;
    } else if(action.type === SORT_PRODUCTS){
      if (action.payload === "title") {
        state.data.sort((a, b) => a.title.localeCompare(b.title));
      } else if (action.payload === "price_asc") {
        state.data.sort((a, b) => a.price - b.price);
      } else if (action.payload === "price_desc") {
        state.data.sort((a, b) => b.price - a.price);
      } else if (action.payload === "default") {
        state.data.sort((a, b) => a.id - b.id);
      }
      return { ...state };

        }else if(action.type === FILTER_PRODUCTS) {
            const { min_value, max_value } = action.payload
            filter.min_value = min_value;
            filter.max_value = max_value;
            const products = state.data.map(el => {
              if (filter.discont) {
                if (
                  el.discont_price >= filter.min_value && el.discont_price <= filter.max_value
                ) {
                  el.show_product = true;
                } else {
                  el.show_product = false;
                }
              } else {
                if (el.price >= min_value && el.price <= max_value) {
                  el.show_product = true;
                } else {
                  el.show_product = false;
                }
              }
              return el;
            });
            state.data = products;
            return { ...state };
            
    } else if(action.type === DISCONTED_PRODUCTS){
      filter.discont = action.payload;
      if (action.payload) {
        const products = state.data.map(el => {
          if (el.discont_price != null) {
            if (el.discont_price >= filter.min && el.discont_price <= filter.max
            ) {
              el.show_product = true;
            } else {
              el.show_product = false;
            }
          } else {
            el.show_product = false;
          }
          return el;
        });
        state.data = products;
        return { ...state };
      } else {
        const products = state.data.map((el) => {
          if (el.price >= filter.min && el.price <= filter.max) {
            el.show_product = true;
          } else {
            el.show_product = false;
          }
          return el;
        });
        state.data = products;
        return { ...state };
      }
        } else {
          return state
        }
      }

export const singleProductReducer = (state = [], action) => {
    if(action.type === LOAD_SINGLE_PRODUCT){
        return action.payload
    } else {
        return state
    }
}