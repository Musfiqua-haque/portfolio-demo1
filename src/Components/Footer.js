import React from 'react'
import './FooterStyle.css';
import { MdHome,MdFacebook,MdEmail,MdPhone} from "react-icons/md";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-des'>
        <div className='des-left'>
            <div className='home-icon'>
              <MdHome size={30} style={{color:'white', marginRight:'1rem',marginTop:'.5rem'}}/>
            Appartment 10/13,
            North, baridhara
            </div>
            <div className='phone-icon'>
            <MdPhone size={30} style={{color:'white', marginRight:'1rem',marginTop:'.8rem'}}/>
            +003456-3456
            </div>
            <div className='facebook-icon'>
            <MdFacebook size={30} style={{color:'white', marginRight:'1rem',marginTop:'.8rem'}}/>
            www.appchai.com
            </div>
            <div className='email-icon'>
            <MdEmail size={30} style={{color:'white',marginRight:"1rem",marginTop:'.8rem'}}/>
            app@gmail.com
            </div>
        </div>
        <div className='des-right'>
            <h3 style={{color:'white'}}>Profile of Company</h3>
            <p style={{marginTop:'1rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            <div className='social-icon'>
                <MdPhone size={30} style={{color:'white',marginRight:"2rem"}}/>
                <MdFacebook size={30} style={{color:'white',marginRight:"2rem"}}/>
                <MdEmail size={30} style={{color:'white',marginRight:"2rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}
