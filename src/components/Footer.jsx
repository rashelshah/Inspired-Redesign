import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.colMain}>
          <h2 className={styles.brand}>Inspired Redesign</h2>
          <p className={styles.brandDesc}>
            Creating timeless interiors through intentional design and architectural narrative.
          </p>
        </div>
        
        <div>
          <h4 className={styles.heading}>Connect</h4>
          <ul className={styles.list}>
            <li><a href="#" className={styles.link}>Instagram</a></li>
            <li><a href="#" className={styles.link}>Pinterest</a></li>
            <li><a href="#" className={styles.link}>LinkedIn</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className={styles.heading}>Legal</h4>
          <ul className={styles.list}>
            <li><a href="#" className={styles.link}>Privacy Policy</a></li>
            <li><a href="#" className={styles.link}>Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className={styles.heading}>Newsletter</h4>
          <p className={styles.newsletterDesc}>Join our list for exclusive design insights.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Email" className={styles.input} />
            <button className={styles.joinBtn}>Join</button>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>© 2024 Inspired Redesign. All rights reserved.</p>
        <div className={styles.bottomIcons}>
          <span className="material-symbols-outlined">diamond</span>
          <span className="material-symbols-outlined">eco</span>
          <span className="material-symbols-outlined">architecture</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
