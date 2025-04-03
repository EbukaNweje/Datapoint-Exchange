import React, { useState } from 'react';
import Logo from '../assets/dataexchange.png';
import { Drawer } from "antd";
import { CgMenuRight } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const nav = useNavigate()

  return (
    <div className='bg-white text-black w-full h-[70px] flex items-center justify-between px-4 md:px-6 lg:px-10'>
      {/* Logo */}
      <div className='flex items-center'>
        <img src={Logo} alt="Logo" className='h-[50px] w-auto' onClick={() => nav('/')} />
      </div>

      {/* Desktop Navigation - Adjusted for Medium Screens */}
      <div className='hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 text-black-400 text-base md:text-base lg:text-base'>
        <ul className='flex flex-wrap gap-4 md:gap-6 '>
          <li className='cursor-pointer hover:text-blue-950' onClick={() => nav('/')}>Home</li>
          <li className='cursor-pointer hover:text-blue-950' onClick={() => nav('/auth/login')}>Trade</li>
          <li className='cursor-pointer hover:text-blue-950' onClick={() => nav('/faq')}>FAQs</li>
          <li className='cursor-pointer hover:text-blue-950'  onClick={() => nav('/contact-us')}>Contacts</li>
        </ul>

        {/* Authentication Buttons - Wrapped for Small Screens */}
        <div className='flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-0'>
          <button className='bg-white text-blue-950 text-base px-3 py-1 md:px-4 md:py-2 rounded-lg border border-blue-950 hover:bg-blue-950 hover:text-white transition' onClick={() => nav('/auth/login')}>
            Login
          </button>
          <button className='bg-blue-950 text-white text-base px-3 py-1 md:px-4 md:py-2 rounded-lg hover:bg-blue-950 transition' onClick={() => nav('/auth/signup')}>
            Create Account
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <CgMenuRight className="text-black text-3xl cursor-pointer" onClick={() => setToggle(true)} />
      </div>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={() => setToggle(false)} open={toggle}>
        <div className="flex flex-col gap-6 text-lg text-black">
          <p className='cursor-pointer' onClick={() => {setToggle(false), nav('/')} }>Home</p>
          <p className='cursor-pointer' onClick={() => {setToggle(false), nav('/auth/login')}}>Trade</p>
          <p className='cursor-pointer' onClick={() => {setToggle(false), nav('/faq')}}>FAQs</p>
          <p className='cursor-pointer' onClick={() => {setToggle(false), nav('/contact-us')}}>Contacts</p>
          <button className='bg-white text-blue-950 h-13 px-3 py-1 md:px-4 md:py-2 rounded-lg border border-blue-950 hover:bg-blue-950 hover:text-white transition' onClick={() => {setToggle(false), nav('/auth/login')}}>Login</button>
          <button className='bg-blue-950 text-white h-13 px-4 py-1 md:px-4 md:py-3 rounded-lg hover:bg-blue-950 transition'  onClick={() => {setToggle(false), nav('/auth/signup')}}>Create Account</button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
