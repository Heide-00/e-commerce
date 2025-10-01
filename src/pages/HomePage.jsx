import Header from "../layout/Header";
import HeroSlider from "../components/HeroSlider";
import ProductSection from "../components/ProductSection";
import CategorySection from "../components/CategorySection";
import SliderSection from "../components/SliderSection";
import PromoBanner from "../components/PromoBanner";
import BlogSection from "../components/BlogSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <HeroSlider />
        <main className="flex flex-col gap-12 py-8">
          <CategorySection />
          <ProductSection />
          <SliderSection />
          <PromoBanner />
          <BlogSection />
         </main>
      </div>
    </div>
  );
}






