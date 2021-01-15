import { DUMMY_DATA } from "../../data/data";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_PRODUCT_TO_IN_PROCESS = "ADD_PRODUCT_TO_IN_PROCESS";
export const PRODUCT_STATUS_HANDLER = "PRODUCT_STATUS_HANDLER";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(DUMMY_DATA);
      }, 2000);
    });
    return dispatch({
      type: FETCH_PRODUCTS,
      products: response,
    });
  };
};

export const addProductToInProcess  = (product) => ({
    type: ADD_PRODUCT_TO_IN_PROCESS,
    product
});

export const productStatusHandler = (product) => {
  return async (dispatch) => {
    dispatch(addProductToInProcess({...product, status:"inProcess", createdAt: new Date()}));
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Done");
      }, product.cookingTime);
    });
    if (response) {
        dispatch({
        type: PRODUCT_STATUS_HANDLER,
        product,
      });
    }
  };
};
