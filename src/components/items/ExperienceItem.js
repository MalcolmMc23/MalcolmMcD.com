import React from 'react';
import Card from '../Card'; // Updated path

function ExperienceItem({ title, description, technologies, githubUrl, imageUrl }) {
    return (
        <Card
            title={title}
            description={description}
            details={technologies}
            linkUrl={githubUrl}
            imageUrl={imageUrl}
        />
    );
}

export default ExperienceItem; 