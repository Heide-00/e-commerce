import { useSelector, useDispatch } from "react-redux";
import {
  updateCartItemCount,
  removeFromCart,
  toggleCartItemChecked
} from "../store/actions/cartActions";
import { Trash2 } from "lucide-react"; 

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleCountChange = (productId, newCount) => {
    if (newCount > 0) {
      dispatch(updateCartItemCount(productId, newCount));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  const handleToggleChecked = (productId) => {
    dispatch(toggleCartItemChecked(productId));
  };

  const total = cart
    .filter((item) => item.checked)
    .reduce((sum, item) => {
      const rawPrice = item.product.price;
      const price = parseFloat(
        typeof rawPrice === "string"
          ? rawPrice.replace(/[^\d.]/g, "")
          : rawPrice
      );
      return sum + (isNaN(price) ? 0 : price * item.count);
    }, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sepetim</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Sepetiniz boş.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleToggleChecked(item.product.id)}
                  />
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.product.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          handleCountChange(item.product.id, item.count - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        –
                      </button>
                      <span className="text-sm">{item.count}</span>
                      <button
                        onClick={() =>
                          handleCountChange(item.product.id, item.count + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">
                    {item.product.price}
                  </span>
                  <button
                    onClick={() => dispatch(removeFromCart(item.product.id))}
                    className="text-red-500 hover:text-red-700"
                    title="Ürünü sil"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right font-bold text-lg">
            Toplam Seçili Tutar:{" "}
            <span className="text-blue-600">${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}