import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import { tees } from "../data/productData"; // same product data
import { useCart } from "../context/CartContext"; // ✅ import cart context

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ use cart context
  const productId = parseInt(id, 10);

  // find currently selected product
  const product = tees.find((item) => item.id === productId);

  // state for search
  const [query, setQuery] = useState("");

  // filter products by search query
  const filteredProducts = tees.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* ✅ Selected Product Section */}
      {product ? (
        <div className="p-6 max-w-4xl mx-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md mx-auto mb-6 rounded-xl object-cover"
          />
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-red-400 mb-4">{product.price}</p>
          <p className="text-gray-300 mb-10">
            This is a race‑inspired streetwear item crafted with premium materials.
          </p>
          {/* ✅ Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <p className="text-gray-400">
            The product you’re looking for doesn’t exist.
          </p>
        </div>
      )}

      {/* ✅ Search Bar */}
      <div className="p-6 max-w-4xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full p-3 rounded-lg text-black focus:outline-none mb-6"
        />

        {/* ✅ Filtered Results or Empty State */}
        {query.trim() !== "" && filteredProducts.length === 0 ? (
          <p className="text-center text-gray-400">
            No products match your search.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                className="cursor-pointer bg-white/10 rounded-xl p-4 hover:bg-red-700 transition"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-gray-300">{p.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
