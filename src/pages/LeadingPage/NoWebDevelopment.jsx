import React from 'react'
import GoooglpayButon from '../../assets/playstore.webp'
import AppStoreButon from '../../assets/appstore.png'
import WebAppIcon from '../../assets/web4.png'

const NoWebDevelopment = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center py-8 px-6 md:px-10 bg-[#efeded]'>
        {/* Heading */}
        <h3 className='text-3xl font-semibold text-center mb-4'>
          Sell & Accept Payments Without <span className='text-red-500'>Web Knowledge</span> Needed
        </h3>
        
        {/* Description */}
        <p className='text-base md:text-lg text-center mb-8'>
          Seamlessly sell products and accept payments—no coding required. 
          Streamline transactions effortlessly with a secure, no-code payment solution.
        </p>
        
        {/* Button Row */}
        <div className='flex items-center justify-center space-x-2 mb-8'>
            <img 
              src={GoooglpayButon} 
              alt="Google Pay button" 
              className='w-[150px] h-[100px] object-contain cursor-pointer transition-transform transform hover:scale-105' 
            />
            <img 
              src={AppStoreButon} 
              alt="App Store button" 
              className='w-[150px] h-[100px] object-contain cursor-pointer transition-transform transform hover:scale-105' 
            />
        </div>

        {/* Web App Icon */}
        <div className='w-full flex items-center justify-center py-8 px-6 bg-[#efeded]'>
      <img
        src={WebAppIcon}
        alt='Web App Display'
        className='w-full md:w-3/4 lg:w-2/3 h-auto'
      />
    </div>
    </div>
  )
}

export default NoWebDevelopment
