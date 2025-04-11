import React from 'react';
import '../App.css'; // Adjust path as needed

function EducationSection({ addSectionRef }) {
    return (
        <section id="education" className="education-section section" ref={addSectionRef}>
            <h2>Education</h2>
            <ul className="education-list">
                <li>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p>University of Oregon | Eugene, OR | Sep 2024 - Present</p>
                    <p>Major: Computer Science</p>
                </li>
            </ul>
        </section>
    );
}

export default EducationSection; 