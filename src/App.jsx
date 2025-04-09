import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LeadingPage from './pages/LeadingPage/LeadingPage';
import FAQ from './pages/Faq/FAQ';
import Contactus from "./pages/Contactus/ContactUs";
import AboutUs from './pages/About/AboutUs';
import ScrollToTop from './ScrollToTop';
import LoginPage from './pages/Auth/LoginPage';
import SignUp from './pages/Auth/SiginUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/RestPassword';
import CreateLoginPin from './pages/Auth/CreatePin';

// New pages
import Dashboard from './pages/UserDashBoard/DashboardPage';
import TransactionHistory from './pages/UserDashBoard/TransactionHistory';
import Services from './pages/UserDashBoard/Services';
import FundWallet from './pages/UserDashBoard/FundWallet';

// Profile Pages
import ProfileInfo from './pages/UserDashBoard/Profile/Info';
import ProfileTransactions from './pages/UserDashBoard/Profile/Transactions';
import ProfileReferral from './pages/UserDashBoard/Profile/Referral';
import ProfileHelp from './pages/UserDashBoard/Profile/Help';
import ProfileLegal from './pages/UserDashBoard/Profile/Legal';
import ProfileRate from './pages/UserDashBoard/Profile/Rate';

// Settings Pages
import SettingsNotification from './pages/UserDashBoard/Settings/Notification';
import SettingsResetPin from './pages/UserDashBoard/Settings/ResetPin';
import SettingsResetPassword from './pages/UserDashBoard/Settings/ResetPassword';
import SettingsDeactivate from './pages/UserDashBoard/Settings/Deactivate';

// Animation Wrapper
import AnimatedWrapper from './components/AnimatedWrapper';

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AnimatedWrapper><LeadingPage /></AnimatedWrapper>} />
        <Route path="/auth/login" element={<AnimatedWrapper><LoginPage /></AnimatedWrapper>} />
        <Route path="/auth/signup" element={<AnimatedWrapper><SignUp /></AnimatedWrapper>} />
        <Route path="/auth/create-pin" element={<AnimatedWrapper><CreateLoginPin /></AnimatedWrapper>} />
        <Route path="/auth/forgot-password" element={<AnimatedWrapper><ForgotPassword /></AnimatedWrapper>} />
        <Route path="/auth/reset-password" element={<AnimatedWrapper><ResetPassword /></AnimatedWrapper>} />
        <Route path="/about-us" element={<AnimatedWrapper><AboutUs /></AnimatedWrapper>} />
        <Route path="/faq" element={<AnimatedWrapper><FAQ /></AnimatedWrapper>} />
        <Route path="/contact-us" element={<AnimatedWrapper><Contactus /></AnimatedWrapper>} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<AnimatedWrapper><Dashboard /></AnimatedWrapper>} />
        <Route path="/transactions" element={<AnimatedWrapper><TransactionHistory /></AnimatedWrapper>} />
        <Route path="/services" element={<AnimatedWrapper><Services /></AnimatedWrapper>} />
        <Route path="/fund-wallet" element={<AnimatedWrapper><FundWallet /></AnimatedWrapper>} />

        {/* Profile */}
        <Route path="/profile/info" element={<AnimatedWrapper><ProfileInfo /></AnimatedWrapper>} />
        <Route path="/profile/transactions" element={<AnimatedWrapper><ProfileTransactions /></AnimatedWrapper>} />
        <Route path="/profile/referral" element={<AnimatedWrapper><ProfileReferral /></AnimatedWrapper>} />
        <Route path="/profile/help" element={<AnimatedWrapper><ProfileHelp /></AnimatedWrapper>} />
        <Route path="/profile/legal" element={<AnimatedWrapper><ProfileLegal /></AnimatedWrapper>} />
        <Route path="/profile/rate" element={<AnimatedWrapper><ProfileRate /></AnimatedWrapper>} />

        {/* Settings */}
        <Route path="/settings/notification" element={<AnimatedWrapper><SettingsNotification /></AnimatedWrapper>} />
        <Route path="/settings/reset-pin" element={<AnimatedWrapper><SettingsResetPin /></AnimatedWrapper>} />
        <Route path="/settings/reset-password" element={<AnimatedWrapper><SettingsResetPassword /></AnimatedWrapper>} />
        <Route path="/settings/deactivate" element={<AnimatedWrapper><SettingsDeactivate /></AnimatedWrapper>} />

        {/* Fallback */}
        <Route path="*" element={<AnimatedWrapper><div><h1>404 - Page Not Found</h1></div></AnimatedWrapper>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
