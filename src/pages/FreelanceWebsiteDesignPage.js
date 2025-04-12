import React from 'react';
import CallToActionCard from '../components/CallToActionCard'; // Adjust path if needed
import styles from './FreelanceWebsiteDesignPage.module.css';

// Assuming you have an image file in your public folder or assets
// Replace with the actual path to your image
const heroImageUrl = '/landscaping/landscaping-on-page.webp'; // Use image from the landscaping folder
const whyChooseImageUrl = '/landscaping/landscape-material-uses.jpg'; // Image for the "Why Choose Us" section

function FreelanceWebsiteDesignPage() {
    // Text content for the first card
    const cardTitle = "Ready for a New Website?";
    const cardDescription = "I design and develop custom, responsive websites focused on user experience and achieving your business objectives. Get in touch for a free consultation!";
    const primaryButtonText = "Get a Quote";
    const secondaryButtonText = "541.912.5869";
    const secondaryButtonLink = "tel:5419125869"; // Make the phone number clickable

    return (
        <main className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.mainTitle}>Landscaping & Lawn Care Services</h1>
                <p className={styles.subTitle}>Serving Eugene, Marion, Benton, Lane County, and beyond!</p>
            </header>

            {/* Existing Content Grid */}
            <section className={styles.contentGrid}>
                <div className={styles.imageContainer}>
                    <img src={heroImageUrl} alt="Beautifully landscaped property with green lawn and red-roofed building" className={styles.heroImage} />
                </div>
                <CallToActionCard
                    title={cardTitle}
                    description={cardDescription}
                    primaryButtonText={primaryButtonText}
                    // primaryButtonLink="/contact" // Example link
                    secondaryButtonText={secondaryButtonText}
                    secondaryButtonLink={secondaryButtonLink}
                />
            </section>

            {/* Why Choose Us Section */}
            <section className={styles.whyChooseSection}>
                <div className={styles.whyChooseGrid}>
                    <div className={styles.whyChooseText}>
                        <h2 className={styles.whyChooseHeading}>Why Partner With Me?</h2>
                        <p className={styles.whyChooseParagraph}>
                            I build modern, responsive websites tailored to your specific needs. With a focus on clean code, intuitive user experience (UX), and clear communication, I partner with you to bring your digital vision to life effectively and efficiently. Let's create a website that not only looks great but also achieves your goals.
                        </p>
                        <a href="/contact" className={styles.whyChooseButtonLink}>
                            <button className={styles.whyChooseButton}>Get a Free Estimate</button>
                        </a>
                    </div>
                    <div className={styles.whyChooseImageContainer}>
                        <img src={whyChooseImageUrl} alt="Landscaping materials and design elements" className={styles.whyChooseImage} />
                    </div>
                </div>
            </section>

        </main>
    );
}

export default FreelanceWebsiteDesignPage; 