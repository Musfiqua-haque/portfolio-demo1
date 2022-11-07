import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroproject from '../Components/Heroproject'
import PricingCard from '../Components/PricingCard'
import ProjectCard from '../Components/ProjectCard'


export default function Project() {
  return (
    <div>
      <Navbar />
      <Heroproject heading='PROJECTS' text='Bellow the details of my project' />
      <ProjectCard/>
      <PricingCard />
      <Footer />
    </div>
  )
}
