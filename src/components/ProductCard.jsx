import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/cartActions";

export default function ProductCard({
  id,
  image,
  title,
  department,
  price,
  oldPrice,
  colors
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.product.id === id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.product.id === id
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { count: 1, product: { id, image, title, price } }];
    }

    dispatch(setCart(updatedCart));
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center border rounded-md p-4 hover:shadow-md transition">
      <Link to={`/product/${id}`} className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[3/4] object-cover rounded-md"
        />

        <div className="flex flex-col gap-1 mt-2">
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          {department && (
            <p className="text-sm text-gray-500">{department}</p>
          )}
        </div>

        <div className="flex gap-2 items-center justify-center mt-1">
          {oldPrice && (
            <span className="text-sm text-gray-400">{oldPrice}</span>
          )}
          <span className="text-sm text-green-600 font-semibold">{price}</span>
        </div>

        {colors?.length > 0 && (
          <div className="flex gap-2 justify-center mt-1">
            {colors.map((color, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </Link>

      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600 transition"
      >
        Sepete Ekle
      </button>
    </div>
  );
}
