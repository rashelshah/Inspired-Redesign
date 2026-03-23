import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "The team at Inspired Redesign turned our house into a home. Their eye for detail and ability to blend our eclectic style with modern sophistication was remarkable.",
    name: "Sarah Jennings",
    title: "Manhattan Residence"
  },
  {
    quote: "A seamless experience from start to finish. They handled our renovation with such professionalism that we actually enjoyed the process. Highly recommend.",
    name: "James Thornton",
    title: "Hamptons Estate"
  },
  {
    quote: "Their space planning expertise is second to none. They made our compact apartment feel like a spacious gallery. Pure magic.",
    name: "Elena Rodriguez",
    title: "Brooklyn Loft"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Voices of Trust</span>
          <h2 className={styles.headline}>Client Experiences</h2>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`material-symbols-outlined ${styles.starIcon}`}>star</span>
                ))}
            </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div>
                <p className={styles.clientName}>{t.name}</p>
                <p className={styles.clientLocation}>{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
