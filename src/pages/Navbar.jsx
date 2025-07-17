import React from 'react'
import { NavLink } from 'react-router-dom'
import narologo from '../images/naro-logo.png'

export const Navbar = () => {
    return (
        <header className='naro-container'>
           <img src={narologo} alt="Naro logo" />
            <nav>
                <ul className='naro-menu'>
                    <li><NavLink to = "/" className = 'naro-links'>Home</NavLink></li>
                    <li><NavLink to = "about" className = 'naro-links'>About</NavLink></li>
                    <li><NavLink to = "service" className = 'naro-links'>Service</NavLink></li>
                    <li><NavLink to = "gallery" className = 'naro-links'>Gallery</NavLink></li>
                    <li><NavLink to = "blog" className = 'naro-links'>Blog</NavLink></li>
                    <li><NavLink to = "contact" className = 'naro-links'>Contact</NavLink></li>
                    <li><NavLink to = "fetchingApi" className = 'naro-links'>FetchingApi</NavLink></li>
<NavLink to="/contact" className='free-quote-btn'>Free Quote</NavLink>
                </ul>
                
            </nav>

        </header>
    )
}
