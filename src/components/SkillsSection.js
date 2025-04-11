import React from 'react';
import '../App.css'; // Adjust path as needed

function SkillsSection({ addSectionRef }) {
    return (
        <section id="skills" className="skills-section section" ref={addSectionRef}>
            <h2>Skills</h2>
            <ul className="skills-list">
                <li>JavaScript, HTML, CSS, Python</li>
                <li>API Development and Integration</li>
                <li>Express.js, Node.js</li>
                <li>Postman, Coolify, Hetzner Cloud</li>
                <li>Blockchain, Web3, Smart Contracts (Learning)</li>
            </ul>
        </section>
    );
}

export default SkillsSection; 