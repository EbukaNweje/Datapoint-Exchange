import React from "react";
import {
  FiHome,
  FiZap,
  FiCreditCard,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay with Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
  className={`fixed top-0 left-0 h-screen w-19 bg-[#121212] text-white z-50 p-4 transition-transform transform
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:static md:flex md:flex-col items-center`}
>

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold shadow-md">
            D
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-5 flex-grow">
          <SidebarItem icon={<FiHome />} label="Dashboard" />
          <SidebarItem icon={<FiZap />} label="Services" />
          <SidebarItem icon={<FiCreditCard />} label="Payment" />
          <SidebarItem icon={<FiUser />} label="Profile" />
          <SidebarItem icon={<FiSettings />} label="Settings" />
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-8">
          <SidebarItem icon={<FiLogOut />} label="Logout" color="text-red-400" />
        </div>
      </aside>
    </>
  );
};

const SidebarItem = ({ icon, label, color = "hover:text-orange-400" }) => (
  <a
    href="#"
    className={`flex items-center md:flex-col lg:flex-col gap-3 md:gap-1 lg:gap-1 text-sm ${color} transition duration-200 justify-start md:justify-center`}
  >
    <div className="text-xl">{icon}</div>
    <span className="text-xs md:text-[10px] text-center">{label}</span>
  </a>
);

export default Sidebar;
