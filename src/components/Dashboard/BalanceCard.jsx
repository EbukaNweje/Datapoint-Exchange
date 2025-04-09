// src/components/Dashboard/BalanceCard.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const BalanceCard = () => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = "₦20,500.00"; // You can make this dynamic later

  return (
    <div className="bg-blue-950 p-5 rounded-xl text-white w-full shadow-md">
      <h4 className="text-sm font-medium">Total Balance</h4>

      <div className="flex items-center justify-between mt-2">
        <h2 className="text-2xl font-bold tracking-wider">
          {showBalance ? balance : "**********"}
        </h2>
        <button onClick={() => setShowBalance(!showBalance)} className="text-white">
          {showBalance ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
      </div>

      <button
        className="mt-4 w-full py-2 bg-white text-blue-950 rounded-full font-semibold text-sm hover:bg-gray-100 transition"
        onClick={() => alert("Fund Wallet clicked")}
      >
        Fund Wallet +
      </button>
    </div>
  );
};

export default BalanceCard;
