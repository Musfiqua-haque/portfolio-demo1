import React from 'react'
import './HeroprojectStyle.css'

export default function Heroproject(props) {
  return (
    <div className='hero-background'>
        <div className='hero-des'> 
        <h2>{props.heading}</h2>
        <p>{props.text}</p></div>   
    </div>
  )
}
