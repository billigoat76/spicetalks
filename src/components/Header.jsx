import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/slices/userSlice";
import { useState } from "react";

export default function Header() {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const username = localStorage.getItem("spicetalksuser");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-cream text-gray-500 border-b-2 border-red-600 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-orange-100 border-2 border-orange-400 rounded-full flex items-center justify-center">
            <Link to="/">
              <img
                src="https://img.freepik.com/premium-vector/vintage-spices-logo_872660-7.jpg?semt=ais_hybrid&w=740"
                alt="SpiceTalks Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </Link>
          </div>
          <h1 className="text-xl font-semibold">SpiceTalks</h1>
        </div>

        {/* Hamburger icon (only on mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Nav links - large screens */}
        <nav className="hidden lg:flex items-center gap-6 text-lg font-medium">
          <span className="text-sm">Online: {onlineStatus ? "🟢" : "🔴"}</span>
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/about" className="hover:text-red-500">About Us</Link>
          <Link to="/contact" className="hover:text-red-500">Contact Us</Link>
          <Link to="/grocery" className="hover:text-red-500">Grocery</Link>
          <Link to="/cart" className="hover:text-red-500">🛒 Cart ({cartItems.length})</Link>

          {username ? (
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold text-orange-600">Hi, {username}</span>
              <button
                onClick={handleLogout}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:text-red-500">Login</Link>
          )}
        </nav>
      </div>

      {/* Nav links - mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 text-base font-medium">
          <span className="text-sm">Online: {onlineStatus ? "🟢" : "🔴"}</span>
          <Link to="/" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <Link to="/grocery" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Grocery</Link>
          <Link to="/cart" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>🛒 Cart ({cartItems.length})</Link>

          {username ? (
            <div className="flex flex-col gap-2">
              <span className="text-orange-600">Hi, {username}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Login</Link>
          )}
        </div>
      )}
    </header>
  );
}
