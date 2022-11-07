import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import Footer from '../Components/Footer'
import ProjectCard from '../Components/ProjectCard'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection />
      <ProjectCard />
      <Footer />
    </div>
  )
}
