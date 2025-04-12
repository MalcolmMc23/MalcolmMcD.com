import React from 'react';
import FeatureItem from '../items/FeatureItem'; // Adjust path if needed
import styles from './FeatureListSection.module.css';

// Data for the feature items - replace with actual content
const featuresData = [
    {
        // icon: IconComponent1, // Replace with actual icon components or paths
        title: "Experienced Design",
        description: "With over 20 years of experience designing diverse landscapes with a customer-focused approach, we're here to bring your vision to life."
    },
    {
        // icon: IconComponent2,
        title: "Professional Installation",
        description: "From sprinkler systems to retaining walls and water features, EO Landscaping offers expert installation services for a variety of landscape features."
    },
    {
        // icon: IconComponent3,
        title: "Reliable Maintenance",
        description: "We take pride in our work and offer ongoing maintenance services to keep your yard looking its best. No matter the size, we have the tools and expertise to get the job done right."
    }
];

function FeatureListSection() {
    return (
        <section className={styles.featureListSection}>
            <div className={styles.featureListContainer}>
                {featuresData.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        // icon={feature.icon} // Pass the actual icon component here
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeatureListSection; 