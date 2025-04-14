import React from 'react';
import FeatureItem from '../items/FeatureItem'; // Adjust path if needed
import styles from './FeatureListSection.module.css';
// Import new icons relevant to web development
import { PiDevices, PiRocketLaunch, PiChartLineUp } from "react-icons/pi";

// Data for the feature items - updated for web development services
const featuresData = [
    {
        icon: PiDevices, // Icon for Responsive Design
        title: "Custom & Responsive Design",
        description: "Beautiful websites tailored to your brand, looking great on desktops, tablets, and phones. Attract clients on any device."
    },
    {
        icon: PiRocketLaunch, // Icon for Performance
        title: "Fast & Reliable Performance",
        description: "Optimized for speed and smooth user experience. Ensure your site loads quickly and runs flawlessly, keeping visitors engaged."
    },
    {
        icon: PiChartLineUp, // Icon for Growth/Results
        title: "Focused on Your Growth",
        description: "Built with SEO best practices and clear calls-to-action to help you attract more leads and grow your web design business online."
    }
];

function FeatureListSection() {
    return (
        <section className={styles.featureListSection}>
            <div className={styles.featureListContainer}>
                {featuresData.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        icon={feature.icon} // Pass the actual icon component here
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeatureListSection; 