export default function InstallmentOptions({ totalAmount = 6604.27 }) {
  const options = [
    { count: 1, label: 'Tek Çekim' },
    { count: 3, label: '3 Taksit' },
    { count: 6, label: '6 Taksit' },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 border rounded shadow-sm bg-white">
      <h3 className="text-lg font-semibold">Taksit Seçenekleri</h3>

      <ul className="flex flex-col gap-2">
        {options.map((opt) => {
          const monthly = (totalAmount / opt.count).toFixed(2);
          return (
            <li key={opt.count} className="flex justify-between items-center text-sm">
              <span>{opt.label}</span>
              <span>{opt.count} x {monthly} Dolar</span>
            </li>
          );
        })}
      </ul>

      <p className="text-sm font-medium mt-2">Toplam: {totalAmount.toFixed(2)} Dolar</p>
    </div>
  );
}