import promoImage from "../assets/images/container/hero-cover-1.png";

export default function PromoBanner() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={promoImage}
              alt="Neural Universe"
              className="max-w-full h-auto object-contain"
            />
          </div>

        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-sm uppercase tracking-wide text-gray-600">SUMMER 2020</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Part of the Neural Universe
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              We know how large objects will act, but things on a small scale.
            </p>

          <div className="flex justify-center md:justify-start gap-3 mt-4">
              <button className="w-28 h-8 text-[11px] bg-green-600 text-white rounded flex items-center justify-center hover:bg-green-700 transition">
                BUY NOW
              </button>
              <button className="w-28 h-8 text-[11px] border border-green-600 text-green-600 bg-white rounded flex items-center justify-center hover:bg-green-50 transition">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}