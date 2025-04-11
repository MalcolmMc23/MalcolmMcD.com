import React from 'react';
import ProjectItem from '../items/ProjectItem'; // Updated path
import './Section.css'; // Import section styles

const projects = [
    {
        title: "Alumo (QuackHacks Winner)",
        description: "An AI-driven career center helping students connect with alumni, get job recommendations, and receive personalized career guidance.",
        technologies: "Next.js, React, Node.js, PostgreSQL, Prisma, Docker, OpenRouter API",
        githubUrl: "https://github.com/MalcolmMc23/Alumo",
    },
    {
        title: "QuoteFinder.xyz",
        description: "Developed a web app to extract quotes from PDFs using OpenAI API, featuring a responsive full-stack solution deployed on Hetzner Cloud.",
        technologies: "JavaScript, Node.js, Express.js, PostgreSQL, OpenAI API, Hetzner Cloud, Coolify",
        githubUrl: "https://github.com/MalcolmMc23/quotefinder.xyz",
    },
    {
        title: "Mars-Game",
        description: "Developed a 2D platformer game with team collaboration, focusing on gameplay mechanics, AI, and level progression.",
        technologies: "JavaScript, HTML, CSS",
        githubUrl: "https://github.com/MalcolmMc23/Mars-Game",
    },
    {
        title: "Lockify (BeaverHacks)",
        description: "Developed a React Native mobile app for the BeaverHacks, focused on intelligent task management with focus mode features.",
        technologies: "React Native, Expo, TypeScript, AsyncStorage, React Navigation, Expo Router",
        githubUrl: "https://github.com/MalcolmMc23/BeaverHacks",
    },
    {
        title: "Jetpack Runner 3D",
        description: "A simple 3D endless runner game built with Three.js, featuring first-person view, coin collection, and time-limited runs.",
        technologies: "Three.js, Parcel, JavaScript, HTML",
        githubUrl: "https://github.com/MalcolmMc23/3d-Jetpack-Joyride",
    },
    {
        title: "Acne App",
        description: "A React Native/Expo app for acne management and analysis, featuring AI image analysis using OpenAI's vision model.",
        technologies: "React Native, Expo, Expo Router, Expo Camera, OpenAI API",
        githubUrl: "https://github.com/MalcolmMc23/AcneApp",
    }
];

function ProjectsSection({ addSectionRef }) {
    return (
        <section id="projects" className="projects-section section" ref={addSectionRef}>
            <h2>Projects</h2>
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </ul>
        </section>
    );
}

export default ProjectsSection; 