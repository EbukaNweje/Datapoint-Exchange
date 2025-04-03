import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BG from "../../assets/bgnew.jpg"

const Login = () => {
  const [isPinMode, setIsPinMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const nav = useNavigate()

  const handlePinClick = (num) => {
    if (pin.length < 6) { // Update max PIN length to 6
      setPin(pin + num);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handlePinModeToggle = () => {
    setIsPinMode(!isPinMode);
    setPin("");
  };

  return (
    <div className="flex h-screen w-full bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        `url(${BG})`,
      backgroundSize: "cover",
    }}
    >
      {/* Left Side - Background Image & Text */}
      <div
        className="hidden md:flex w-1/2 h-full items-center px-10"
      >
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Trust and security are at the heart of DataPoint Exchange
          </h1>
          <p className="text-lg">
            Pay your electricity, internet, and other utility bills quickly and easily from the palm of your hand.
          </p>
        </div>
      </div>
      
      {/* Right Side - Login Card */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
          <button className="text-gray-600 text-xl" onClick={() => nav("/")}>&#8592;</button>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mt-2">Sign In</h2>
            <p
              className="text-right text-blue-950 cursor-pointer"
              onClick={handlePinModeToggle}
            >
              {isPinMode ? "Login with Password" : "Login with PIN"}
            </p>
          </div>
          <p className="text-gray-500">Log in to your account to continue</p>
          
          <div className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input 
              type="email" 
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {isPinMode ? (
            <div className="mt-4">
              <label className="block text-gray-600">Enter PIN</label>
              <div className="flex justify-between mt-1">
                {[...Array(6)].map((_, i) => ( // Update to 6 slots
                  <div key={i} className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-lg font-bold">
                    {pin[i] ? '•' : ''} {/* Mask the pin */}
                  </div>
                ))}
              </div>
              {/* Numeric Keypad */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[...Array(9)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePinClick((i + 1).toString())}
                    className="w-full p-3 text-lg font-bold bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={handleBackspace}
                  className="w-full p-3 text-lg font-bold bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  ⌫
                </button>
                <button
                  onClick={() => handlePinClick("0")}
                  className="w-full p-3 text-lg font-bold bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  0
                </button>
                <button
                  onClick={() => setPin("")}
                  className="w-full p-3 text-lg font-bold bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Clear
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 relative">
              <label className="block text-gray-600">Password</label>
              <input 
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <FaRegEye className="absolute top-10 right-4 text-gray-400 cursor-pointer" />
            </div>
          )}
          
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a onClick={() => nav("/auth/forgot-password")} className="text-blue-600 cursor-pointer">Forgot Password?</a>
          </div>
          
          <button className="w-full mt-6 bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-600" onClick={()=> nav("/dashboard")}>
            Continue
          </button>
          
          <p className="text-center mt-4 text-gray-600">
            Not registered? <a onClick={() => nav("/auth/signup")} className="text-blue-600 cursor-pointer">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
