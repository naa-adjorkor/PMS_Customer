import React from 'react';
import '../styles/Contact.css';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import addressIcon from '../assets/location.png';
import send from '../assets/send.png'

export const Contact = () => {
    return (
        <>
        <Navbar />
        <section className="contact-section">
            <h2 className="contact-header">Contact Us</h2>
            <div className="contact-container">
                <div className="contact-box contact-info-box">
                    <h3 className="david-libre-bold">Get in Touch</h3>
                    <div className="contact-info">
                        <p>
                            <img src={phoneIcon} alt="Phone" className="contact-icon" />
                            Phone: +123 456 7890
                        </p>
                        <p>
                            <img src={emailIcon} alt="Email" className="contact-icon" />
                            Email: info@georgespub.com
                        </p>
                        <p>
                            <img src={addressIcon} alt="Address" className="contact-icon" />
                            Address: 123 Pub Street, City, Country
                        </p>
                    </div>
                </div>
                <div className="contact-box contact-form-box">
                    <h3 className="david-libre-bold">Send Us a Message</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button className="custom__button submit-btn david-libre-medium">
                            Send Message
                            <img src={send} alt='send'className='send'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};
