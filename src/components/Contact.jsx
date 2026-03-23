import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.formColumn}>
          <h2 className={styles.headline}>Begin Your Journey</h2>
          <form className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={styles.input} placeholder="John Doe" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={styles.input} placeholder="john@example.com" />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Your Message</label>
              <textarea className={styles.textarea} rows="6" placeholder="Tell us about your space..."></textarea>
            </div>
            <button type="button" className={styles.submitBtn}>Book a Consultation</button>
          </form>
        </div>
        
        <div className={styles.infoColumn}>
          <div>
            <h3 className={styles.subheadline}>Contact Details</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={`material-symbols-outlined ${styles.icon}`}>location_on</span>
                <span>452 Park Avenue, New York, NY 10022</span>
              </div>
              <div className={styles.contactItem}>
                <span className={`material-symbols-outlined ${styles.icon}`}>mail</span>
                <span>hello@inspiredredesign.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={`material-symbols-outlined ${styles.icon}`}>call</span>
                <span>+1 (212) 555-0198</span>
              </div>
            </div>
          </div>
          
          <div className={styles.buttonGroup}>
            <button className={styles.callBtn}>
              <span className="material-symbols-outlined">call</span> Call Our Studio
            </button>
            <button className={styles.whatsappBtn}>
              <span className="material-symbols-outlined">chat</span> WhatsApp Us
            </button>
          </div>
          
          <div className={styles.studioCard}>
            <h4 className={styles.studioTitle}>Visit Our Studio</h4>
            <p className={styles.studioDesc}>Experience our material library and curated showroom in person. Appointments recommended.</p>
            <div className={styles.studioImageContainer}>
              <img src="/studio.png" alt="Inspired Redesign Studio" className={styles.studioImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
