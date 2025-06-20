import { createBrowserRouter } from "react-router-dom";
import AdminLoginPage from "../auth/AdminLogin";
import AdminDashboard from "../features/dashboard/layout/admin/AdminDashboard";
import Home from "../pages/Home";
import UserLogin from "../components/userAuth/UserLogin";
import UserRegister from "../components/userAuth/UserRegister";
import ProductPage from "../pages/userPage/ProductPage";
import AddMedicineForm from "../features/dashboard/layout/form/AddMedicineForm";
import MedicineInventory from "../features/dashboard/layout/admin/MedicineInventory";
import Shop from "../pages/Shop";
import CartPage from "../features/cart/Cart";
import DeliveryAddressPage from "../features/orders/DeliveryAddressPage";
import AllOrderPage from "../features/dashboard/layout/admin/OrderPage";
import OrderConfirmationModal from "../features/orders/OrderSucessModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/admin",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
  {
    path: "/user-register",
    element: <UserRegister />,
  },
  {
    path: "/user-dashboard",
    element: <ProductPage />,
  },

  {
    path: "/medicines",
    element: <MedicineInventory />,
  },
  {
    path: "/medicines/add-medicine",
    element: <AddMedicineForm />,
  },
  {
    path: "/edit-medicine/:id",
    element: <AddMedicineForm />,
  },
  {
    path: "/orderpage",
    element: <AllOrderPage />,
  },
  {
    path: "/products",
    element: <Shop />,
  },
  {
    path: "/products/cart",
    element: <CartPage />,
  },
  {
    path: "/products/cart/orders",
    element: <DeliveryAddressPage />,
  },
  {
    path: "/products/cart/orders/orderSucess",
    element: <OrderConfirmationModal />,
  },
]);
export default router;
