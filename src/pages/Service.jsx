import React, { useState } from 'react';

import servicenaroheader from '../images/naro-barber10.jpg';

// Pricing images
import imgservice from '../images/naro-barber2.jpg';

// Hair Styles Icons
import cutIcon from '../images/cut.png';
import brushIcon from '../images/brush.png';
import washIcon from '../images/wash.png';

// Gallery images
import g1 from '../images/gallery1.jpg';
import g2 from '../images/gallery2.jpg';
import g3 from '../images/gallery3.jpg';
import g4 from '../images/gallery4.jpg';
import g5 from '../images/gallery5.jpg';


//Testimonials
import wilma1 from '../images/wilma1.png';
import jimmy from '../images/jimmy.png';
import wilma2 from '../images/wilma2.png';



//Footer
import narologo2 from '../images/naro-logo2.png';
import phoneIcon from '../images/phone.png';
import locationIcon from '../images/location.png';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';


export const Service = () => {
    const [openSection, setOpenSection] = useState(null); // NEW

  const toggleSection = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  
  const hairServices = [
    'Trim your Hair',
    'Special Beard Treatment',
    'Color your Beard',
    'Wax your Beard',
  ];

  const beardServices = [
    'Beard Wash & Oil',
    'Beard Straightening',
    'Luxury Beard Trim',
  ];


  const serviceCards = [
    {
      icon: cutIcon,
      title: 'Stylish hair cut',
      description: 'Available be the majority have suffered alteration in some form, by injected humour.',
      active: false,
    },
    {
      icon: brushIcon,
      title: 'Cut & hair style',
      description: 'Available be the majority have suffered alteration in some form, by injected humour.',
      active: true,
    },
    {
      icon: washIcon,
      title: 'Color & hair wash',
      description: 'Available be the majority have suffered alteration in some form, by injected humour.',
      active: false,
    },
  ];



  const testimonials = [
    {
      name: 'Wilma Mumduya',
      avatar: wilma1,
      text: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.',
    },
    {
      name: 'Jimmy Changa',
      avatar: jimmy,
      text: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.',
    },
    {
      name: 'Wilma Mumduya',
      avatar: wilma2,
      text: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.',
    },
  ];


  return (
  <>
   {/* Service Header Section */}
      < div className="naro-servicesubbackground" >
        <div className="naro-servicebluebackground">
          <div className="naro-info">
            <h1>SERVICE</h1>
          </div>
          <div className="main-servicenaro">
            <img src={servicenaroheader} alt="Service Naro" />
          </div>
        </div>
      </div ><br /><br />


    {/* Service Section */}
 <div className="service-section">
  <div className="service-left">
    <h2>All We Do For You</h2>

    {/* For Hair Accordion */}
    <div className="accordion">
      <div
        className="accordion-header hair"
        onClick={() => toggleSection('hair')}
      >
        <span>For Hair</span>
        <span>{openSection === 'hair' ? '▲' : '▼'}</span>
      </div>
      {openSection === 'hair' && (
        <div className="accordion-content">
          {hairServices.map((item, index) => (
            <div className="accordion-item" key={index}>
              <span>{item}</span>
              <span className="price">From <strong>$40</strong></span>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* For Beard Accordion */}
    <div className="accordion">
      <div
        className="accordion-header beard"
        onClick={() => toggleSection('beard')}
      >
        <span>For Beard</span>
        <span>{openSection === 'beard' ? '▲' : '▼'}</span>
      </div>
      {openSection === 'beard' && (
        <div className="accordion-content">
          {beardServices.map((item, index) => (
            <div className="accordion-item" key={index}>
              <span>{item}</span>
              <span className="price">From <strong>$40</strong></span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>

  {/* Service Image Side-by-Side */}
  <div className="service-right">
    <img src={imgservice} alt="Naro-barber2" />
  </div>
</div>

    

    {/* Hair Style Section */}
    <div className="hair-style-section">
      <div className="hair-style-container">
        {serviceCards.map((card, index) => (
          <div key={index} className={`hair-style-card ${card.active ? 'active' : ''}`}>
            <div className="hair-style-icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}

        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="gallery-container">
            {[g1, g2, g3, g4, g5].map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="testimonials-section">
      <h2 className="testimonial-title">
        <span className="testimonial-bar"></span>
        CUSTOMERS SAY ABOUT US
      </h2>

      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-footer">
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <span>{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="footer">
      <div className="footer-contact">
        <img src={phoneIcon} alt="Phone" />
        <h4>Contact Info</h4>
        <p>913-473-7000</p>
        <p>contact@cakeshop.com</p>
      </div>

      <div className="footer-center">
        <img src={narologo2} alt="Logo" className="footer-logo" />
        <p>There are many variations of passages of Lorem Ipsum available be the majority.</p>
        <div className="footer-socials">
          <img src={facebookIcon} alt="Facebook" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
      </div>

      <div className="footer-contact">
        <img src={locationIcon} alt="Location" />
        <h4>Contact Info</h4>
        <p>913-473-7000</p>
        <p>contact@cakeshop.com</p>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-bottom">
      <p>
        Copyright ©2025 All rights reserved |
        This template is made with ❤️ by <a href="https://colorlib.com">Colorlib</a>
      </p>
    </div>
  </>
);
}
export default Service;
