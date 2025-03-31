import React from 'react';
import HeroImg from "../../assets/websitev1.png"; // Your image file
import backgroundImage from "../../assets/bg.png"; // Background image file

const HeroPage = () => {
  return (
    <div 
      className='w-full h-[650px] flex items-center justify-center md:h-[full] sm:h-[full] bg-cover bg-center bg-no-repeat' 
      style={{ backgroundImage: `url(${backgroundImage})` }} // Background image style
    >
        <div className='w-full h-full flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-10 backdrop-brightness-75'>
            {/* Left section with text */}
            <div className='w-full md:w-[50%] flex flex-col justify-center gap-4 text-white px-4 text-center md:text-left'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Seamless Crypto Exchange & Digital Solutions with 
                <span className="text-red-500"> Datapoint-Exchange</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl">Buy, Sell, and Pay with Ease!</p>
              <button className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg text-sm md:text-lg hover:bg-red-700 transition">
                Pay Bill
              </button>
            </div>

            {/* Right section with image */}
            <div className='w-full md:w-[60%] mt-4 md:mt-0 px-4'>
                <img 
                  src={HeroImg} 
                  alt="Hero Image" 
                  className='w-full h-full object-cover md:h[80%] md:w-full' 
                  style={{ maxWidth: '800px' }} // Image size control
                />
            </div>
        </div>
    </div>
  );
}

export default HeroPage;
