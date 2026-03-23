import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>Inspired Redesign</a>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#portfolio" className={styles.link}>Portfolio</a>
          <a href="#testimonials" className={styles.link}>Testimonials</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
        <a href="#contact" className={styles.bookBtn}>Book Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
