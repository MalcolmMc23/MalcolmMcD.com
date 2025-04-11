import React from 'react';
import CallToActionCard from '../components/CallToActionCard'; // Adjust path if needed
import styles from './FreelanceWebsiteDesignPage.module.css';

// Assuming you have an image file in your public folder or assets
// Replace with the actual path to your image
const heroImageUrl = '/landscaping/landscaping-on-page.webp'; // Use image from the landscaping folder
const whyChooseImageUrl = '/landscaping/landscape-material-uses.jpg'; // Image for the "Why Choose Us" section

function FreelanceWebsiteDesignPage() {
    // Text content for the first card
    const cardTitle = "Get a Free Estimate";
    const cardDescription = "Specializing in Residential and Commercial custom landscaping and maintenance including irrigation services, fences and decks, walls, patios and walkways.";
    const primaryButtonText = "Free Estimate";
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
                        <h2 className={styles.whyChooseHeading}>Why Choose EO Landscaping?</h2>
                        <p className={styles.whyChooseParagraph}>
                            EO Landscaping brings over 20 years of expertise to custom landscaping and maintenance across Eugene, Springfield, and nearby areas. Founded by Eric Osborn, our family-owned team of 12 offers full-service landscaping, including irrigation, fencing, patios, and more. Whether it's routine lawn care of a complete outdoor transformation, we deliver high-quality work at competitive prices. With a focus on exceptional service, we're here to make your vision a reality--contact us today for a free estimate.
                        </p>
                        <button className={styles.whyChooseButton}>Get a Free Estimate</button>
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