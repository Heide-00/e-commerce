import {
  setProductList,
  setFetchState,
  setTotal
} from "../actions/productActions";
import { products } from "../../mock/products.js";

export const fetchProductsIfNeeded = () => {
  return async (dispatch, getState) => {
    const { productList, fetchState } = getState().product;

    if (productList.length === 0 && fetchState === "NOT_FETCHED") {
      dispatch(setFetchState("FETCHING"));

      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); 
        dispatch(setProductList(products));
        dispatch(setTotal(products.length));
        dispatch(setFetchState("FETCHED"));
      } catch (error) {
        dispatch(setFetchState("FAILED"));
        console.error("Ürünler alınamadı:", error);
      }
    }
  };
};