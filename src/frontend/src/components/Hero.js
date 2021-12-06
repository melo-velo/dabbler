import React from "react";
import hero from '../assets/hero.jpg'

const Hero = () => {
    return(
        <div className='hero-container'>
            <img src={hero} className='hero-image' alt='Hero image'/>
            <div className='hero-text'>
                <p className="hero-title">Dabbler</p>
                <p className='hero-description'>Minnesota's most prestigious brewery rankings.</p>
                <a href='#rankings'><button className='hero-button'>The List</button></a>
                <a href='#create'><button className='hero-button'>Create</button></a>
                <a href='#about'><button className='hero-button'>About</button></a>
            </div>
        </div>
    )
}
export default Hero