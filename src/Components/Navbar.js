import React, { useState } from 'react'
import './NavbarStyle.css'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross} from "react-icons/im";


export default function Navbar() {



    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
        console.log("clicked");

    const [navcolor, setNavColor] = useState(false)

    const changeColor=()=>{
        if(window.scrollY>=1){
            setNavColor(true)
        }else{
            setNavColor(false)
        }
    }

    window.addEventListener('scroll',changeColor)
    

  return (
    <div className={navcolor ? " menubar bg-menubar": 'menubar'}>
        <Link to='/'>
            <h1 style={{color:'whitesmoke'}}>Portfolio</h1>
        </Link>
        <ul className={click ? 'navbar-menu active' : 'navbar-menu'} >
            <li>
                <Link  to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Project</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<ImCross size={25} />): (<GiHamburgerMenu size={25} />)}
        </div>
    </div>
  )
}
