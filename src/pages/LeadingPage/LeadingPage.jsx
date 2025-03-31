import React from 'react'
import Header from '../../components/Header';
import HeroPage from './HeroPage';
import NoWebDevelopment from './NoWebDevelopment';
import Midsection from './Midsection';
import NewsLater from '../../components/NewsLater';
import Footer from '../../components/Footer';

const LeadingPage = () => {
  return (
    <div className='MainPage'>
        <Header />
        <HeroPage/>
        <NoWebDevelopment/>
        <Midsection/>
        <NewsLater/>
        <Footer/>
    </div>
  )
}

export default LeadingPage