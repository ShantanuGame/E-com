import { useCart } from "../context/CartContext.jsx";
import Header from "../components/Header";

export default function CartPage() {
  const { cartItems, updateQuantity, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white/10 p-4 rounded-lg"
                >
                  {/* Product details */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-300">{item.price}</p>
                    </div>
                  </div>

                  {/* Quantity adjust */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal and checkout */}
            <div className="text-right space-y-4">
              <p className="text-xl font-bold">Subtotal: ₹{subtotal}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
                onClick={() => alert('Checkout flow not implemented in this prototype!')}
                >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
