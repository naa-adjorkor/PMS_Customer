import React from 'react';
import '../styles/Header.css'
import hero_image from '../assets/sitting.jpg'

export const Header = () => {
    return (
        <section className="hero section">
        <div className="hero-text section__text">
            <p className='david-libre-bold heading headText'>Welcome To Georges' Pub</p>
            <h2 className='david-libre-bold sub_heading subText'>Where Music Lives</h2>
            <p className='david-libre-regular text-color p__text' style={{margin:'1rem 0'}}>
                Join us and together let's create unforgettable memories.Every visit promises to be an unforgettable experience.Come raise a glass and make memories that last a lifetime at Georges' Pub. 
            </p>
            <div>
            <button className="custom__button menu-btn">Menu</button>
            <button className="custom__button book-table-btn">Book a table</button>
            </div>
        </div>
        <div className="hero-image section__img">
            <img src={hero_image} alt="Pub" />
        </div>
        </section>
    );
};


