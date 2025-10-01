export default function CategoryCard({ image, label }) {
  return (
    <div className="relative w-full aspect-[3/4] max-w-[300px] overflow-hidden rounded-md bg-white">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-semibold text-black-900">
        {label}
      </div>
    </div>
  )
}



