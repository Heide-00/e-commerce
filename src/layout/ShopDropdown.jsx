import { useHistory } from "react-router-dom";

export default function ShopDropdown() {
  const history = useHistory();

  const categories = [
    { id: 1, name: "bags" },
    { id: 2, name: "belts" },
    { id: 3, name: "cosmetics" },
    { id: 4, name: "hats" },
  ];

  const handleClick = (gender, category) => {
    history.push(`/shop/${gender}/${category.name}/${category.id}`);
  };

  return (
    <div className="flex gap-12 bg-white shadow-lg p-6 border rounded z-50">
      {/* Kadın Kategorileri */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-700">Kadın</h3>
        {categories.map((cat) => (
          <button
            key={`women-${cat.id}`}
            onClick={() => handleClick("women", cat)}
            className="text-sm text-gray-600 hover:text-black text-left"
          >
            {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
          </button>
        ))}
      </div>

      {/* Erkek Kategorileri */}
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-700">Erkek</h3>
        {categories.map((cat) => (
          <button
            key={`men-${cat.id}`}
            onClick={() => handleClick("men", cat)}
            className="text-sm text-gray-600 hover:text-black text-left"
          >
            {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}