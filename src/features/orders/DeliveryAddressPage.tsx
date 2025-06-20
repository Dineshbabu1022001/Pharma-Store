import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../services/store";
import { useNavigate } from "react-router-dom";
import usePlaceOrder from "../../hooks/Orders/useOrder";
import useCurrentUser from "../../hooks/User/useCurrentUser";
import {
  addressFormFields,
  addressInitialValues,
} from "../../constants/AddAddress";
import { addressValidationSchema } from "../../utils/formAddressValidate";
import { clearCart } from "../cart/cartSlice";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { v4 as uuid } from "uuid";
import type { OrderPayload } from "../../types/order";

const DeliveryAddressPage = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const { mutate: placeOrder, status } = usePlaceOrder();
  const isLoading = status === "pending";

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity ?? 1),
    0
  );
  const shipping = totalAmount > 500 ? 0 : 150;
  const grandTotal = totalAmount + shipping;

  const handleSubmit = (values: typeof addressInitialValues) => {
    if (!user) {
      alert("Please log in to place an order.");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderPayload: OrderPayload = {
      id: uuid(),
      userId: user.uid,
      userEmail: user.email,
      items: cartItems.map((item) => ({
        ...item,
        quantity: item.quantity ?? 1,
      })),
      address: values,
      email: user?.email || "",
      totalAmount: grandTotal,
      placedAt: new Date().toISOString(),
    };

    placeOrder(orderPayload, {
      onSuccess: () => {
        dispatch(clearCart());
        navigate("/products/cart/orders/orderSucess");
      },
      onError: () => {
        alert("Failed to place order, please try again.");
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col lg:flex-row bg-gray-50 px-4 py-8 gap-8">
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
            Delivery Address
          </h2>
          <Formik
            initialValues={addressInitialValues}
            validationSchema={addressValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addressFormFields.map((field) => (
                <div
                  key={field.name}
                  className={field.span === 2 ? "col-span-1 md:col-span-2" : ""}
                >
                  <Field
                    name={field.name}
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    className="border border-gray-300 rounded-lg p-3 w-full"
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              ))}

              <div>
                <Field
                  name="country"
                  type="text"
                  readOnly
                  className="border border-gray-300 rounded-lg p-3 bg-gray-100 text-gray-600 w-full"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold transition ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-indigo-700"
                  }`}
                >
                  {isLoading ? "Placing Order..." : "Continue to Order Summary"}
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-xl p-6 h-fit">
            <h3 className="text-xl font-bold text-indigo-700 mb-4">
              Order Summary
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-green-600" : ""}>
                  {shipping === 0 ? "Free" : `₹${shipping}`}
                </span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg text-indigo-800">
                <span>Total</span>
                <span>₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DeliveryAddressPage;
