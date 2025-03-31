import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Newsletter from "../../components/NewsLater";

const FAQ = () => {
  const [dropdown, setDropdown] = useState(null);
  const texts = ["General Questions", "Payments", "Merchants", "Buyers"];
  const accordion = [
    {
      title: "How do I create an account on DataPoint Exchange?",
      content:
        "To create an account on DataPoint Exchange, click the 'Create Account' button and follow the prompts to provide your details. You'll receive a confirmation email to complete your registration.",
    },
    {
      title: "How does DataPoint Exchange work?",
      content:
        "DataPoint Exchange allows you to securely buy, sell, and manage digital assets with ease.",
    },
    {
      title: "Is it free to create an account?",
      content:
        "Yes! Creating an account on DataPoint Exchange is completely free.",
    },
    {
      title: "How can I become a merchant?",
      content:
        "To become a merchant, sign up and follow the verification process to start selling on our platform.",
    },
    {
      title: "Is there customer support available?",
      content:
        "Yes! Our 24/7 customer support team is always ready to assist you with any issues.",
    },
    {
      title: "Does DataPoint Exchange handle delivery?",
      content:
        "We do not handle deliveries, but we provide a secure platform for seamless transactions.",
    },
  ];

  const handleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="w-full bg-gray-50 pb-12">
        {/* Header Section */}
        <div className="w-full bg-blue-950 text-white text-center py-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg mt-2">Everything you need to know about DataPoint Exchange</p>
        </div>

        {/* Category Navigation */}
        <div className="container mx-auto py-6 flex flex-wrap justify-center gap-6">
          {texts.map((item, index) => (
            <p key={index} className="text-blue-700 cursor-pointer text-lg font-medium hover:underline">{item}</p>
          ))}
        </div>

        {/* General Questions Section */}
        <div className="container mx-auto px-4 sm:px-12 lg:px-32">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">General Questions</h2>

          {/* Accordion FAQ Section */}
          <div className="space-y-4">
            {accordion.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-lg">
                {/* Accordion Header */}
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => handleDropdown(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                  <span className="text-xl text-gray-600">
                    {dropdown === index ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                  </span>
                </div>
                
                {/* Accordion Content */}
                {dropdown === index && (
                  <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer />
    </>
  );
};

export default FAQ;
