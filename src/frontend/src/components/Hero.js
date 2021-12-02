import React from "react";
import hero from '../assets/hero.jpg'

const Hero = () => {
    return(
        <div className='hero-container'>
            <img src={hero} className='hero-image' alt='Hero image'/>
            <div className='hero-text'>
                <p className="hero-title">Dabbler</p>
                <p>Minnesota's most prestigious brewery rankings.</p>
                <a href='#rankings'><button className='hero-button'>The List</button></a>
            </div>
        </div>
    )
}
export default Hero