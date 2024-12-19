import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import AboutUs from './AboutUs'
import ContactSection from './Contact'

function Home() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Features/>
    <AboutUs/>
    <ContactSection/>
    <Footer/>
   </>
  )
}

export default Home