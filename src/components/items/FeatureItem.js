import React from 'react';
import styles from './FeatureItem.module.css';

// Placeholder component for an icon - replace with actual icons later
const IconPlaceholder = () => (
    <div className={styles.iconPlaceholder}>
        {/* You can put a temporary character or symbol here if needed */}
        ?
    </div>
);

function FeatureItem({ icon, title, description }) {
    // Determine which icon to render. For now, use the placeholder.
    const IconComponent = icon || IconPlaceholder; // If 'icon' prop is passed, use it, otherwise default to placeholder

    return (
        <div className={styles.featureItem}>
            <div className={styles.iconContainer}>
                <IconComponent className={styles.icon} />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default FeatureItem; 