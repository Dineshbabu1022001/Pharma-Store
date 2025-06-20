import { useState } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../services/store";
import { clearCart } from "../../features/cart/cartSlice";
import useCurrentUser from "../../hooks/User/useCurrentUser";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartLength = cartItems.length;

  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const user = useCurrentUser();

  const handleLogout = () => {
    signOut(auth);
    setShowProfile(false);
    dispatch(clearCart());
    navigate("/user-login");
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md relative z-50">
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-green-600 cursor-pointer"
      >
        NOVA - PHARMACY
      </div>

      <ul className="flex gap-10 text-gray-700 font-medium text-base">
        <Link to="/products" className="hover:text-green-600 transition">
          Shop
        </Link>
        <Link to="#" className="hover:text-green-600 transition">
          Features
        </Link>
        <Link to="#" className="hover:text-green-600 transition">
          Medicine
        </Link>
      </ul>

      <div className="flex items-center gap-6 text-gray-700 text-lg relative">
        <FaSearch className="cursor-pointer text-3xl hover:text-green-600" />

        <div className="relative group">
          {!user ? (
            <button
              onClick={() => navigate("/user-login")}
              className="bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-white font-medium"
            >
              Login
            </button>
          ) : (
            <div
              onClick={() => setShowProfile((prev) => !prev)}
              className="cursor-pointer w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold hover:bg-gray-700"
              title={user?.displayName || "User"}
            >
              {user?.displayName?.charAt(0) ?? "U"}
            </div>
          )}

          {showProfile && user && (
            <div className="absolute right-0 top-12 w-64 bg-white shadow-lg rounded-md p-4 text-sm border z-50">
              <p className="text-gray-800 font-semibold mb-1">
                {user.displayName || "No Name"}
              </p>
              <p className="text-gray-600 mb-4">{user.email}</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          <Link to="/products/cart">
            <FaShoppingBag className="cursor-pointer text-3xl hover:text-green-600" />
          </Link>
          {cartLength > 0 && (
            <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs px-1.5 rounded-full">
              {cartLength}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
