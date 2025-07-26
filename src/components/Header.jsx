import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [cartCount] = useState(2); // later connect to cart context
  const navigate = useNavigate();

  return (
    <header className="bg-transparent text-white px-6 py-4 flex justify-between items-center fixed w-full z-10">
      {/* Brand */}
      <Link to="/" className="text-4xl font-bold tracking-wide text-white">
        F1 Streetwear
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-4 text-sm relative">
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 transition"
          title="Go Back"
        >
          ⬅
        </button>

        {/* 🔜 Forward Button */}
        <button
          onClick={() => navigate(1)}
          className="px-3 py-1 rounded-md bg-white/20 hover:bg-white/30 transition"
          title="Go Forward"
        >
          ➡
        </button>

        {/* 🛒 Cart Link */}
        <Link to="/cart" className="relative group text-white text-xl">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-1">
              {cartCount}
            </span>
          )}
        </Link>

        {/* 🔑 Login Link */}
        <Link
          to="/login"
          className="hover:text-red-600 transition text-white font-bold"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
