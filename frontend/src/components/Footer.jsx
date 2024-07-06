import React from 'react';
import '../styles/Footer.css';
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import pub_logo from '../assets/pub_logo.png'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        {/*learn more*/}
      <div className='footer-section main'>
        <img src={pub_logo} alt='logo'/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi suscipit, minima eaque omnis repudiandae deserunt repe</p>
        {/*&opening hours*/}
        <div className='time'>
          <h3>OPENING HOURS</h3>
          <p>Monday - Sunday: <br/> 8:00 am to 10:00 pm</p>
        </div>
      </div>
      <div className='footer-section'>
        <h3>NAVIGATION</h3>
        <ul className='footer-links david-libre-regular'>
              <li className='link-items'><a href='/Home'>Home</a></li>
              <li className='link-items'><a href='/Menu'>Menu</a></li>
              <li className='link-items'><a href='/Menu'>Gallery</a></li>
              <li className='link-items'><a href='/About'>About</a></li>
              <li className='link-items'><a href='/Contact'>Contact</a></li>
        </ul>
      </div>
      <div className='footer-section'>
        <h3>FOOD & DRINKS</h3>
        <ul className='footer-links david-libre-regular'>
              <li className='link-items'><a href='/Home'>Rice</a></li>
              <li className='link-items'><a href='/Menu'>Rice</a></li>
              <li className='link-items'><a href='/Menu'>Rice</a></li>
              <li className='link-items'><a href='/About'>Rice</a></li>
              <li className='link-items'><a href='/Contact'>Rice</a></li>
        </ul>
      </div>
      <div className='footer-section'>
      <h3>FOLLOW US</h3>
      <div className='social_links'>
        <a href='/' className='social_links_items'><img src={facebook} alt='fb'/></a>
        <a href='/' className='social_links_items'><img src={instagram} alt='ig'/></a>
        <a href='/' className='social_links_items'><img src={twitter} alt='x'/></a>
      </div>
      
      </div>
      </div>
      <hr className='footer-line'/>
      <div className='footer-copy david-libre-regular'>
        &copy; 2024 Georges' Pub. All Rights Reserved
      </div>
    </div>

  )
}
