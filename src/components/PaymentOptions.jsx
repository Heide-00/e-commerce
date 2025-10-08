export default function PaymentOptions({ selected, onChange }) {
  return (
    <fieldset className="w-full bg-white p-4 rounded shadow flex flex-col gap-4 border border-gray-200">
      <legend className="text-lg font-semibold">Ödeme Seçenekleri</legend>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          id="payment-card"
          name="payment"
          value="card"
          checked={selected === 'card'}
          onChange={(e) => onChange(e.target.value)}
          className="accent-blue-500"
        />
        <span htmlFor="payment-card">Banka / Kredi Kartı</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          id="payment-credit"
          name="payment"
          value="credit"
          checked={selected === 'credit'}
          onChange={(e) => onChange(e.target.value)}
          className="accent-blue-500"
        />
        <span htmlFor="payment-credit">Alışveriş Kredisi</span>
      </label>
    </fieldset>
  );
}