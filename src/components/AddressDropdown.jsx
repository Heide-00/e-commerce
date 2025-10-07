export default function AddressDropdown({ addresses, selectedId, onSelect }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value !== '') {
      onSelect(value);
    }
  };

  return (
    <div className="w-full">
      <select
        value={selectedId || ''}
        onChange={handleChange}
        className="border p-2 rounded w-full bg-white text-gray-800"
      >
 
   <option value="" disabled>
          Adres Seçin
        </option>

   {addresses.length === 0 ? (
          <option disabled className="text-gray-500">
            Kayıtlı adres bulunamadı
          </option>
        ) : (
          addresses.map((addr) => (
            <option key={addr.id} value={String(addr.id)}>
              {addr.title} ({addr.name} {addr.surname}) - {addr.city}, {addr.district}
            </option>
          ))
        )}
      </select>
    </div>
  );
}