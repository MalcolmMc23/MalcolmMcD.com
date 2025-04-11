import React from 'react';
import '../App.css'; // Adjust path as needed if styles are moved

function Header() {
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
                <div className="right-section"></div>
            </div>
        </header>
    );
}

export default Header; 