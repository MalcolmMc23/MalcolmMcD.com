import React from 'react';
import TestimonialCard from './TestimonialCard';
import styles from './TestimonialSection.module.css'; // We will create this CSS file next

const testimonials = [
    {
        rating: 5,
        title: "Fantastic Website!",
        text: "Malcolm built an amazing website for my business. He understood my vision perfectly and delivered a site that's both beautiful and functional. The process was smooth and collaborative.",
        author: "Local Business Owner"
    },
    {
        rating: 5,
        title: "Highly Recommend!",
        text: "Working with Malcolm was a great experience. He's highly skilled, responsive, and delivered a professional website that exceeded my expectations. My online presence has improved significantly!",
        author: "Satisfied Client"
    },
    {
        rating: 5,
        title: "Exceptional Service!",
        text: "From the initial consultation to the final launch, Malcolm provided exceptional service. He explained everything clearly and created a website that truly represents my brand. I'm thrilled with the result.",
        author: "Happy Entrepreneur"
    }
];

function TestimonialSection() {
    return (
        <section className={styles.testimonialSection}>
            <h2 className={styles.sectionTitle}>Trusted by Clients</h2>
            <div className={styles.testimonialGrid}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        rating={testimonial.rating}
                        title={testimonial.title}
                        text={testimonial.text}
                        author={testimonial.author}
                    />
                ))}
            </div>
        </section>
    );
}

export default TestimonialSection; 