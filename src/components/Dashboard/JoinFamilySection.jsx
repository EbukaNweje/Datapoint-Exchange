import React from "react";
import { FiUsers, FiArrowRight } from "react-icons/fi";

const JoinFamilySection = () => {
  return (
    <div className="bg-[#1f1f1f] text-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Icon + Text */}
      <div className="flex items-center gap-4">
        <div className="bg-blue-700/30 text-blue-400 p-3 rounded-full text-2xl">
          <FiUsers />
        </div>
        <div>
          <h4 className="text-lg font-semibold">Join a Family Group</h4>
          <p className="text-sm text-gray-400">
            Stay connected, share bills, and enjoy exclusive benefits together.
          </p>
        </div>
      </div>

      {/* CTA */}
      <button className="flex items-center gap-2 bg-blue-950 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-200">
        Join Now <FiArrowRight />
      </button>
    </div>
  );
};

export default JoinFamilySection;
