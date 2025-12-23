import React from 'react';
import styles from './Features.module.scss';
import { Card } from '../../components/ui/Card';

const FEATURES = [
  {
    title: 'Modern Architecture',
    description: 'Using the latest technologies and patterns for a scalable codebase.',
    icon: '🚀',
  },
  {
    title: 'Accessible by Design',
    description: 'Built with accessibility in mind, following WCAG standards.',
    icon: '♿',
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance, aiming for 90+ Lighthouse score.',
    icon: '⚡',
  },
];

export const Features: React.FC = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Core Features</h2>
          <p className={styles.subtitle}>Everything you need to build great landing pages.</p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <Card key={index} title={feature.title} description={feature.description}>
              <div className={styles.icon}>{feature.icon}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

