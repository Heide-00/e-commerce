import CategoryCard from "./CategoryCard"
import men from "../assets/images/shop-cards/men.png"
import women from "../assets/images/shop-cards/women.png"
import accessories from "../assets/images/shop-cards/accessories.png"
import kids from "../assets/images/shop-cards/kids.png"

export default function CategorySection() {
  return (
    <section className="px-4 py-8 md:px-16 md:py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black-900 uppercase tracking-wide">
          Editor's Pick
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch justify-center">
        <div className="flex justify-center">
          <CategoryCard image={men} label="MEN" />
        </div>

        <div className="flex justify-center">
          <CategoryCard image={women} label="WOMEN" />
        </div>

        <div className="flex flex-col justify-between items-center">
          <CategoryCard image={accessories} label="ACCESSORIES" />
          <CategoryCard image={kids} label="KIDS" />
        </div>
      </div>
    </section>
  )
}

















