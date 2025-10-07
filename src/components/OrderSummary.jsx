export default function OrderSummary({ total }) {
  const shippingFee = total >= 150 ? 0 : 29.99;
  const discount = total * 0.05;
  const grandTotal = total + shippingFee - discount;

  return (
    <div className="w-full max-w-md bg-white p-4 rounded-md shadow-md border border-gray-200 mx-auto">
      <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Ürünlerin Toplamı:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Kargo Ücreti:</span>
        <span>${shippingFee.toFixed(2)}</span>
      </div>

      {shippingFee > 0 && (
        <div className="text-xs text-gray-500 italic mb-2">
          150$ ve üzeri alışverişlerde kargo ücretsiz!
        </div>
      )}

      <div className="flex justify-between text-sm text-red-600 mb-2">
        <span>İndirim:</span>
        <span>-${discount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-base font-bold mt-4 mb-4">
        <span>Toplam:</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="+ İNDİRİM KODU GİR"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100 text-gray-500 cursor-not-allowed"
          disabled
        />

        <button
          className="w-full bg-orange-400 text-white text-sm font-medium py-3 rounded-md hover:bg-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          Sepeti Onayla →
        </button>
      </div>
    </div>
  );
}

