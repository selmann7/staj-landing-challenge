import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../../components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Design your future with <span className={styles.highlight}>Modern Components</span>
          </h1>
          <p className={styles.subtitle}>
            Build professional landing pages faster than ever using our pre-built 
            component library. Accessible, responsive, and easy to use.
          </p>
          <div className={styles.actions}>
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View Demo</Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="https://placehold.co/600x400/3b82f6/white?text=Professional+Product" 
            alt="Product Preview" 
            width={600} 
            height={400} 
            className={styles.image}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};
