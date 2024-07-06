import React from 'react'
import Slider from 'react-slick';
import { testimonials } from '../data/testimonials'
import '../styles/Customer.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Customer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="customer-section">
        <h2 className="customer-section-title">Our Happy Customers</h2>
        <Slider {...settings} className="customer-cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="customer-card">
                        <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
                        <div className="customer-info">
                            <h3 className="customer-name">{testimonial.name}</h3>
                            <p className="customer-title">{testimonial.title}</p>
                            <p className="customer-text">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
    </section>
);
};
