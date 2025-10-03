import {
  setProductList,
  setFetchState,
  setTotal
} from "../actions/productActions";

// Statik mock veri (ilk yükleme için)
import { products } from "../../mock/products.js";

//1.Sabit veriyle çalışan ilk yükleme fonksiyonu
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

//2.Dinamik API çağrısı yapan pagination destekli fonksiyon
export const fetchProductsPaginated = ({ limit = 25, offset = 0, category, filter, sort }) => {
  return async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      //Parametreleri URL'e dönüştür
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