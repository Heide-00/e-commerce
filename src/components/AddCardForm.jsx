import { useState } from 'react';
import { addCard } from '../api/cardApi';

export default function AddCardForm({ onSuccess }) {
  const [form, setForm] = useState({
    card_no: '',
    expire_month: '',
    expire_year: '',
    name_on_card: '',
    use3DSecure: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { card_no, expire_month, expire_year, name_on_card } = form;
      await addCard({ card_no, expire_month, expire_year, name_on_card });
      if (onSuccess) onSuccess(); // Listeyi yenilemek için
      setForm({
        card_no: '',
        expire_month: '',
        expire_year: '',
        name_on_card: '',
        use3DSecure: false,
      });
    } catch (error) {
      console.error('Kart eklenemedi:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded shadow-sm bg-white">
      <h3 className="text-lg font-semibold">Yeni Kart Ekle</h3>

      <input
        type="text"
        name="card_no"
        placeholder="Kart Numarası"
        value={form.card_no}
        onChange={handleChange}
        className="border p-2 rounded"
        maxLength={16}
        required
      />

      <div className="flex gap-2">
        <input
          type="number"
          name="expire_month"
          placeholder="Ay"
          value={form.expire_month}
          onChange={handleChange}
          className="w-1/2 border p-2 rounded"
          min={1}
          max={12}
          required
        />
        <input
          type="number"
          name="expire_year"
          placeholder="Yıl"
          value={form.expire_year}
          onChange={handleChange}
          className="w-1/2 border p-2 rounded"
          min={2025}
          required
        />
      </div>

      <input
        type="text"
        name="name_on_card"
        placeholder="Kart Üzerindeki İsim"
        value={form.name_on_card}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="use3DSecure"
          checked={form.use3DSecure}
          onChange={handleChange}
        />
        <span className="text-sm">3D Secure ile ödemek istiyorum</span>
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Kaydet
      </button>
    </form>
  );
}