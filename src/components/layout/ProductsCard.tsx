import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import type { ProductProps } from "../../types/product";

const ProductCard = ({
  id,
  name,
  price,
  image,
  stock,
}: Omit<ProductProps, "quantity">) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image, stock }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-4 flex flex-col items-center text-center">
      <div className="w-full h-40 mb-4 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-gray-800 font-semibold text-sm mb-1 line-clamp-2">
        {name}
      </h3>
      <p className="text-green-600 font-bold text-md mb-3">
        ₹{price.toLocaleString()}
      </p>

      <button
        onClick={handleAddToCart}
        className={`${
          stock == 0
            ? "bg-gray-300 font-bold text-white cursor-not-allowed hover:bg-gray-200 text-sm px-5 py-2 rounded-full transition"
            : "bg-green-500 hover:bg-green-600 text-white text-sm px-5 py-2 rounded-full transition"
        }`}
      >
        {stock == 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
