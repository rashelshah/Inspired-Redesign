import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZOp_IUDLLwlmJZvuKEkIkQL-_g8uTjR7mBHXmdg9qLSQtQvv28PKdhNrULezuRXAeuJaJZTGFGGVmufoMp2An6q9bnGS-7BkLXOvpXMCtuX2MxniGZalssms9abOojYbNB248k7CF8TaH85Q-lUgQnd8dd24F8NUBxjlIJdmBT5CyiyDSkaAh2pJzHZKnr6ohLenYHxeJLqzz_9hFIksfxI5xBUgA42UkqYT-reVyhC5ALXDE7UhH8p1qizee44fTxhVjkhFwoS4=s1920-rw" 
              alt="Interior designer working at a desk" 
              className={styles.image}
            />
          </div>
          <div className={styles.blob}></div>
        </div>
        
        <div className={styles.content}>
          <span className={styles.eyebrow}>The Atelier Legacy</span>
          <h2 className={styles.headline}>Crafting spaces that resonate with your soul.</h2>
          <p className={styles.description}>
            Inspired Redesign creates beautiful and functional living spaces that prioritize the human experience. We believe that a well-designed room isn't just about aesthetics; it's about how it makes you feel when you cross the threshold.
          </p>
          <div className={styles.quoteBox}>
            <div className={styles.divider}></div>
            <p className={styles.quote}>
              "Luxury is not about price; it's about the intentionality of every line and texture."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
