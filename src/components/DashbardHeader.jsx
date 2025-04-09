import React from "react";
import { FiBell, FiMenu } from "react-icons/fi";

const DashboardHeader = ({ setSidebarOpen }) => {
  return (
    <div className="mb-6 w-full">
      {/* Top Row (Icon + Bell + Avatar) */}
      <div className="flex items-center justify-between px-4 md:px-0 mb-4">
        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-white text-2xl md:hidden"
        >
          <FiMenu />
        </button>

        {/* Spacer on Desktop */}
        <div className="hidden md:block" />

        {/* Right Side: Bell + Avatar */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <FiBell className="text-white text-xl hover:text-orange-400 transition" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </div>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 cursor-pointer">
            <img
              src="https://i.pravatar.cc/100?u=ebuka"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Greeting Section */}
      <div className="px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Hello, Ebuka Nweje
        </h2>
        <p className="text-sm text-gray-300 mt-1">
          What bill would you like to pay today?
        </p>
      </div>

      {/* Notification Box */}
      <div className="mt-5 bg-white text-black px-4 py-3 rounded-md text-sm md:text-base shadow-md mx-4 md:mx-0">
        To verify your account{" "}
        <span className="text-orange-600 font-semibold cursor-pointer hover:underline">
          click here
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
