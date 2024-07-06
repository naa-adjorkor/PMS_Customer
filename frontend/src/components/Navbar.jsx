import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import '../styles/Navbar.css'


export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <h1>Logo</h1>
        </div>
        <ul className='navbar-links david-libre-regular'>
            <li className=' link-items'><a href='/Home'>Home</a></li>
            <li className=' link-items'><a href='/Menu'>Menu</a></li>
            <li className=' link-items'><a href='/Menu'>Gallery</a></li>
            <li className=' link-items'><a href='/About'>About</a></li>
            <li className=' link-items'><a href='/Contact'>Contact</a></li>
        </ul>
        <button className='navbar-signup custom__button david-libre-bold'>
            <a href='/Signup'>Sign Up</a>
        </button>
        
        
        <div className="navbar-smallscreen">
            <GiHamburgerMenu fontSize={28} onClick={() =>setToggleMenu(true)}/>

            {toggleMenu && (
                <div className='navbar-smallscreen__overlay slide-bottom'>
                <MdOutlineRestaurantMenu fontSize={28} className='overlay__close flex__center' onClick={() =>setToggleMenu(false)}/>
                    <ul className='navbar-smallscreen-links'>
                        <li className=' link-items'><a href='/Home'>Home</a></li>
                        <li className=' link-items'><a href='/About'>About</a></li>
                        <li className=' link-items'><a href='/Menu'>Menu</a></li>
                        <li className=' link-items'><a href='/Contact'>Contact</a></li>
                    </ul>
                    <div className='navbar-smallscreen-button'>
                    <button className='navbar-smallscreen-signup '>
                        <a href='/Signup'>Sign Up</a>
                    </button>
                    </div>
                </div>
            )}
        </div>
    </nav>
)
}