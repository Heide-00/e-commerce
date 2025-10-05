import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/cartActions";
import { products } from "../mock/products.js";

export default function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const categories = useSelector((state) => state.categories?.categories || []);

  const product = products.find((item) => item.id === parseInt(id));

  const matchedCategory = categories.find(
    (cat) => cat.name === product?.category && cat.gender === product?.gender
  );

  if (!product) {
    return (
      <p className="px-4 py-6 text-red-500 text-center">
        Ürün bulunamadı.
      </p>
    );
  }

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (product.stock <= 0) {
      alert("Stokta kalmadı!");
      return;
    }

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { count: 1, product }];
    }

    dispatch(setCart(updatedCart));
  };

  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Ürün Görseli */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-[3/4] object-cover rounded-md"
            onError={(e) => {
              e.target.src = "/assets/images/fallback.png";
            }}
          />
        </div>

        {/* Ürün Bilgileri */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {product.title}
          </h2>

          <p className="text-sm text-gray-600">
            {product.description || "English Department"}
          </p>

          {/* Kategori Bilgisi */}
          {matchedCategory && (
            <p className="text-sm text-gray-500">
              Kategori: {matchedCategory.name} ({matchedCategory.gender})
            </p>
          )}

          {/* Fiyat Bilgisi */}
          <div className="flex gap-3 items-center">
            {product.oldPrice && (
              <span className="text-sm text-gray-400">
                {product.oldPrice}
              </span>
            )}
            <span className="text-lg font-bold text-green-600">
              {product.price}
            </span>
          </div>

          {/* Renkler */}
          {product.colors?.length > 0 && (
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}

          {/* Stok Bilgisi */}
          <p className="text-sm text-gray-500">
            Stokta kalan: {product.stock}
          </p>

          {/* Sepete Ekle Butonu */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`mt-4 px-5 py-2 rounded w-fit ${
              product.stock === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {product.stock === 0 ? "Stokta Yok" : "Sepete Ekle"}
          </button>

          {/* Kategoriye Geri Dön Butonu */}
          {matchedCategory && (
            <button
              onClick={() =>
                history.push(
                  `/shop/${matchedCategory.gender}/${matchedCategory.name}/${matchedCategory.id}`
                )
              }
              className="mt-2 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-fit"
            >
              {matchedCategory.gender === "women" ? "Kadın" : "Erkek"}{" "}
              {matchedCategory.name} kategorisine geri dön
            </button>
          )}
        </div>
      </div>
    </section>
  );
}













