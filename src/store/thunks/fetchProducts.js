import {
  setProductList,
  setFetchState,
  setTotal,
  setSelectedProduct 
} from "../actions/productActions";

import { products } from "../../mock/products.js";

//1.Statik veriyle ilk yükleme
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

//2.Sayfalı API çağrısı
export const fetchProductsPaginated = ({ limit = 25, offset = 0, category, filter, sort }) => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      const queryParams = new URLSearchParams();
      queryParams.append("limit", limit);
      queryParams.append("offset", offset);
      if (category) queryParams.append("category", category);
      if (filter) queryParams.append("filter", filter);
      if (sort) queryParams.append("sort", sort);

      const res = await fetch(`http://localhost:3000/products?${queryParams.toString()}`);
      const data = await res.json();

      dispatch(setProductList(data.products));
      dispatch(setTotal(data.total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      dispatch(setFetchState("FAILED"));
      console.error("Sayfalı ürünler alınamadı:", error);
    }
  };
};

//3.Yeni: Belirli ürün detayını çekme
export const fetchProductById = (productId) => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      const res = await fetch(`http://localhost:3000/products/${productId}`);
      const data = await res.json();

      dispatch(setSelectedProduct(data)); //Detay verisini reducer'a gönderme
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      dispatch(setFetchState("FAILED"));
      console.error("Ürün detayı alınamadı:", error);
    }
  };
};