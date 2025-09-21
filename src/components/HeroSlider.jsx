import { useState } from "react";
import hero1 from "../assets/images/hero/shop-hero1.png";

const slides = [
  {
    image: hero1,
    title: "SUMMER 2020",
    subtitle: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
  },
  {
    image: hero1,
    title: "AUTUMN 2020",
    subtitle: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-1">
                  <div className="text-white text-center max-w-md mx-auto">
                    <h2 className="text-sm uppercase tracking-wide">{slide.title}</h2>
                    <h1 className="text-3xl md:text-5xl font-bold">{slide.subtitle}</h1>
                    <p className="text-sm md:text-base mt-2">{slide.description}</p>
                    <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 transition rounded">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl sm:text-4xl md:text-5xl"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl sm:text-4xl md:text-5xl"
        >
          ›
        </button>
      </div>
    </section>
  );
}