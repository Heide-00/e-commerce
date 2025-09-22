import { useParams } from "react-router-dom";
import { products } from "../components/ProductSection";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id); 

  if (!product) {
    return <p className="px-4 py-6 text-red-500 text-center">Ürün bulunamadı.</p>;
  }

  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
       <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-[3/4] object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-600">
            {product.description || "English Department"}
          </p>

          <div className="flex gap-3 items-center">
            {product.oldPrice && (
              <span className="text-sm text-gray-400">{product.oldPrice}</span>
            )}
            <span className="text-lg font-bold text-green-600">{product.price}</span>
          </div>

        {product.colors?.length > 0 && (
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}

          <button className="mt-4 bg-black text-white px-5 py-2 rounded hover:bg-gray-800 w-fit">
            Sepete Ekle
          </button>
        </div>
      </div>
    </section>
  );
}