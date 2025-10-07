export default function PaymentOptions({ selected, onChange }) {
  return (
    <div className="w-full bg-white p-4 rounded shadow flex flex-col gap-4 border border-gray-200">
      <h2 className="text-lg font-semibold">Ödeme Seçenekleri</h2>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="payment"
          value="card"
          checked={selected === 'card'}
          onChange={(e) => onChange(e.target.value)}
        />
        <span>Banka / Kredi Kartı</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="payment"
          value="credit"
          checked={selected === 'credit'}
          onChange={(e) => onChange(e.target.value)}
        />
        <span>Alışveriş Kredisi</span>
      </label>
    </div>
  );
}