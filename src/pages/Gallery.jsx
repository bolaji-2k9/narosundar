import React from 'react'
import gallerynaroheader from '../images/naro-barber11.jpg';


// Import service images
import img1 from '../images/naro-barber3.jpg';
import img2 from '../images/naro-barber4.jpg';
import img3 from '../images/naro-barber5.jpg';
import img4 from '../images/naro-barber6.jpg';
import img5 from '../images/naro-barber7.jpg';
import img6 from '../images/naro-barber8.jpg';

//Footer
import narologo2 from '../images/naro-logo2.png';
import phoneIcon from '../images/phone.png';
import locationIcon from '../images/location.png';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';

export const Gallery = () => {
const gallery = [
    'Special Beard Treatment',
    'Special Beard Treatment',
    'Color your Beard',
    'Wax your Beard',
    'Wax your Beard',
    'Beard Shaping',
  ];

  return (
     
    <div className="gallery-section">
     
      < div className="naro-gallerysubbackground" >
        <div className="naro-gallerybluebackground">
          <div className="naro-info">
            <h1>GALLERY</h1>
          </div>
          <div className="main-gallerynaro">
            <img src={gallerynaroheader} alt="Gallery Naro" />
          </div>
        </div>
      </div ><br /><br />


<div className="gallery-page">
  <h2 className="gallery-title">
    <span className="gallery-bar"></span>
    GALLERY
  </h2>
<div className="gallery-images">
        <img src={img1} alt="Service 1" />
        <img src={img2} alt="Service 2" />
        <img src={img3} alt="Service 3" />
        <img src={img4} alt="Service 4" />
        <img src={img5} alt="Service 5" />
        <img src={img6} alt="Service 6" />
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
export default Gallery;
