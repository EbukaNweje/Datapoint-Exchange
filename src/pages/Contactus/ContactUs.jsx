import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogo, PiTelegramLogoDuotone } from "react-icons/pi";
import Newsletter from "../../components/NewsLater";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ContactUs = () => {
  return (
   <>
   <Header />
     <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black">Chat with Our Friendly Team</h2>
          <p className="text-gray-600 mt-2 text-lg">
            We'd love to hear from you! Fill out the form or reach out via email.
          </p>
        </div>

        {/* Contact Form & Info Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-black mb-4">Send Us a Message</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center space-x-2 text-gray-600">
                <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                <label>You agree to our <u className="text-blue-950">privacy policy</u>.</label>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-950 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-6">
            {/* Email Section */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center gap-4">
              <HiOutlineMail className="text-blue-950 text-3xl" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">Our friendly team is here to help</p>
                <a href="mailto:support@datapointexchange.com" className="text-blue-950 hover:underline">support@datapointexchange.com</a> <br />
              </div>
            </div>

            {/* Phone Section */}
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center gap-4">
              <BiPhoneCall className="text-blue-950 text-3xl" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">Mon-Fri 8am to 5pm</p>
                <a href="tel:+3197005032009" className="text-blue-950 block hover:underline">+234 805 657 4122</a>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center gap-4">
                <FaAppStore className="text-blue-950 text-3xl" />
                <h4 className="text-lg font-semibold">Socials</h4>
              </div>
              <p className="text-gray-600 mt-2">Visit our social media platforms</p>
              <div className="flex gap-4 mt-3">
                <a href="https://www.facebook.com/share/1FN8ZupQhK/" className="text-blue-950 text-xl hover:text-blue-800 transition">
                  <FiFacebook />
                </a>
                <a href="https://t.me/yaticares" className="text-blue-950 text-xl hover:text-blue-800 transition">
                  <PiTiktokLogo />
                </a>
                <a href="https://t.me/+InOJnUzDLUM5OTVk" className="text-blue-950 text-xl hover:text-blue-800 transition">
                  <PiTelegramLogoDuotone />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Newsletter/>
        <Footer/>
   </>
  );
};

export default ContactUs;
