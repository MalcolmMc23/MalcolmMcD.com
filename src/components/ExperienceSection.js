import React from 'react';
import './Section.css'; // Import section styles
import ExperienceItem from './ExperienceItem'; // Import the new component

// Define experience data
const experiences = [
    {
        title: "Full Stack Developer",
        description: "Developed and deployed full stack applications using JavaScript, React, Node.js, and SQL databases. Led projects from concept to deployment, focusing on clean code and performance.",
        technologies: "JavaScript, React, Node.js, SQL, Docker, CI/CD",
        githubUrl: "https://github.com/MalcolmMc23/quotefinder.xyz", // Example link, update as needed
    },
    {
        title: "React Native Developer",
        description: "Contributed to the development of mobile applications using React Native and TypeScript, ensuring cross-platform compatibility and smooth user experience.",
        technologies: "React Native, TypeScript, Expo, AsyncStorage",
        githubUrl: "https://github.com/MalcolmMc23/BeaverHacks", // Example link, update as needed
    }
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
                        githubUrl={exp.githubUrl}
                    />
                ))}
            </ul>
        </section>
    );
}

export default ExperienceSection; 