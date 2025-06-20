import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { buyItem } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import confetti from "canvas-confetti";

const OrderConfirmationModal: React.FC = () => {
  const orderId = uuid();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  function handleProdNavi() {
    dispatch(buyItem());
    navigate("/products");
  }

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl w-full max-w-md relative flex flex-col">
        <button
          onClick={() => navigate("/products")}
          className="absolute top-3 right-3 text-white hover:text-gray-300"
        >
          ✕
        </button>

        <div className="text-center border-b border-gray-700 pb-4 mb-4">
          <CheckCircle className="text-green-500 w-10 h-10 mx-auto mb-2" />
          <h2 className="text-xl font-semibold">Your order is confirmed!</h2>
        </div>

        <div className="text-center flex-1">
          <p className="text-gray-300 mb-6">
            Your order <span className="font-bold text-white">#{orderId}</span>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
        </div>

        <div className="flex gap-4 w-full justify-center border-t border-gray-700 pt-4 mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium">
            Track your order
          </button>
          <button
            onClick={handleProdNavi}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-white font-medium"
          >
            Return to shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
