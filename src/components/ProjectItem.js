import React from 'react';
import '../App.css'; // Ensure this path is correct relative to ProjectItem.js

function ProjectItem({ title, description, technologies, githubUrl }) {
    return (
        <li className="project-item">
            {/* Wrap the entire content in an anchor tag */}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Technologies:</strong> {technologies}</p>
            </a>
        </li>
    );
}

export default ProjectItem; 