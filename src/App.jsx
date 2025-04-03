import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import LeadingPage from './pages/LeadingPage/LeadingPage';
import FAQ from './pages/Faq/FAQ';
import Contactus from "./pages/Contactus/ContactUs"
import AboutUs from './pages/About/AboutUs';
import ScrollToTop from './ScrollToTop';
import LoginPage from './pages/Auth/LoginPage';
import SignUp from './pages/Auth/SiginUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/RestPassword';
import CreateLoginPin from './pages/Auth/CreatePin';
import Dashboard from './pages/UserDashBoard/Dashboard';

const App = () => {
  return (
    <HashRouter>
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LeadingPage />} />
        <Route path="/auth/login" element={<LoginPage/>} />
        <Route path="/auth/signup" element={<SignUp/>} />
        <Route path="/auth/create-pin" element={<CreateLoginPin/>} />
        <Route path="/auth/forgot-password" element={<ForgotPassword/>} />
        <Route path="/auth/reset-password" element={<ResetPassword/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='*' element={<div><h1>404</h1></div>}/>
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/contact-us' element={<Contactus/>} />


        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </HashRouter>
  )
}

export default App