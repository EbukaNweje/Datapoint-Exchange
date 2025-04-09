import React from "react";
import { FiSmartphone, FiWifi, FiTag, FiGift, FiArrowRightCircle } from "react-icons/fi";
import { GiCardExchange } from "react-icons/gi";
import { RiExchangeDollarLine } from "react-icons/ri";

const actions = [
  { label: "Airtime", icon: <FiSmartphone />, bg: "bg-blue-600" },
  { label: "Data", icon: <FiWifi />, bg: "bg-green-600" },
  { label: "Tickets", icon: <FiTag />, bg: "bg-yellow-700" },
  { label: "Gift Card", icon: <GiCardExchange />, bg: "bg-red-500" },
  { label: "Trade", icon: <RiExchangeDollarLine />, bg: "bg-orange-500" },
  { label: "More", icon: <FiArrowRightCircle />, bg: "bg-gray-500" },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`flex flex-col items-center justify-center p-4 rounded-xl text-white shadow-md hover:scale-105 transition-transform ${action.bg}`}
        >
          <div className="text-2xl mb-2">{action.icon}</div>
          <span className="text-sm font-medium">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
