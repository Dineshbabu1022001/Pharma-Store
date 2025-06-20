import { FaTrashAlt, FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../services/store";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartSlice";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../../hooks/User/useCurrentUser";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const CartPage = () => {
  const user = useCurrentUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemss = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItemss.reduce((acc, item) => {
    if (item.stock === 0) return acc;
    return acc + item.price * (item.quantity ?? 1);
  }, 0);

  const shipping = subtotal > 500 ? 0 : 150;
  const total = subtotal + shipping;

  const handleDecreaseQuantity = (id: string | number) => {
    dispatch(decreaseQuantity(id));
  };
  const handleIncreaseQuantity = (id: string | number) => {
    dispatch(increaseQuantity(id));
  };
  const handleRemoveFromCart = (id: string | number) => {
    dispatch(removeFromCart(id));
  };
  const handleCheckout = () => {
    if (!user) {
      alert("Please Login to continue Your Orders");
      navigate("/user-login");
    } else {
      navigate("/products/cart/orders");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <main className="flex-1 p-6 bg-gray-50 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-3 text-gray-800">
            <FaShoppingCart className="text-5xl text-indigo-600" />
            Your Shopping Cart
          </h1>

          <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              {cartItemss.length === 0 ? (
                <p className="text-center text-gray-500 text-lg h-[70vh]">
                  Your cart is empty
                </p>
              ) : (
                cartItemss.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b border-gray-200 py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1 ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      {item.stock > 0 && (
                        <p className="font-bold mt-1 text-indigo-600">
                          ₹{item.price.toLocaleString()}
                        </p>
                      )}
                    </div>

                    {item.stock === 0 ? (
                      <p className="text-red-600 font-semibold ml-2 mr-12 text-3xl">
                        Out of Stock
                      </p>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          disabled={item.quantity == 1}
                          className={`p-2 rounded-full   ${
                            item.quantity === 1
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-indigo-100 hover:bg-indigo-200"
                          }`}
                        >
                          <FaMinus />
                        </button>
                        <span className="w-6 text-center font-medium">
                          {item.quantity ?? 1}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className={`p-2 rounded-full ${
                            item.quantity! >= item.stock
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-indigo-100 hover:bg-indigo-200"
                          }`}
                          disabled={item.quantity! >= item.stock}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="ml-6 text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItemss.length > 0 && (
              <div className="w-full md:w-80 bg-indigo-50 rounded-lg p-6 flex flex-col gap-4 shadow-inner">
                <h3 className="text-xl font-semibold text-indigo-700">
                  Order Summary
                </h3>

                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
                    {shipping === 0 ? "Free" : `₹${shipping}`}
                  </span>
                </div>
                <div className="border-t border-indigo-300"></div>
                <div className="flex justify-between font-bold text-lg text-indigo-900">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={cartItemss.length === 0}
                  type="button"
                  className={`mt-6 w-full py-3 rounded-lg transition duration-300 font-semibold text-white 
                ${
                  cartItemss.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
