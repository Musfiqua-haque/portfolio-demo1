import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroproject from '../Components/Heroproject'
import AboutMe from '../Components/AboutMe'

export default function About() {
  return (
    <div>
      <Navbar/>
      <Heroproject heading='ABOUT' text='I am a professional Front-End Developer' />
      <AboutMe/>
      <Footer />
    </div>
  )
}
