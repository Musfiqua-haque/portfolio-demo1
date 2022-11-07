import React from 'react'
import './ProjectCardStyle.css'
import SingleCard from './SingleCard'
import datas from './data'

// import project1 from '../assets/project1.jpg'
// import { NavLink } from 'react-router-dom'

export default function ProjectCard() {
  return (
    <div className='project'>
      <h1 className='card-heading'>Projects</h1>
      <div className='card-container'>
        {datas.map((data,index)=>{
          return(
            <SingleCard key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            des={data.des}
            view={data.view}
            />
          )
        })}
      </div>
    </div>
  )
}
