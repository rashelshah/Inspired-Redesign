import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <span className={styles.eyebrow}>Our Philosophy</span>
          <h2 className={styles.headline}>Beyond the Blueprint</h2>
          <p className={styles.description}>
            We don't just design rooms; we curate experiences. Our approach is grounded in the belief that luxury is found in the details that often go unnoticed but are deeply felt.
          </p>
          
          <div className={styles.pointsList}>
            <div className={styles.point}>
              <div className={styles.bullet}></div>
              <div>
                <h4 className={styles.pointTitle}>Personalized designs</h4>
                <p className={styles.pointDesc}>Each project starts with your story, ensuring the space is a true reflection of you.</p>
              </div>
            </div>
            <div className={styles.point}>
              <div className={styles.bullet}></div>
              <div>
                <h4 className={styles.pointTitle}>Attention to detail</h4>
                <p className={styles.pointDesc}>From the grain of the wood to the angle of the lighting, nothing is left to chance.</p>
              </div>
            </div>
            <div className={styles.point}>
              <div className={styles.bullet}></div>
              <div>
                <h4 className={styles.pointTitle}>Client-focused approach</h4>
                <p className={styles.pointDesc}>Transparent communication and collaborative decision-making at every stage.</p>
              </div>
            </div>
            <div className={styles.point}>
              <div className={styles.bullet}></div>
              <div>
                <h4 className={styles.pointTitle}>Modern + timeless aesthetics</h4>
                <p className={styles.pointDesc}>Designs that transcend trends and remain relevant for decades to come.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.imageColumn}>
          <div 
            className={styles.imageBox}
            style={{ backgroundImage: "url('/philosophy.png')" }}
          ></div>
          <div className={styles.badge}>
            <span className={styles.badgeNumber}>15+</span>
            <span className={styles.badgeText}>Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
