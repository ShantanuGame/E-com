import bgImage from "../../assets/background.jpeg"; // ✅ adjust to your actual file path
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ You could capture data here
    navigate("/"); // ✅ redirect to Home
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md mx-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-black/50 text-white placeholder-gray-300 focus:outline-none"
          />
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
            Create Account
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="hover:text-white underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
