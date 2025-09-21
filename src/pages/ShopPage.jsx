export default function ShopPage() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shop</h1>
        
        <div className="grid grid-cols-1 gap-6 md:hidden">
          <div className="bg-white p-4 rounded shadow">Mobil Ürün 1</div>
          <div className="bg-white p-4 rounded shadow">Mobil Ürün 2</div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">Desktop Ürün 1</div>
          <div className="bg-white p-4 rounded shadow">Desktop Ürün 2</div>
          <div className="bg-white p-4 rounded shadow">Desktop Ürün 3</div>
        </div>
      </div>
    </div>
  );
}