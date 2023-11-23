import React, { useState } from 'react'
import './Navbar.css'
import { FaFacebook,FaInstagram, FaYoutubeSquare, } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import  {Link} from 'react-router-dom';
const Navbar = () => {
    const [toggle,settoggle] = useState(false);
  return (
    <>
    <nav className="main-div">

        <div className="logo">
            <h2><span>A</span>biskar
            <span>L</span>c</h2>
        </div>

        <div className={toggle?"menu-links mobile-menu-links":"menu-links"}>
            <ul>
                <li className='menu-items'><Link to={""}>home</Link></li>
                <li className='menu-items'><Link to={""}>about</Link></li>
                <li className='menu-items'><Link to={""}>services</Link></li>
                <li className='menu-items'><Link to={""}>feature</Link></li>
            </ul>
        </div>

        <div className="social-media">
            <ul >
                <li  className='facebook'>
                    <Link to="https://www.facebook.com" target='_blank'><FaFacebook/></Link>
                </li>
                <li  className='insta'>
                    <Link to="https://www.instagram.com" target='_blank'><FaInstagram/></Link>
                </li>
                <li className='youtube'>
                    <Link to="https://www.youtube.com"  target='_blank'><FaYoutubeSquare/></Link>
                </li>
            </ul>

            
        </div>
        <div className="hamburger-menu">
                
             <GiHamburgerMenu onClick={()=>{
                    settoggle(!toggle);
                }}/>
             
            </div>
    </nav>


<section>
  <p>Welcome To</p>
  <h1>AbiskarLc Website</h1>
</section>
</>
  )
}

export default Navbar
