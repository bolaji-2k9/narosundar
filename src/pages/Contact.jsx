import React from 'react';
import contactnaroheader from '../images/main-naro-contact.jpg';
import homeIcon from '../images/home.png';

import emailIcon from '../images/email.png';

//Footer
import narologo2 from '../images/naro-logo2.png';
import phoneIcon from '../images/phone.png';
import locationIcon from '../images/location.png';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';

export const Contact = () => {
  return (

    <div className="contact-page">
      {/* Header Section */}
      < div className="naro-contactsubbackground" >
        <div className="naro-contactbluebackground">
          <div className="naro-info">
            <h1>CONTACT</h1>
          </div>
          <div className="main-contactnaro">
            <img src={contactnaroheader} alt="Contact Naro" />
          </div>
        </div>
      </div ><br /><br />


      {/* Google Maps Embed */}
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://maps.google.com/maps?q=Rosemead,%20California&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Form with Info */}
      <div className="contact-content">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <form>
            <textarea placeholder="Enter Message" required></textarea>
            <div className="contact-row">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Enter Subject" required />
            <button type="submit" className="contact-btn">Send</button>
          </form>
        </div>

        <div className="contact-right">
          <div className="contact-info">
            <img src={homeIcon} alt="Address" />
            <div>
              <strong>Buttonwood, California.</strong><br />
              Rosemead, CA 91770
            </div>
          </div>

          <div className="contact-info">
            <img src={phoneIcon} alt="Phone" />
            <div>
              <strong>+1 253 565 2365</strong><br />
              Mon to Fri 9am to 6pm
            </div>
          </div>

          <div className="contact-info">
            <img src={emailIcon} alt="Email" />
            <div>
              <strong>support@colorlib.com</strong><br />
              Send us your query anytime!
            </div>
          </div>
        </div>
      </div>



      <div className="footer">
                  {/* Left Contact */}
                  <div className="footer-contact">
                    <img src={phoneIcon} alt="Phone" />
                    <h4>Contact Info</h4>
                    <p>913-473-7000</p>
                    <p>contact@cakeshop.com</p>
                  </div>
          
                  {/* Center Info */}
                  <div className="footer-center">
                    <img src={narologo2} alt="Logo" className="footer-logo" />
                    <p>There are many variations of passages of Lorem Ipsum available be the majority.</p>
                    <div className="footer-socials">
                      <img src={facebookIcon} alt="Facebook" />
                      <img src={instagramIcon} alt="Instagram" />
                      <img src={linkedinIcon} alt="LinkedIn" />
                    </div>
                  </div>
          
                  {/* Right Contact */}
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
          
          
    </div>
  );
};

export default Contact;
