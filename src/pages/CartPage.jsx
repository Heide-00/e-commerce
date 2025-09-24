import { useSelector, useDispatch } from "react-redux";
import {
  updateCartItemCount,
  removeFromCart
} from "../store/actions/cartActions";

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

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sepetim</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Sepetiniz boş.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-4 rounded"
            >
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
              <span className="text-green-600 font-bold">
                ₺{item.product.price}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}