import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../../components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Geleceğinizi <span className={styles.highlight}>Modern Components</span> ile Tasarlayın
          </h1>
          <p className={styles.subtitle}>
            Yüksek performanslı ve ölçeklenebilir bileşen kütüphanemizle profesyonel 
            arayüzleri her zamankinden daha hızlı inşa edin.
          </p>
          <div className={styles.actions}>
            <Button size="lg">Hemen Başla</Button>
            <Button variant="outline" size="lg">Dokümantasyon</Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="https://placehold.co/600x400/3b82f6/white?text=Professional+Product" 
            alt="Professional Product" 
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
