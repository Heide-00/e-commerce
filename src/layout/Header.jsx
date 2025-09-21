import { ShoppingCart, Heart, User, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShopDropdown from "../components/ShopDropdown";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
       <Link to="/" className="text-2xl font-bold text-black ml-4">Bandage</Link>
       <nav className="flex flex-wrap gap-4 text-sm items-center">
          <Link to="/">Home</Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-sm text-black hover:text-blue-600 transition"
              aria-expanded={isDropdownOpen}
            >
              Shop
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 z-[999]">
                <ShopDropdown />
              </div>
            )}
          </div>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages">Pages</Link>
        </nav>

        <div className="flex items-center gap-4 pr-4">
          <Link to="/login" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
            <User className="w-4 h-4" />
            Login / Register
          </Link>
          <Search className="w-5 h-5 text-blue-600 cursor-pointer" />
          <div className="flex items-center gap-1">
            <ShoppingCart className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">1</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">1</span>
          </div>
        </div>
      </div>
    </header>
  );
}

























































