// src/components/Dashboard/ReferralCard.jsx
import React from "react";

const ReferralCard = ({ totalReferrals = 0, amountEarned = "₦0.00" }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-xl text-white w-full h-full shadow-md relative">
      {/* See More */}
      <div className="absolute top-3 right-4 text-sm text-gray-400 cursor-pointer hover:text-white transition">
        See more
      </div>

      {/* Referral Info */}
      <h2 className="text-2xl font-bold">{totalReferrals} referral{totalReferrals !== 1 && "s"}</h2>
      <p className="text-sm text-gray-400 mt-1">{amountEarned} made from Referrals</p>
    </div>
  );
};

export default ReferralCard;
