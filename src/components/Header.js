import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Adjust path as needed if styles are moved

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="header-content">
                <div className="left-section">
                    {/* Use the image from the public folder */}
                    <img src="/profile.jpg" alt="Malcolm McDonald" className="profile-image" loading="lazy" />
                </div>
                <div className="center-section">
                    <div className="header-text">
                        <h1>Malcolm McDonald</h1>
                        <p>Developer | San Francisco, CA</p>
                    </div>
                </div>
                <div className="right-section">
                    {/* Burger Menu Button - Hidden on Desktop by CSS */}
                    <button className="burger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation Links - Class changes based on state for mobile */}
                    <nav className={isMobileMenuOpen ? 'main-nav mobile-nav-open' : 'main-nav'}>
                        {/* Close button for mobile */}
                        <button className="close-menu" onClick={toggleMobileMenu} aria-label="Close menu">&times;</button>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                        <div className="nav-item dropdown">
                            {/* The NavLink for Services needs careful handling if it's also a trigger */}
                            <NavLink
                                to="/services"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                // Keep mobile menu open when clicking the main Services link if needed, or close it
                                // onClick={() => setIsMobileMenuOpen(false)} // Example: Close menu on click
                                aria-current="page"
                            >
                                Services
                            </NavLink>
                            <div className="dropdown-content">
                                <NavLink to="/services/freelance-website-design" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Freelance Website Design</NavLink>
                                {/* Add other service links here, ensure they also close the menu */}
                                <NavLink to="/services/mobile-app-development" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Mobile App Development</NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header; 