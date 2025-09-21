export default function ShopDropdown() {
  return (
    <div className="flex gap-12 bg-white shadow-lg p-6 border rounded z-50">
       <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-700">Kadın</h3>
        <a href="/shop/women/bags" className="text-sm text-gray-600 hover:text-black">Bags</a>
        <a href="/shop/women/belts" className="text-sm text-gray-600 hover:text-black">Belts</a>
        <a href="/shop/women/cosmetics" className="text-sm text-gray-600 hover:text-black">Cosmetics</a>
         <a href="/shop/women/bags" className="text-sm text-gray-600 hover:text-black">Bags</a>
        <a href="/shop/women/hats" className="text-sm text-gray-600 hover:text-black">Hats</a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-700">Erkek</h3>
        <a href="/shop/men/bags" className="text-sm text-gray-600 hover:text-black">Bags</a>
        <a href="/shop/men/belts" className="text-sm text-gray-600 hover:text-black">Belts</a>
        <a href="/shop/men/cosmetics" className="text-sm text-gray-600 hover:text-black">Cosmetics</a>
         <a href="/shop/women/bags" className="text-sm text-gray-600 hover:text-black">Bags</a>
        <a href="/shop/men/hats" className="text-sm text-gray-600 hover:text-black">Hats</a>
      </div>
    </div>
  );
}