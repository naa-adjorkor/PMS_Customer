import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './../styles/Navbar.css'
import pub_logo from '../assets/pub_logo.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <img src={pub_logo} alt='pub_logo'/>
        </div>
        <ul className='navbar-links david-libre-regular'>
            <li className=' link-items'><Link to='/Home'>Home</Link></li>
            <li className=' link-items'><Link to='/Menu'>Menu</Link></li>
            <li className=' link-items'><Link to='/Menu'>Gallery</Link></li>
            <li className=' link-items'><Link to='/About'>About</Link></li>
            <li className=' link-items'><Link to='/Contact'>Contact</Link></li>
        </ul>
        <button className='navbar-signup david-libre-bold'>
            <Link to='/Signup'>Sign Up</Link>
        </button>
        
        
        <div className="navbar-smallscreen">
            <GiHamburgerMenu fontSize={28} onClick={() =>setToggleMenu(true)}/>

            {toggleMenu && (
                <div className='navbar-smallscreen__overlay slide-bottom'>
                <MdOutlineRestaurantMenu fontSize={28} className='overlay__close flex__center' onClick={() =>setToggleMenu(false)}/>
                    <ul className='navbar-smallscreen-links'>
                        <li className=' link-items'><Link to='/Home'>Home</Link></li>
                        <li className=' link-items'><Link to='/About'>About</Link></li>
                        <li className=' link-items'><Link to='/Menu'>Menu</Link></li>
                        <li className=' link-items'><Link to='/Contact'>Contact</Link></li>
                    </ul>
                    <div className='navbar-smallscreen-button'>
                    <button className='navbar-smallscreen-signup '>
                        <Link to='/Signup'>Sign Up</Link>
                    </button>
                    </div>
                </div>
            )}
        </div>
    </nav>
)
}