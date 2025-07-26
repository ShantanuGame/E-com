import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background.jpeg"; // adjust path if needed
import { ReactTyped } from "react-typed"; // ✅ Import



const categories = [
  { id: "tees", name: "Tees" },
  { id: "jackets", name: "Jackets" },
  { id: "caps", name: "Caps" },
  { id: "accessories", name: "Accessories" },
  { id: "limited", name: "Limited" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
 <div
      className="min-h-screen text-white bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Header/>

      {/* Hero Section */}
   <section className="h-[80vh] flex flex-col justify-center items-center text-center px-10 bg-black/0.2 backdrop-blur-[1px]">
  {/* TOP: Hero content */}
  <div className="max-w-xl mb-10 ">
    <h1 className="text-4xl font-bold mb-4 ">F1 Streetwear</h1>
    <p className="mb-6 text-lg">Race‑inspired apparel for the streets</p>
    <button
      onClick={() => navigate("/category/tees")}
      className="bg-white text-black px-6 py-2 rounded-lg font-semibold"
    >
      View All
    </button>
  </div>

  {/* BOTTOM: Info paragraph */}
  <div className="max-w-2xl min-h-[200px]">
          <h2 className="text-1xl md:text-2xl font-bold mb-4 drop-shadow-lg">
            About Our Brand
          </h2>
          <ReactTyped
            className="text-md leading-relaxed drop-shadow "
            strings={[
              "At F1 Streetwear, we merge the adrenaline of Formula 1 with modern urban fashion. Our collections are crafted for enthusiasts who crave speed, style, and performance in every outfit. From high‑quality tees to limited‑edition accessories, every piece is designed to keep you ahead of the curve.",
            ]}
            typeSpeed={30}
            showCursor={true}
          />
        </div>
</section>



      {/* Categories */}
      <section className="p-6 grid grid-cols-2 md:grid-cols-5 gap-4 bg-black/0.5  backdrop-blur-sm rounded-xl">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            onClick={() => index === 0 && navigate(`/category/${cat.id}`)}
            className={`cursor-pointer p-4 rounded-lg text-center border border-white-600 hover:bg-red-800 transition`}
          >
            {cat.name}
          </div>
        ))}
      </section>
    </div>
  );
}
