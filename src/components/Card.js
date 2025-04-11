import React from 'react';
import './Card.css'; // Import the CSS file
import '../App.css'; // Ensure this path is correct

function Card({ title, description, details, linkUrl, imageUrl }) {
    const content = (
        <>
            {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {details && <p className="card-details"><strong>Technologies:</strong> {details}</p>}
            </div>
        </>
    );

    if (linkUrl) {
        return (
            <li className="card">
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="card-link">
                    {content}
                </a>
            </li>
        );
    } else {
        return (
            <li className="card no-link">
                {content}
            </li>
        );
    }
}

export default Card; 