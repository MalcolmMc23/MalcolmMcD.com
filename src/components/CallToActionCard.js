import React from 'react';
import styles from './CallToActionCard.module.css'; // Import the CSS module

function CallToActionCard({ title, description, primaryButtonText, primaryButtonLink, secondaryButtonText, secondaryButtonLink }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {primaryButtonText && (
                <a href={primaryButtonLink || '#'} className={`${styles.button} ${styles.primaryButton}`}>
                    {primaryButtonText}
                </a>
            )}
            {secondaryButtonText && (
                <a href={secondaryButtonLink || '#'} className={`${styles.button} ${styles.secondaryButton}`}>
                    {secondaryButtonText}
                </a>
            )}
        </div>
    );
}

export default CallToActionCard; 