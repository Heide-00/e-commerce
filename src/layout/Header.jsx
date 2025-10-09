import {
  ShoppingCart,
  Heart,
  User,
  Search,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import ShopDropdown from "../layout/ShopDropdown";
import CartDropdown from "../layout/CartDropdown";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef();
  const cartRef = useRef();

  const cart = useSelector((state) => state.cart.cart);
  const cartCount = cart.reduce((total, item) => total + item.count, 0);
  const user = useSelector((state) => state.client.user);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 flex flex-col md:flex-row items-center justify-between gap-4 py-4">
        <Link to="/" className="text-2xl font-bold text-black">Bandage</Link>

        <nav className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm items-start md:items-center">
          <Link to="/" className="text-black hover:text-blue-600 transition">Home</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-sm text-black hover:text-blue-600 transition"
            >
              Shop
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 z-50">
                <ShopDropdown />
              </div>
            )}
          </div>

          <Link to="/about" className="text-black hover:text-blue-600 transition">About</Link>
          <Link to="/blog" className="text-black hover:text-blue-600 transition">Blog</Link>
          <Link to="/contact" className="text-black hover:text-blue-600 transition">Contact</Link>
          <Link to="/pages" className="text-black hover:text-blue-600 transition">Pages</Link>
          <Link to="/team" className="text-black hover:text-blue-600 transition">Team</Link>
          <Link to="/signup" className="text-sm text-black-600">Sign Up</Link>
        </nav>

        <div className="flex flex-wrap justify-end gap-2 md:gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-2">
              <Gravatar email={user.email} className="rounded-full w-8 h-8" />
              <span className="text-sm font-medium text-blue-600">{user.name}</span>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
              <User className="w-4 h-4" />
              Login / Register
            </Link>
          )}

          <Search className="w-5 h-5 text-blue-600 cursor-pointer" />

          <div className="relative" ref={cartRef}>
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="flex items-center gap-1">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">{cartCount}</span>
            </button>
            {isCartOpen && (
              <div className="absolute inset-x-0 top-full mt-2 z-50 flex justify-center">
                <CartDropdown />
              </div>
            )}
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


































































































