import React from 'react'
// css
import '../asset/css/Nav.css'
// logo 
import logo from '../asset/images/Logo.svg';

export default function Navbar () {
  return (
    <>
    {/* main container */}
    <div className='container'>
        <div className='item' id = 'logo'>
            <img src = {logo} alt = 'logo'/>
        </div>
        <div className='item' id = 'links'>
            <ul>
                <li><a href = '#containerAbout'>About</a></li>
                <li><a href = '#containerFeatures'>Features</a></li>
                <li><a href = '#containerPricing'>Pricing</a></li>
                <li><a href = '#containerTestimonials'>Testimonials</a></li>
                <li><a href = '#containerHelp'>Help</a></li>
            </ul>
        </div>
        <div className='item' id = 'button'>
            <button id= 'in' >Sign In</button>
            <button id= 'up' >Sign Up</button>
        </div>
    </div>
    </>
  )
}
