import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-white flex justify-between items-center p-6 shadow-md">
      <div className="text-xl font-semibold">Dashboard</div>
      <div className="relative mr-1">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <FaUserCircle className="text-2xl text-blue-600" />
          <span className="font-medium text-gray-700">Dinesh Babu N G</span>
          <IoMdArrowDropdown />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-[220px] bg-white rounded-md shadow-lg py-2 z-10">
            <div className="p-6 border-b flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3870/3870822.png"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-xs">Dinesh Babu N G</p>
                <p className="text-xs text-gray-500 font-bold">Administrator</p>
              </div>
            </div>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              to="/admin"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
