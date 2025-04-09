import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BG from "../../assets/bgnew.jpg";
import AnimatedWrapper from "../../components/AnimatedWrapper";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [refCode, setRefCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const nav = useNavigate();

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log("Sign-up details:", {
      fullName,
      email,
      whatsapp,
      password,
      confirmPassword,
      refCode,
    });
    nav("/auth/create-pin")
  };

  return (
    <AnimatedWrapper>
    <div
      className="flex h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
    >
      {/* Left Side - Background Image & Text */}
      <div className="hidden md:flex w-1/2 h-full items-center px-10">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Join DataPoint Exchange Today!
          </h1>
          <p className="text-lg">
            Sign up now and enjoy fast, secure transactions for all your utility payments.
          </p>
        </div>
      </div>

      {/* Right Side - Sign Up Card */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
          <button className="text-gray-600 text-xl" onClick={() => nav("/auth/login")}>
            &#8592;
          </button>
          <h2 className="text-2xl font-bold mt-2 text-center">Sign Up</h2>
          <p className="text-gray-500 text-center">
            Create an account to get started
          </p>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-4">
            <input
              type="tel"
              placeholder="WhatsApp Number"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute top-5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaRegEye
                className="absolute top-5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <div className="mt-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="absolute top-5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <FaRegEye
                className="absolute top-5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Referral Code (Optional)"
              value={refCode}
              onChange={(e) => setRefCode(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <button className="w-full mt-6 bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-600" onClick={handleSignUp}>
            Sign Up
          </button>

          <p className="text-center mt-4 text-gray-600">
            Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => nav("/auth/login")}>Sign In</span>
          </p>
        </div>
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default SignUp;
