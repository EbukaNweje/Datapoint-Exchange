import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full bg-white py-6 px-4 flex flex-col items-center text-center shadow-md">
      {/* Text Section */}
      <div className="max-w-2xl">
        <h3 className="text-xl font-bold text-gray-800">Newsletter</h3>
        <p className="text-gray-600 text-sm mt-1">
          Be the first to know about discounts, offers, and events weekly in your mailbox. 
          Unsubscribe anytime with one click.
        </p>
      </div>

      {/* Input & Button Section (Stay Together, Input 70%) */}
      <div className="mt-4 w-full max-w-md flex">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="border border-gray-300 rounded-l-lg px-4 py-2 w-[80%] focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="w-[30%] bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
