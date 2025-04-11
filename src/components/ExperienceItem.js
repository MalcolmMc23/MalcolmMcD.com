import React from 'react';
import '../App.css'; // Ensure this path is correct

function ExperienceItem({ title, description, technologies, githubUrl }) {
    // Only render the link if githubUrl is provided
    if (githubUrl) {
        return (
            <li className="experience-item">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="experience-link">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p><strong>Technologies:</strong> {technologies}</p>
                </a>
            </li>
        );
    } else {
        // Render without a link if no githubUrl
        return (
            <li className="experience-item no-link">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Technologies:</strong> {technologies}</p>
            </li>
        );
    }
}

export default ExperienceItem; 