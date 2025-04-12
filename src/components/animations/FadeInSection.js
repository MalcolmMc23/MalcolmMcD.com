import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeInSection.module.css';

function FadeInSection(props) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.1, // Trigger when 10% of the element is visible
        // rootMargin: '0px 0px -50px 0px' // Optional: Adjust the trigger point
    });

    return (
        <div
            ref={ref}
            className={`${styles.fadeInSection} ${inView ? styles.isVisible : ''}`}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection; 