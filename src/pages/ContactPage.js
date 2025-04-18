import React from 'react';
import styles from './ContactPage.module.css'; // Assuming you might want some styling
import ContactForm from '../components/ContactForm/ContactForm';

function ContactPage() {
    return (
        <main className={styles.contactContainer}>
            <h1>Contact Me</h1>
            <p className={styles.introText}>Have a question or want to work together? Send a message using the form below.</p>
            {/* Add the Netlify contact form */}
            <ContactForm />
        </main>
    );
}

export default ContactPage; 