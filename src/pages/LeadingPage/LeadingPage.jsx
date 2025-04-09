import React from 'react'
import Header from '../../components/Header';
import HeroPage from './HeroPage';
import NoWebDevelopment from './NoWebDevelopment';
import Midsection from './Midsection';
import NewsLater from '../../components/NewsLater';
import Footer from '../../components/Footer';
import AnimatedWrapper from "../../components/AnimatedWrapper";

const LeadingPage = () => {
  return (
    <AnimatedWrapper>
    <div className='MainPage'>
        <Header />
        <HeroPage/>
        <NoWebDevelopment/>
        <Midsection/>
        <NewsLater/>
        <Footer/>
    </div>
    </AnimatedWrapper>
  )
}

export default LeadingPage