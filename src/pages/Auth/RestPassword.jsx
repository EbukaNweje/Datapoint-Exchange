import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import BG from "../../assets/bgnew.jpg";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const nav = useNavigate();

  return (
    <div
      className="flex h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
    >
      {/* Left Side - Background Image & Text */}
      <div className="hidden md:flex w-1/2 h-full items-center px-10">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">Set Your New Password</h1>
          <p className="text-lg">
            Choose a strong password to protect your account. Make sure both fields match.
          </p>
        </div>
      </div>

      {/* Right Side - Reset Password Card */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
          <button className="text-gray-600 text-xl" onClick={() => nav("/")}>
            &#8592;
          </button>
          <h2 className="text-2xl font-bold mt-2 text-center">Reset Password</h2>
          <p className="text-gray-500 text-center">Enter a new password for your account</p>

          <div className="mt-4 relative">
            <label className="block text-gray-600">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute top-10 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute top-10 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <div className="mt-4 relative">
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="absolute top-10 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute top-10 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(true)}
              />
            )}
          </div>

          <button className="w-full mt-6 bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
            Reset Password
          </button>

          <p className="text-center mt-4 text-gray-600">
            Back to <span className="text-blue-600 cursor-pointer" onClick={() => nav("/auth/login")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
