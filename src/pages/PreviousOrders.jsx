import { useEffect, useState } from "react";
import axios from "axios";

export default function PreviousOrders({ token }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/order", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setOrders(res.data))
    .catch(err => console.error("Siparişler alınamadı:", err));
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Geçmiş Siparişler</h2>
      {orders.length === 0 ? (
        <p>Henüz siparişiniz yok.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <details key={order.id} className="border rounded p-4">
              <summary className="cursor-pointer font-medium">
                Sipariş #{order.id} - {new Date(order.order_date).toLocaleDateString()} - ₺{order.price}
              </summary>
              <div className="mt-2 text-sm text-gray-700">
                <p><strong>Adres ID:</strong> {order.address_id}</p>
                <p><strong>Kart Sahibi:</strong> {order.card_name}</p>
                <p><strong>Kart No:</strong> **** **** **** {order.card_no.slice(-4)}</p>
                <p><strong>Ürünler:</strong></p>
                <ul className="list-disc ml-6">
                  {order.products.map((p, i) => (
                    <li key={i}>
                      #{p.product_id} - {p.count} adet - {p.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}