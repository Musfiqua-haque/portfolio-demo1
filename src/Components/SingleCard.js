import './ProjectCardStyle.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SingleCard(props) {

    const {imgSrc,title,des,view} = props

  return (  
    <div className='project-card'>
    <img className='card-image' src={imgSrc} alt=''/>    
      <h3 className='project-title'>{title}</h3> 
    <div className='project-details'>
        <p>{des}</p>
        <div className='project-btns'>
        <NavLink to={view} className='btn'>View Demo</NavLink>
        <NavLink to='url.com'className='btn'>Source Code</NavLink>
        </div>
    </div>      
</div>
  )
}
