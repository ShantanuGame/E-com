import bgImage from "../../assets/background.jpeg"; // ✅ adjust to your actual file path
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // ✅ You could validate fields here
    navigate("/"); // ✅ redirect to Home
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-black/50 text-white placeholder-gray-300 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-black/50 text-white placeholder-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-semibold mt-2"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm text-gray-300">
          <Link to="/forgot-password" className="hover:text-white underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:text-white underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
