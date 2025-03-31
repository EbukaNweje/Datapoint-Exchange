import React from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/NewsLater";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
        <Header/>
       <div className="w-full bg-gray-100 py-12 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          About <span className="text-black">Datapoint Exchange</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Empowering seamless digital transactions with cutting-edge technology and innovation.
        </p>
      </div>
      
      {/* Our Story */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
        <p className="text-gray-600 mt-4">
          Datapoint Exchange was founded with the vision of revolutionizing digital transactions.
          From our humble beginnings, we have grown into a trusted platform that bridges the gap between merchants and buyers, ensuring secure and efficient payments globally.
        </p>
      </div>

      {/* Our Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            To provide seamless, secure, and efficient digital transaction solutions, empowering businesses and individuals worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-4">
            To be the leading digital exchange platform, driving the future of crypto-powered commerce.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
        <ul className="list-disc pl-5 text-gray-600 mt-4 space-y-2">
          <li>Innovation - Pioneering new ways to facilitate transactions.</li>
          <li>Security - Ensuring every transaction is protected with top-tier encryption.</li>
          <li>Customer-Centric - Placing users at the heart of our solutions.</li>
          <li>Transparency - Operating with integrity and clarity.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800">Join Us Today</h2>
        <p className="text-gray-600 mt-4">
          Be a part of the future of digital transactions. Sign up now and experience seamless payments with Datapoint Exchange.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition">
          Get Started
        </button>
      </div>
    </div>

    <Newsletter />
    <Footer />
    </>
  );
};

export default AboutUs;
