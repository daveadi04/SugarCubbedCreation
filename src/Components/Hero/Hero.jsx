import React from 'react'
import './Hero.css'
import cookie_home from '../Assets/cookie_home.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>A BITE OF DELICIOUSNESS</h2>
        
        <p>100% NATURAL</p>
        <p>FRESH HOMEMADE COOKIES</p>
        
        <div className="hero-latest-btn">
        <div>SHOP NOW</div>
    </div>
        </div>
    
    <div className="hero-right">
    <img src={cookie_home} alt=""/>
    </div>
    </div>
  )
}
export default Hero