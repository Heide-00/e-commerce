import FooterContent from "../components/FooterContent";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-100 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-10 text-center">
        <FooterContent />
      </div>
    </footer>
  );
}
