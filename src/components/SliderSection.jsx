import { useState } from "react";
import hero1 from "../assets/images/hero-slider/shop-hero-1.png";

const slides = [
  {
    image: hero1,
    title: "SUMMER 2020",
    subtitle: "Vita Classic Product",
    description:
      "We know how large objects will act. We know how are objects will act. We know",
    price: "$16.48",
  },
  {
    image: hero1,
    title: "AUTUMN 2020",
    subtitle: "Vita Classic Product",
    description:
      "We know how large objects will act. We know how are objects will act. We know",
    price: "$16.48",
  },
];

export default function SliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full bg-green-300 py-10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 sm:px-6 md:px-8">
                <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8">
                 <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={slide.image}
                      alt={slide.subtitle}
                      className="w-64 md:w-80 object-cover rounded"
                    />
                  </div>

                 <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-sm uppercase tracking-wide text-white">
                      {slide.title}
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                      {slide.subtitle}
                    </h1>
                    <p className="text-sm md:text-base text-white">{slide.description}</p>
                    <p className="text-lg font-semibold text-white">{slide.price}</p>
                    <button className="mt-2 px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl sm:text-4xl md:text-5xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-3xl sm:text-4xl md:text-5xl"
      >
        ›
      </button>
    </section>
  );
}