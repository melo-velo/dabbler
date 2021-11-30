import React from "react";

const Navbar = () => {
    return(
        <div className='nav-container'>
            <h3 className='nav-logo'>Dabbler</h3>
            <div>
                <ul className='nav-links'>
                    <li><a href='#'>Breweries</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <a className='nav-cta' href="#"><button>Sign in</button></a>
        </div>
    )
}

export default Navbar
