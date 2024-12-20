import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Profile from '../Components/Profile'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import Waitlist from '../Components/Waitlist'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Profile/>
        <Footer/>
        <Waitlist/>
    </div>
  )
}

export default Home