import React from 'react';
import styles from './TestimonialCard.module.css'; // We will create this CSS file next

const StarRating = ({ rating }) => (
    <div className={styles.starRating}>
        {[...Array(5)].map((_, index) => (
            <span key={index} className={`${styles.star} ${index < rating ? styles.filled : ''}`}>
                ★
            </span>
        ))}
    </div>
);

function TestimonialCard({ rating, title, text, author }) {
    return (
        <div className={styles.card}>
            <StarRating rating={rating} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            <p className={styles.author}>- {author}</p>
        </div>
    );
}

export default TestimonialCard; 