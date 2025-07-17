import React from 'react'
import blognaroheader from '../images/main-naro-contact.jpg';
import blogImg1 from '../images/blog1.jpg';
import blogImg2 from '../images/blog2.jpg';
import blogImg3 from '../images/blog3.jpg';

//Footer
import narologo2 from '../images/naro-logo2.png';
import phoneIcon from '../images/phone.png';
import locationIcon from '../images/location.png';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import linkedinIcon from '../images/linkedin.png';

export const Blog = () => {

const blogPosts = [
    {
      id: 1,
      image: blogImg1,
      title: 'Google inks pact for new 35-storey office',
      date: 'Jan 15, 2025',
      author: 'Admin',
      excerpt: 'That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.',
    },
    {
      id: 2,
      image: blogImg2,
      title: 'Google inks pact for new 35-storey office',
      date: 'Jan 15, 2025',
      author: 'Admin',
      excerpt: 'That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.',
    },
    {
      id: 3,
      image: blogImg3,
      title: 'Google inks pact for new 35-storey office',
      date: 'Jul 1, 2025',
      author: 'Admin',
      excerpt: 'That dominion stars lights dominion divide years for fourth have do not stars is that he earth it first without heaven in place seed it second morning saying.',
    },
  ];



  return (
    <div className="blog-page">
          {/* Header Section */}
          < div className="naro-blogsubbackground" >
            <div className="naro-blogbluebackground">
              <div className="naro-info">
                <h1>BLOG</h1>
              </div>
              <div className="main-blognaro">
                <img src={blognaroheader} alt="Blog Naro" />
              </div>
            </div>
          </div ><br /><br />



 <div className="blog-section">
      <h2 className="blog-title">Our Blog</h2>
      <span className="blog-bar" />
      <div className="blog-grid">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-meta">{post.date} | By {post.author}</span>
              <h3 className="blog-heading">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="blog-readmore">Read More</a>
            </div>
          </div>
        ))}
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
  )
}
export default Blog;
