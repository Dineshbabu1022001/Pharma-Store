import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebaseConfig";
import { FaEnvelope, FaLock, FaArrowRightToBracket } from "react-icons/fa6";

const UserLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="h-screen flex">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-[#eef1f6]">
        <img
          src="https://rdmsrevamp.rdcore.net/images/login/login-left-img.svg"
          alt="Login"
          className="w-full max-w-md"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6">
        <div className="mb-10">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-700 text-center">
            User Login
          </h1>
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="pl-11 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pl-11 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            Log In <FaArrowRightToBracket />
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link
            to="/user-register"
            className="text-green-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
