import {
  FaTachometerAlt,
  FaTruck,
  FaListAlt,
  FaPowerOff,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r">
      <div className="p-6 border-b">
        <h1 className="text-xl font-semibold text-gray-800">MediCare</h1>
      </div>
      <div className="p-6 border-b flex items-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3870/3870822.png"
          alt="User Avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm">Dinesh Babu N G</p>
          <p className="text-xs text-gray-500 font-bold">Administrator</p>
        </div>
      </div>
      <nav className="flex flex-col p-4 gap-4 text-sm text-gray-700">
        <Link
          to="/admin-dashboard"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <FaTachometerAlt className="text-lg" /> Dashboard
        </Link>
        <Link
          to="/medicines"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <FaTruck className="text-lg" /> Inventory
        </Link>
        <Link to="/orderpage" className="flex items-center gap-3 hover:text-blue-600">
          <FaListAlt className="text-lg" /> Order Page
        </Link>
        <Link to="/admin" className="flex items-center gap-3 hover:text-blue-600">
          <FaPowerOff className="text-lg" /> Logout
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
