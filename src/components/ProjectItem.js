import React from 'react';
import Card from './Card'; // Import the new Card component

function ProjectItem({ title, description, technologies, githubUrl }) {
    return (
        <Card
            title={title}
            description={description}
            details={technologies} // Pass technologies as details
            linkUrl={githubUrl}     // Pass githubUrl as linkUrl
        />
    );
}

export default ProjectItem; 