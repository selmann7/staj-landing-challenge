import React from 'react';
import styles from './Features.module.scss';
import { Card } from '../../components/ui/Card';

const FEATURE_DATA = [
  {
    title: 'Modern Tasarım',
    description: 'Her türlü marka kimliğine uyum sağlayan temiz ve profesyonel estetik.',
    image: 'https://placehold.co/400x250/3b82f6/white?text=Tasarim',
    imageAlt: 'Modern Tasarım'
  },
  {
    title: 'Tam Erişilebilirlik',
    description: 'Herkesin sitenizi kullanabilmesini sağlamak için WCAG yönergelerine uygun oluşturuldu.',
    image: 'https://placehold.co/400x250/10b981/white?text=Erisilebilirlik',
    imageAlt: 'Tam Erişilebilirlik'
  },
  {
    title: 'Duyarlı Tasarım',
    description: 'Mobil, tablet ve masaüstü ekranlar için kutudan çıktığı haliyle optimize edildi.',
    image: 'https://placehold.co/400x250/f59e0b/white?text=Duyarli',
    imageAlt: 'Duyarlı Tasarım'
  },
  {
    title: 'Kolay Entegrasyon',
    description: 'Mevcut React projelerinize yüklemesi ve özelleştirmesi oldukça basit.',
    image: 'https://placehold.co/400x250/ef4444/white?text=Entegrasyon',
    imageAlt: 'Kolay Entegrasyon'
  }
];

export const Features: React.FC = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Neden Biz?</h2>
          <p className={styles.sectionSubtitle}>
            Gelişmiş mimari ve modern teknolojilerle projelerinizi bir üst seviyeye taşıyın.
          </p>
        </div>
        <div className={styles.grid}>
          {FEATURE_DATA.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              imageAlt={feature.title}
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
