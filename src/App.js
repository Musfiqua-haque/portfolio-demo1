import React from 'react'
import './index.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'


// All Pages link

import Home from './routes/Home'
import Project from './routes/Project'
import About from './routes/About'
import Contact from './routes/Contact'

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}
