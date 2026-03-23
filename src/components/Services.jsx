import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    icon: 'house',
    title: 'Residential Interior Design',
    description: 'Complete home transformations tailored to your unique lifestyle and aesthetic preferences.'
  },
  {
    icon: 'architecture',
    title: 'Space Planning',
    description: 'Strategic layout optimization to ensure every square inch of your home serves a purpose.'
  },
  {
    icon: 'palette',
    title: 'Home Styling',
    description: 'The final layer of luxury: curated art, textiles, and accessories to finish your space.'
  },
  {
    icon: 'construction',
    title: 'Renovation Consulting',
    description: 'Expert guidance through the complexities of structural changes and material selection.'
  }
];

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Expertise</span>
          <h2 className={styles.headline}>Curated Design Services</h2>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <span className={`material-symbols-outlined ${styles.icon}`}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
