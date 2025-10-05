import { ArrowRight } from "lucide-react";

export default function OrderSummary({ total }) {
  const shippingFee = total >= 150 ? 0 : 29.99;
  const discount = total * 0.05;
  const grandTotal = total + shippingFee - discount;

  return (
    <div className="w-full md:w-1/3 bg-white p-4 rounded shadow flex flex-col gap-4 border border-gray-200">
      <h2 className="text-lg font-semibold">Sipariş Özeti</h2>

      <div className="flex justify-between text-sm">
        <span>Ürünlerin Toplamı:</span>
        <span>₺{total.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Kargo Ücreti:</span>
        <span>₺{shippingFee.toFixed(2)}</span>
      </div>

      {shippingFee === 0 && (
        <div className="flex justify-between text-sm text-red-500">
          <span>150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar):</span>
          <span>-₺{(29.99).toFixed(2)}</span>
        </div>
      )}

      {shippingFee > 0 && (
  <div className="text-xs text-gray-500 italic">
    150 TL ve üzeri alışverişlerde kargo ücretsiz!
  </div>
)}

<div className="flex justify-between text-sm text-red-500">
        <span>İndirim:</span>
        <span>-₺{discount.toFixed(2)}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-bold text-md">
        <span>Toplam:</span>
        <span>₺{grandTotal.toFixed(2)}</span>
      </div>

      <div className="mt-2">
        <input
          type="text"
          placeholder="+ İNDİRİM KODU GİR"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          disabled
        />
      </div>

      <button
        className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition flex items-center justify-center gap-2"
        disabled
      >
        Sepeti Onayla
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}