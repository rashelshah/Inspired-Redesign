import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}>Selected Works</span>
            <h2 className={styles.headline}>The Portfolio</h2>
          </div>
          <p className={styles.description}>
            Explore our gallery of recently completed architectural narratives and interior transformations.
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={`${styles.galleryItem} ${styles.colSpan8}`}>
            <div className={styles.aspect16_9}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK1oaezohjjhmH9uw_Aqzpp8I86qdE5iTPYVc4wkMYXiPGMifC0OJ7I16MJcuSogyHy-q0CnAffepndvz4PcIT76SZWMrrtPY8TZuUjugrO9dUN-4u38yp17ddxbiA3Mb0yGFJgST5zvGwCfXYMAFhnNKxDgIm3uukIJ-eLrzh_EG-8Way9jySPoCReQ580k_XXAUecDiQV5lO7KCkih5aj_uDZxgjJQ934HX-01cb0Dd4VLmzzxSnG7xSfrEAJ6w997n2Exh1ARs=s1920-rw" 
                alt="High-end penthouse living room with panoramic views" 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h4 className={styles.projectTitle}>Modern Penthouse</h4>
                  <span className={styles.projectCategory}>Residential</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.galleryItem} ${styles.colSpan4}`}>
            <div className={styles.aspect4_5}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHNwZ7u_vFTycX1P28-hWr8_jWZtEb6aLSp5p2WEbT-1-OBKoh9w137jkPhTvOmsD7WeTKo348hORlS9cJmfZo6E7Hl8__lPkWqGZyBGEXd8MzeBHdGkP8u0TdTiG-YWZeurUE5JysPP31rF3AOezkk_yWjgovNNTaE69DWwd6BYmYUvYylFHu4BGZMwNjYiVGqPBhHCing3U6RDux8sxRL13L6dUuxDitLRZfK-uuRxNlA8i6VBVdglLjGiaNh-GfXUZOAgqr1IQ=s1920-rw" 
                alt="Minimalist bedroom with warm wood textures" 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h4 className={styles.projectTitle}>Serene Suite</h4>
                  <span className={styles.projectCategory}>Styling</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.galleryItem} ${styles.colSpan4}`}>
            <div className={styles.aspect4_5}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7i0FUtC9yMq5r3kbQa7Qq1M_hNAPlkby6RY9CSmuymx-TsI9Bu9QwZh8lUF1gzpzuaDZBlt4bWEglhDQUFw6nNM0PBcL7E1TQqctc1f-YiGX60o4GjX8gWiNHGxbr5zkHOqCVKvtzkQbO4iISCpDDDYGhirP6qGUhjcNHIGPftTh_3dQMvPakKkMKNYk8QAxW0ZhdwWqYbbKdwX3oEW8Zy9PkWvkZnq52rNv-4PrBXNIa2uYCJF0pdcNfGyBi8g4zwIOxRCwoktc=s1920-rw" 
                alt="Contemporary kitchen with marble island and gold accents" 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h4 className={styles.projectTitle}>Marble Haven</h4>
                  <span className={styles.projectCategory}>Renovation</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.galleryItem} ${styles.colSpan8}`}>
            <div className={styles.aspect16_9}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2WkZD4IdlDPUebyWx1S9R0jPiBdu6DxbURF-rehsSVNS3HvQ2JXvZk4kVEv03HJVty_61RBihWh4aE0hGtYmTsYsByzu_-FVirwhnHHDbs-USqHNKNKsQFbACPVDi7PesRx2HfdJfXkZTWG_lXIT7mQd4vTprBNe7i78ZeRfRFDINL0MuyBRJ3ZCL01IV5-ndjhGReAZgQnOzTLmYty7aFbt9UmkXH1wqg1sN4guFRRTddY3EOqiUuutEgvwIDCmexWDAv7UKlwI=s1920-rw" 
                alt="Boutique hotel lobby with velvet seating" 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h4 className={styles.projectTitle}>The Grand Lobby</h4>
                  <span className={styles.projectCategory}>Commercial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
