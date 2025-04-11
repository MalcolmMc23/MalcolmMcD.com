import React, { useEffect, useRef } from 'react';
import './index.css'; // Import the main CSS file
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

function App() {
  // Intersection Observer Logic for fade-in effect
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sectionsRef.current.forEach(section => {
      if (section) { // Check if the ref is not null
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Helper function to add section refs
  const addSectionRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      <Header />
      <main>
        <SkillsSection addSectionRef={addSectionRef} />
        <ProjectsSection addSectionRef={addSectionRef} />
        <ExperienceSection addSectionRef={addSectionRef} />
        <EducationSection addSectionRef={addSectionRef} />
      </main>
      <Footer />
    </>
  );
}

export default App;
