import React, { useEffect, useRef } from 'react';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import EducationSection from '../components/sections/EducationSection';

function HomePage() {
    // Intersection Observer Logic for fade-in effect
    const sectionsRef = useRef([]);

    useEffect(() => {
        // 1) Make a local copy of the array so ESLint doesn't complain
        const sections = sectionsRef.current;

        // 2) Create the intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // stop observing once visible
                    }
                });
            },
            { threshold: 0.1 }
        );

        // 3) Observe each section in our local copy
        sections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        // 4) Cleanup: unobserve every section in the local copy
        return () => {
            sections.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
        // No dependencies => runs only once on mount/unmount
    }, []);

    // Helper function to add section refs
    const addSectionRef = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <main>
            <SkillsSection addSectionRef={addSectionRef} />
            <ProjectsSection addSectionRef={addSectionRef} />
            <ExperienceSection addSectionRef={addSectionRef} />
            <EducationSection addSectionRef={addSectionRef} />
        </main>
    );
}

export default HomePage; 