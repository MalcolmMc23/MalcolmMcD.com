import React from 'react';
import '../App.css'; // Adjust path as needed

function ProjectsSection({ addSectionRef }) {
    return (
        <section id="projects" className="projects-section section" ref={addSectionRef}>
            <h2>Projects</h2>
            <ul className="projects-list">
                <li>
                    <h3>QuoteFinder.xyz</h3>
                    <p>Developed a web app to extract quotes from PDFs using OpenAI API, featuring a responsive full-stack solution deployed on Hetzner Cloud.</p>
                    <p><strong>Technologies:</strong> JavaScript, Node.js, Express.js, PostgreSQL, OpenAI API, Hetzner Cloud, Coolify</p>
                    <p><a href="https://github.com/MalcolmMc23/quotefinder.xyz" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                </li>
                <li>
                    <h3>Mars-Game</h3>
                    <p>Developed a 2D platformer game with team collaboration, focusing on gameplay mechanics, AI, and level progression.</p>
                    <p><strong>Technologies:</strong> JavaScript, HTML, CSS</p>
                    <p><a href="https://github.com/MalcolmMc23/Mars-Game" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                </li>
            </ul>
        </section>
    );
}

export default ProjectsSection; 