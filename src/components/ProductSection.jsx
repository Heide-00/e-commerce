import ProductCard from "./ProductCard";
import fixed0 from "../assets/images/product-cards/fixed-height.png";
import fixed1 from "../assets/images/product-cards/fixed-height1.png";
import fixed2 from "../assets/images/product-cards/fixed-height2.png";
import fixed3 from "../assets/images/product-cards/fixed-height3.png";
import fixed4 from "../assets/images/product-cards/fixed-height4.png";
import fixed5 from "../assets/images/product-cards/fixed-height5.png";
import fixed6 from "../assets/images/product-cards/fixed-height6.png";
import fixed7 from "../assets/images/product-cards/fixed-height7.png";

export const products = [
  {
    id: "0",
    image: fixed0,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
  {
    id: "1",
    image: fixed1,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
  {
    id: "2",
    image: fixed2,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
  {
    id: "3",
    image: fixed3,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
  {
    id: "4",
    image: fixed4,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
  {
    id: "5",
    image: fixed5,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
  {
    id: "6",
    image: fixed6,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
  {
    id: "7",
    image: fixed7,
    title: "Graphic Design",
    department: "English Department",
    price: "$6.48",
    oldPrice: "$16.48",
    colors: ["blue", "green", "orange", "black"],
  },
];

export default function ProductSection() {
  return (
    <section className="w-full px-4 pt-4 pb-15">
      <div className="text-center mb-8">
        <h3 className="text-sm font-medium text-gray-500 tracking-wide">Featured Products</h3>
        <h2 className="text-xl font-semibold text-gray-800">BESTSELLER PRODUCTS</h2>
        <p className="text-sm text-gray-500 mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}