import { useParams } from "react-router-dom";
import { products } from "../mock/products";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { gender, categoryName } = useParams();

  const filtered = products.filter(
    (p) => p.category === categoryName && p.gender === gender
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">
        {gender === "women" ? "Women" : "Men"} - {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link
            to={`/product/${p.id}`}
            key={p.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition block"
          >
            <img src={p.image} alt={p.title} className="w-full h-auto mb-2 rounded" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}