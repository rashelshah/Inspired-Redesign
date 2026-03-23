import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div 
        className={styles.bgImage}
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPtSmAI8ufAs99BrPT06e-D32ntDxnfQXaZ4AuJkCfxsGlxGAsTs9Qj8KCD-GqTjzFb9Rfk_Y2KH7y2Gm0YvCpAt6UiMS-XmDuzvLDf5eW3zjgmHlKPKIMx7sYgDdDwSKNNYnzJqzfSIpV8uHeFKb0JUBmHIPoLfRLlhPXtFEbX0K7INsuMgoSZwOuE6tJzLqwaJaS82ws5xeWWPT72Cjq0Bd-Y2CpcclDg8OB9HIwtSMgtQkEiQV6Dr_4R7OsVOHZhLOtCXiKSyU=s2560-rw')" }}
      ></div>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Transforming Spaces Into Timeless Designs
        </h1>
        <p className={styles.subhead}>
          Interior design that blends comfort, style, and functionality for the modern atelier lifestyle.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.primaryBtn}>
            Get a Free Consultation
          </a>
          <a href="#portfolio" className={styles.secondaryBtn}>
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
