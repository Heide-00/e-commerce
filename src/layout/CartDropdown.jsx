import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  updateCartItemCount
} from "../store/actions/cartActions";

export default function CartDropdown() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="w-[92vw] max-w-[400px] bg-white shadow-lg rounded-lg p-4 sm:p-6">
      <h3 className="text-md font-bold mb-4 text-center sm:text-left">
        Sepetim ({totalCount} Ürün)
      </h3>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500 text-center sm:text-left">
          Sepetiniz boş
        </p>
      ) : (
        <ul className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {cartItems.map((item) => (
            <li key={item.product.id} className="flex gap-3 items-start">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.product.title}</p>
                {item.product.department && (
                  <p className="text-xs text-gray-500">
                    {item.product.department}
                  </p>
                )}
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm font-bold text-gray-800">
                    {item.product.price} TL
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        dispatch(updateCartItemCount(item.product.id, item.count - 1))
                      }
                      disabled={item.count <= 1}
                      className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-xs">{item.count}</span>
                    <button
                      onClick={() =>
                        dispatch(updateCartItemCount(item.product.id, item.count + 1))
                      }
                      className="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.product.id))}
                className="text-xs text-red-500 hover:underline"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex justify-center gap-3">
        <Link
          to="/cart"
          className="px-4 h-9 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 flex items-center justify-center whitespace-nowrap"
        >
          Sepete Git
        </Link>
        <Link
          to="/checkout"
          className="px-4 h-9 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 flex items-center justify-center whitespace-nowrap"
        >
          Siparişi Tamamla
        </Link>
      </div>
    </div>
  );
}