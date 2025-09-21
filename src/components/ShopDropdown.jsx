import { Link } from "react-router-dom";

export default function ShopDropdown() {
  return (
    <div className="flex gap-12 bg-white shadow-lg p-6 border rounded z-50">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-700">Kadın</h3>
        <Link to="/shop/women/bags" className="text-sm text-gray-600 hover:text-black">Bags</Link>
        <Link to="/shop/women/belts" className="text-sm text-gray-600 hover:text-black">Belts</Link>
        <Link to="/shop/women/cosmetics" className="text-sm text-gray-600 hover:text-black">Cosmetics</Link>
        <Link to="/shop/women/hats" className="text-sm text-gray-600 hover:text-black">Hats</Link>
      </div>
        <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-700">Erkek</h3>
        <Link to="/shop/men/bags" className="text-sm text-gray-600 hover:text-black">Bags</Link>
        <Link to="/shop/men/belts" className="text-sm text-gray-600 hover:text-black">Belts</Link>
        <Link to="/shop/men/cosmetics" className="text-sm text-gray-600 hover:text-black">Cosmetics</Link>
        <Link to="/shop/men/hats" className="text-sm text-gray-600 hover:text-black">Hats</Link>
      </div>
    </div>
  );
}