import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProductsIfNeeded } from "../store/thunks/fetchProducts";

export default function ProductSection() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductsIfNeeded());
  }, [dispatch]);

  const homepageProducts = productList.filter((item) => item.id <= 7);

  return (
    <section className="w-full px-4 pt-4 pb-15">
      <div className="text-center mb-8">
        <h3 className="text-sm font-medium text-gray-500 tracking-wide">Featured Products</h3>
        <h2 className="text-xl font-semibold text-gray-800">BESTSELLER PRODUCTS</h2>
        <p className="text-sm text-gray-500 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {fetchState === "FETCHING" && (
        <p className="text-center text-gray-400">Ürünler yükleniyor...</p>
      )}

      {fetchState === "FAILED" && (
        <p className="text-center text-red-500">Ürünler alınamadı. Lütfen tekrar deneyin.</p>
      )}

      {fetchState === "FETCHED" && homepageProducts.length === 0 && (
        <p className="text-center text-gray-500">Hiç ürün bulunamadı.</p>
      )}

      {fetchState === "FETCHED" && homepageProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {homepageProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}
