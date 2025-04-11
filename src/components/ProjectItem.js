import React from 'react';
import Card from './Card'; // Import the new Card component

function ProjectItem({ title, description, technologies, githubUrl, imageUrl }) {
    return (
        <Card
            title={title}
            description={description}
            details={technologies} // Pass technologies as details
            linkUrl={githubUrl}     // Pass githubUrl as linkUrl
            imageUrl={imageUrl}    // Pass imageUrl to Card
        />
    );
}

export default ProjectItem; 