import React from 'react';
import '../App.css'; // Adjust path as needed
import ExperienceItem from './ExperienceItem'; // Import the new component

// Define experience data
const experiences = [
    {
        title: "Panel Developer - Defifa.net Art Panels",
        description: "Created dynamic anxd interactive art panels using p5.js for Defifa.net, a blockchain-based project.",
        technologies: "p5.js, JavaScript",
        githubUrl: "https://github.com/MalcolmMc23/p5JS_ArtPanels" // Add GitHub URL here
    }
    // Add more experience objects here if needed
];

function ExperienceSection({ addSectionRef }) {
    return (
        <section id="experience" className="experience-section section" ref={addSectionRef}>
            <h2>Experience</h2>
            <ul className="experience-list">
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        title={exp.title}
                        description={exp.description}
                        technologies={exp.technologies}
                        githubUrl={exp.githubUrl} // Pass the URL
                    />
                ))}
            </ul>
        </section>
    );
}

export default ExperienceSection; 