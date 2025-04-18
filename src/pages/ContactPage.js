import React from 'react';
import styles from './ContactPage.module.css'; // Assuming you might want some styling
import ContactForm from '../components/ContactForm/ContactForm';

function ContactPage() {
    return (
        <main className={styles.contactContainer}>
            <h1>Contact Me</h1>
            <p>Feel free to reach out through any of the methods below:</p>

            <section className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                    <h2>Email</h2>
                    <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
                    {/* Replace with your actual email */}
                </div>

                {/* Optional: Add other contact methods like LinkedIn, GitHub, etc. */}
                {/* Example:
                <div className={styles.contactMethod}>
                    <h2>LinkedIn</h2>
                    <p><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
                </div>
                 */}
                {/* Example:
                <div className={styles.contactMethod}>
                    <h2>GitHub</h2>
                    <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></p>
                </div>
                 */}
            </section>

            {/* Add the Netlify contact form */}
            <ContactForm />
        </main>
    );
}

export default ContactPage; 