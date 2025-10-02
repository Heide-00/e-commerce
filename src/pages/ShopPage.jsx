import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { products } from "../mock/products";
import ProductCard from "../components/ProductCard";

const categories = [
  { id: 1, name: "bags" },
  { id: 2, name: "belts" },
  { id: 3, name: "cosmetics" },
  { id: 4, name: "hats" },
];

export default function ShopPage() {
  const history = useHistory();
  const { gender, categoryName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(categoryName || "bags");

  const handleCategoryClick = (category) => {
    const gender = "women"; 
    setSelectedCategory(category.name);
    history.push(`/shop/${gender}/${category.name}/${category.id}`);
  };

  const filteredProducts = products.filter(
    (p) =>
      p.id >= 8 &&
      p.gender === gender &&
      p.category === categoryName
  );

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
                selectedCategory === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </button>
          ))}
        </div>

        {/* Ürünler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}


