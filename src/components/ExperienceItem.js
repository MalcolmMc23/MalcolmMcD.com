import React from 'react';
import Card from './Card'; // Import the new Card component

function ExperienceItem({ title, description, technologies, githubUrl }) {
    return (
        <Card
            title={title}
            description={description}
            details={technologies}
            linkUrl={githubUrl}
        />
    );
}

export default ExperienceItem; 