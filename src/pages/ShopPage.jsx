import { useParams, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axiosInstance";
import ProductCard from "../components/ProductCard";
import ReactPaginate from "react-paginate";

const categories = [
  { id: 1, name: "bags" },
  { id: 2, name: "belts" },
  { id: 3, name: "cosmetics" },
  { id: 4, name: "hats" },
];

export default function ShopPage() {
  const history = useHistory();
  const location = useLocation();
  const { gender, categoryName, categoryId } = useParams();

  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get("filter") || "";
  const initialSort = queryParams.get("sort") || "";

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(initialFilter);
  const [sort, setSort] = useState(initialSort);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 25;

  const handleCategoryClick = (category) => {
    queryParams.set("filter", filter);
    queryParams.set("sort", sort);
    history.push(`/shop/${gender}/${category.name}/${category.id}?${queryParams.toString()}`);
    setPage(0); // kategori değişince sayfayı sıfırla
  };

  const handleApplyFilter = () => {
    queryParams.set("filter", filter);
    queryParams.set("sort", sort);
    history.push(`/shop/${gender}/${categoryName}/${categoryId}?${queryParams.toString()}`);
    setPage(0); // filtre değişince sayfayı sıfırla
  };

  useEffect(() => {
    const query = new URLSearchParams();
    query.append("limit", limit);
    query.append("offset", page * limit);
    if (categoryId) query.append("category", categoryId);
    if (filter) query.append("filter", filter);
    if (sort) query.append("sort", sort);

    axios.get(`/products?${query.toString()}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotal(res.data.total);
      })
      .catch((err) => console.error("Ürün çekme hatası:", err));
  }, [categoryId, filter, sort, page]);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shop</h1>

        {/* Kategori Butonları */}
        <div className="flex flex-wrap gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded text-sm capitalize ${
                categoryName === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </button>
          ))}
        </div>

        {/* Filtre ve Sıralama */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Filtrele (örneğin: siyah)"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded w-full sm:w-1/2"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border p-2 rounded w-full sm:w-1/2"
          >
            <option value="">Sırala</option>
            <option value="price:asc">Fiyat Artan</option>
            <option value="price:desc">Fiyat Azalan</option>
            <option value="rating:asc">Puan Artan</option>
            <option value="rating:desc">Puan Azalan</option>
          </select>
          <button
            onClick={handleApplyFilter}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Filtrele
          </button>
        </div>

        {/* Ürünler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>

        {/* Sayfalama */}
        {total > limit && (
          <ReactPaginate
            pageCount={Math.ceil(total / limit)}
            onPageChange={({ selected }) => setPage(selected)}
            containerClassName="flex gap-2 mt-6 justify-center"
            activeClassName="text-blue-500 font-bold"
            previousLabel="<"
            nextLabel=">"
          />
        )}
      </div>
    </div>
  );
}

