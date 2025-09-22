import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  image,
  title,
  department,
  price,
  oldPrice,
  colors
}) {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col items-center gap-4 text-center border rounded-md p-4 hover:shadow-md transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full aspect-[3/4] object-cover rounded-md"
      />

     <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
        {department && (
          <p className="text-sm text-gray-500">{department}</p>
        )}
      </div>

     <div className="flex gap-2 items-center justify-center">
        {oldPrice && (
          <span className="text-sm text-gray-400">{oldPrice}</span>
        )}
        <span className="text-sm text-green-600 font-semibold">{price}</span>
      </div>

      
      {colors?.length > 0 && (
        <div className="flex gap-2 justify-center mt-1">
          {colors.map((color, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </Link>
  );
}