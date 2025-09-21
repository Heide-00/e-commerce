export default function ProductCard({ image, title, department, price, oldPrice, colors }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
        <img
        src={image}
        alt={title}
        className="w-full aspect-[3/4] object-cover rounded-md"
      />

     <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{department}</p>
      </div>

     <div className="flex gap-2 items-center justify-center">
    <span className="text-sm text-gray-500">{oldPrice}</span>
    <span className="text-sm text-green-600 font-semibold">{price}</span>
  </div>

  <div className="flex gap-2 justify-center mt-1">
        {colors?.map((color, i) => (
          <span
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}