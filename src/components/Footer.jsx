import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const nav = useNavigate()

  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-bold">DataPoint Exchange</h4>
          <p className="text-gray-400 text-sm mt-2">
            At DataPoint Exchange, We believe in building a future where digital transactions are seamless, secure, and accessible to all. Our platform is designed with robust security, user-friendly interfaces, and innovative features that redefine how merchants and buyers interact in the online marketplace.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <p className="text-gray-400 text-sm mt-2 cursor-pointer hover:text-red-500" onClick={()=> nav('/about-us')}>About us</p>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-semibold">Explore</h3>
          <p className="text-gray-400 text-sm mt-2 cursor-pointer hover:text-red-500">Marketplace</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Bill payment</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Trade</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Ebook</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Gift-Card</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Marketplace</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Traning</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Logistics</p>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <p className="text-gray-400 text-sm mt-2 cursor-pointer hover:text-red-500">Privacy Policy</p>
          <p className="text-gray-400 text-sm cursor-pointer hover:text-red-500">Terms and Conditions</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center space-x-4 mt-2">
            <IoLogoInstagram className="text-white text-xl hover:text-red-500 cursor-pointer" />
            <FaXTwitter className="text-white text-xl hover:text-red-500 cursor-pointer" />
            <IoLogoLinkedin className="text-white text-xl hover:text-red-500 cursor-pointer" />
          </div>
          <p className="text-gray-400 text-sm mt-4 capitalize">
             Datapoint Microsystems Ltd· Address. 4 Ayanboye Street off Faramobi Ajike street Anthony Village, Lagos, Lagos, Nigeria <br />
            <a href="mailto:support@datapointexchange.com" className="text-red-500 hover:underline">support@datapointexchange.com</a> <br />
            <a href="tel:+2349169852080" className="text-red-500 hover:underline">+234 805 657 4122</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        <p>© {currentYear} DataPoint Exchange. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
