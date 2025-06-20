import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import {
  FaEnvelope,
  FaLock,
  FaEyeSlash,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userEmail = userCredential.user.email;

      if (userEmail === "admin@gmail.com") {
        navigate("/admin-dashboard");
      } else {
        setError("Access denied: Only admin can log in here.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid Credentials...");
      }
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2 flex items-center justify-center bg-[#eef1f6]">
        <img
          src="https://rdmsrevamp.rdcore.net/images/login/login-left-img.svg"
          alt="Login"
          className="w-full"
        />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="mb-10">
          <h1 className="font-bold text-2xl">Admin Login</h1>
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Email <span className="text-red-700">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Password <span className="text-red-700">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-11 pr-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600">
                <FaEyeSlash />
              </span>
            </div>
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-sm text-white px-1 py-2 rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-3 mt-3"
          >
            LOG IN <FaArrowRightToBracket />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
