import React from 'react';
import styles from './FeatureItem.module.css';

// Placeholder component removed

function FeatureItem({ icon: IconComponent, title, description }) {
    // Directly use the passed IconComponent. Ensure it's passed or handle the case where it might be undefined.
    // Renamed prop 'icon' to 'IconComponent' for clarity, as it's a component.

    return (
        <div className={styles.featureItem}>
            <div className={styles.iconContainer}>
                {/* Render the passed icon component if it exists */}
                {IconComponent && <IconComponent className={styles.icon} />}
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default FeatureItem; 