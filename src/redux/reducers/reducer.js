import { ADD_PRODUCT_TO_IN_PROCESS, FETCH_PRODUCTS, PRODUCT_STATUS_HANDLER } from "../actions/action";

const initialState = {
  stockProducts: [],
  productsInProcess: [],
  productsDispatched: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      const { products } = action;
      return {
        ...state,
        stockProducts: state.stockProducts.concat(products),
      };
    case ADD_PRODUCT_TO_IN_PROCESS:
      const { product } = action;
      return {
        ...state,
        productsInProcess:  state.productsInProcess.concat(product),
      };
    case PRODUCT_STATUS_HANDLER:
      const { id } = action.product;
      return {
        ...state,
        productsInProcess: state.productsInProcess.filter((x) => x.id !== id),
        productsDispatched: state.productsDispatched.concat({
          ...action.product,
          status: "dispatched",
        }),
      };
    default:
      return state;
  }
};

export default reducer;