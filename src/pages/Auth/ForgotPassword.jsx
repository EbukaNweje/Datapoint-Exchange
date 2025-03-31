import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from "../../assets/bgnew.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  return (
    <div
      className="flex h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
    >
      {/* Left Side - Background Image & Text */}
      <div className="hidden md:flex w-1/2 h-full items-center px-10">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Reset Your Password Securely
          </h1>
          <p className="text-lg">
            Enter your email address, and we will send you instructions to reset your password.
          </p>
        </div>
      </div>

      {/* Right Side - Forgot Password Card */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
          <button className="text-gray-600 text-xl" onClick={() => nav("/auth/login")}>
            &#8592;
          </button>
          <h2 className="text-2xl font-bold mt-2 text-center">Forgot Password</h2>
          <p className="text-gray-500 text-center">
            Enter your email to receive reset instructions
          </p>

          <div className="mt-4">
            <label className="block text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <button className="w-full mt-6 bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
            Send Reset Link
          </button>

          <p className="text-center mt-4 text-gray-600">
            Remembered your password? <span className="text-blue-600 cursor-pointer" onClick={() => nav("/auth/login")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
