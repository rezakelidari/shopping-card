import { getProducts } from "../../api/productsList";

export const productActions = {
  Request: "PRODUCT_FETCH_REQUEST",
  Success: "PRODUCT_FETCH_SUCCESS",
  Failed: "PRODUCT_FETCH_FAILED",
};

const productFetchRequest = () => {
  return { type: productActions.Request };
};

const productFetchSuccess = (products) => {
  return { type: productActions.Success, payload: products };
};

const productFetchFailed = (error) => {
  return { type: productActions.Failed, payload: error };
};

export const productFetch = (dispatch) => {
  dispatch(productFetchRequest());
  getProducts().then((result) => {
    console.log(result);
    dispatch(
      result.type === productActions.Success
        ? productFetchSuccess(result.data)
        : productFetchFailed(result.data)
    );
  });
};
