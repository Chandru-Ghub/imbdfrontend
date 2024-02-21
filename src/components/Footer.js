import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="sig">
            <p>
                <Link to={'/login'} style={{color:'inherit'}}>SignIn for more Option</Link>
            </p>

        </div>
        <ul className="social">
            <li><FaTiktok/></li>
            <li><FaInstagram/></li>
            <li><FaYoutube/></li>
            <li><FaTwitter/></li>
            <li><FaFacebook/></li>
        </ul>
        <div className="btm1">
            <ul>
                <li>Help</li>
                <li>Site Index</li>
                <li>IMDbPro</li>
                <li>Box Office Mojo</li>
                <li>IMDb Developer</li>
            </ul>
        </div>
        <div className="btm">
            &copy; 1990-2024 bg IMDb.com, Inc.
        </div>
    </div>
  )
}

export default Footer