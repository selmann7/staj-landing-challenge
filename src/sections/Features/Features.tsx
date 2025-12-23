import React from 'react';
import styles from './Features.module.scss';
import { Card } from '../../components/ui/Card';

const FEATURE_DATA = [
  {
    title: 'Modern Design',
    description: 'Clean and professional aesthetic that adapts to any brand identity.',
    image: 'https://placehold.co/400x250/3b82f6/white?text=Design',
  },
  {
    title: 'Full Accessibility',
    description: 'Built following WCAG guidelines to ensure everyone can use your site.',
    image: 'https://placehold.co/400x250/10b981/white?text=Accessibility',
  },
  {
    title: 'Responsive Layout',
    description: 'Optimized for mobile, tablet, and desktop screens out of the box.',
    image: 'https://placehold.co/400x250/f59e0b/white?text=Responsive',
  },
  {
    title: 'Easy Integration',
    description: 'Simple to install and customize within your existing React projects.',
    image: 'https://placehold.co/400x250/ef4444/white?text=Integration',
  }
];

export const Features: React.FC = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Powerful Features</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to build a high-converting landing page.
          </p>
        </div>
        <div className={styles.grid}>
          {FEATURE_DATA.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imageWidth={400}
              imageHeight={250}
              shadow="md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
