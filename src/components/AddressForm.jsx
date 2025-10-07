import { useState } from 'react';

export default function AddressForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    title: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
    district: '',
    neighborhood: '',
    address: '',
    ...initialData,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const cities = ['ankara', 'istanbul','Antalya','İzmir','Malatya'];

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      {/* Adres Başlığı */}
      <label className="text-sm text-gray-700">Adres Başlığı</label>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Ev, İş..."
        required
        className="border p-2 rounded"
      />

      {/* Ad */}
      <label className="text-sm text-gray-700">Ad</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Ad"
        required
        className="border p-2 rounded"
      />

      {/* Soyad */}
      <label className="text-sm text-gray-700">Soyad</label>
      <input
        name="surname"
        value={form.surname}
        onChange={handleChange}
        placeholder="Soyad"
        required
        className="border p-2 rounded"
      />

      {/* Telefon */}
     <label className="text-sm text-gray-700">Telefon</label>
      <input
       type="tel"
       name="phone"
       value={form.phone}
       onChange={handleChange}
       placeholder="05XXXXXXXXX"
       required
       pattern="^05\d{9}$"
       className="border p-2 rounded"
       title="Lütfen 05 ile başlayan 11 haneli bir numara girin"
       inputMode="numeric"
      />

      {/* İl */}
      <label className="text-sm text-gray-700">İl</label>
      <select
        name="city"
        value={form.city}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      >
        <option value="">İl Seç</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </option>
        ))}
      </select>

      {/* İlçe */}
      <label className="text-sm text-gray-700">İlçe</label>
      <input
        name="district"
        value={form.district}
        onChange={handleChange}
        placeholder="İlçe"
        required
        className="border p-2 rounded"
      />

      {/* Mahalle */}
      <label className="text-sm text-gray-700">Mahalle</label>
      <input
        name="neighborhood"
        value={form.neighborhood}
        onChange={handleChange}
        placeholder="Mahalle"
        required
        className="border p-2 rounded"
      />

      {/* Adres Detayları */}
      <label className="text-sm text-gray-700">Adres Detayları</label>
      <textarea
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Cadde, sokak, bina, daire..."
        required
        className="border p-2 rounded resize-none"
      />

      {/* Kaydet Butonu */}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Kaydet
      </button>
    </form>
  );
}