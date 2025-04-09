import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from "../../assets/bgnew.jpg";
import AnimatedWrapper from "../../components/AnimatedWrapper";

const CreateLoginPin = () => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const nav = useNavigate();

  const handlePinClick = (num) => {
    if (pin.length < 6) {
      setPin(pin + num);
    }
  };

  const handleConfirmPinClick = (num) => {
    if (confirmPin.length < 6) {
      setConfirmPin(confirmPin + num);
    }
  };

  const handleBackspace = (setState, stateValue) => {
    setState(stateValue.slice(0, -1));
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
          <h1 className="text-4xl font-bold mb-4">Set Your Login PIN</h1>
          <p className="text-lg">
            Create a secure 6-digit PIN for quick and secure access to your account.
          </p>
        </div>
      </div>

      {/* Right Side - Create PIN Card */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
          <button className="text-gray-600 text-xl" onClick={() => nav("/auth/signup")}>
            &#8592;
          </button>
          <h2 className="text-2xl font-bold mt-2 text-center">Create Login PIN</h2>
          <p className="text-gray-500 text-center">Enter a 6-digit PIN for your account</p>

          {/* PIN Input */}
          <div className="mt-4">
            <label className="block text-gray-600">Enter PIN</label>
            <div className="flex justify-between mt-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-lg font-bold">
                  {pin[i] ? "•" : ""}
                </div>
              ))}
            </div>
          </div>

          {/* Confirm PIN Input */}
          <div className="mt-4">
            <label className="block text-gray-600">Confirm PIN</label>
            <div className="flex justify-between mt-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-lg font-bold">
                  {confirmPin[i] ? "•" : ""}
                </div>
              ))}
            </div>
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
              onClick={() => handleBackspace(setPin, pin)}
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

          <button className="w-full mt-6 bg-blue-950 text-white py-3 rounded-lg font-semibold hover:bg-blue-600" onClick={() => nav("/dashboard")}>
            Set PIN
          </button>

          <p className="text-center mt-4 text-gray-600">
            Skip for now? <span className="text-blue-600 cursor-pointer" onClick={() => nav("/dashboard")}>Go to Dashboard</span>
          </p>
        </div>
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default CreateLoginPin;
