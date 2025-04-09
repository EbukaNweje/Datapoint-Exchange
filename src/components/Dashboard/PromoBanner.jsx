// src/components/Dashboard/PromoBanner.jsx
import React from "react";
import { FiGift } from "react-icons/fi";

const PromoBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-yellow-400 text-black rounded-xl p-6 shadow-lg overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Icon or image */}
        <div className="text-4xl">
          <FiGift />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">🎁 Invite Friends & Earn!</h3>
          <p className="text-sm">
            Share your referral link and earn ₦500 when they make their first purchase.
          </p>
        </div>

        {/* CTA */}
        <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-900 transition">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
