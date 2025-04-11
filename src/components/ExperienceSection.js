import React from 'react';
import '../App.css'; // Adjust path as needed

function ExperienceSection({ addSectionRef }) {
    return (
        <section id="experience" className="experience-section section" ref={addSectionRef}>
            <h2>Experience</h2>
            <ul className="experience-list">
                <li>
                    <h3>Panel Developer - Defifa.net Art Panels</h3>
                    <p>Created dynamic and interactive art panels using p5.js for Defifa.net, a blockchain-based project.</p>
                    <p><strong>Technologies:</strong> p5.js, JavaScript</p>
                    <p><a href="https://github.com/MalcolmMc23/p5JS_ArtPanels" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
                </li>
            </ul>
        </section>
    );
}

export default ExperienceSection; 