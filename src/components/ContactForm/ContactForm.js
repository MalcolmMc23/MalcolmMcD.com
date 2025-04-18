import React, { useState } from 'react';
import { CheckCircle } from "lucide-react";
import styles from './ContactForm.module.css';

/**
 * ContactForm – Component using Netlify Forms.
 */
export default function ContactForm() {
    const [sent, setSent] = useState(false);

    // Helper to x-www-form-urlencode an object
    const encode = (data) =>
        Object.keys(data)
            .map((key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        const data = {
            "form-name": "contact", // Ensure this matches the form name attribute
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            await fetch("/", { // POST to the same path the form is on
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode(data),
            });
            setSent(true);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Whoops! Something went wrong – please try again later.");
        }
    };

    if (sent) {
        return (
            <div className={styles.successContainer}>
                <CheckCircle size={56} className={styles.successIcon} />
                <h2 className={styles.successHeading}>Thanks for reaching out!</h2>
                <p className={styles.successText}>
                    I'll get back to you as soon as I can.
                </p>
            </div>
        );
    }

    return (
        <section className={styles.formSection}>
            {/* IMPORTANT: Netlify needs a plain HTML version of the form at deploy time.
          You can achieve this by:
          1. Keeping a simple HTML file with the form structure in your public folder.
          2. Or ensuring this form structure is present in your prerendered/static output.
          The `data-netlify="true"` and hidden `form-name` input are crucial. */}
            <form
                name="contact" // This name must match the hidden input's value
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field" // Optional: honeypot for spam protection
                onSubmit={handleSubmit}
                className={styles.contactForm}
            >
                {/* Hidden input for Netlify to identify the form */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot anti-spam field (hidden) */}
                <p className={styles.hiddenField} aria-hidden="true">
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </p>

                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={styles.formInput}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={styles.formInput}
                    />
                </div>

                <div className={styles.formGroupMessage}>
                    <label htmlFor="message" className={styles.formLabel}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="What's up?"
                        className={styles.formTextarea}
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                >
                    Send message
                </button>
            </form>
        </section>
    );
} 