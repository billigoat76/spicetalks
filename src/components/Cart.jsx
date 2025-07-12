// Cart.jsx
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/slices/cartSlice';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.price || item.defaultPrice || 0),
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-xl">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 tracking-tight">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is currently empty. Add some delicious items!</p>
      ) : (
        <div className="space-y-8">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                <p className="text-md text-gray-700 mt-1">₹{(item.price || item.defaultPrice) / 100}</p>
              </div>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${item.imageId}`}
                alt={item.name}
                className="w-24 h-20 object-cover rounded-xl border border-gray-300"
              />
            </div>
          ))}

          <div className="text-right border-t pt-6">
            <p className="text-2xl font-bold text-gray-900">
              Total: ₹{totalAmount / 100}
            </p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={handleClearCart}
                className="px-5 py-2 text-red-500 border border-red-300 rounded-lg hover:bg-red-50 transition"
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
