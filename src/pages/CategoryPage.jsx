import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { tees } from "../data/productData"; // import your product data

export default function CategoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // For now, we only handle 'tees'
  const products = id === "tees" ? tees : [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Title */}
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold mb-2 capitalize">{id} Collection</h2>
        <p className="text-gray-400">Explore our {id} lineup</p>
      </div>

      {/* Product Grid */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
  key={product.id}
  onClick={() => navigate(`/product/${product.id}`)}
  className="relative cursor-pointer rounded-xl overflow-hidden group h-64"
>
  {/* Full cover image */}
  <img
    src={product.image}
    alt={product.name}
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />

  {/* Overlay (semi-transparent for readability) */}
  <div className="absolute inset-0 bg-black/15 flex flex-col justify-end p-4">
    <h3 className="text-lg font-bold">{product.name}</h3>
    <p className="text-gray-200">{product.price}</p>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}
