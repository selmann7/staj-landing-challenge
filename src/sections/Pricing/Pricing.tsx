import React from 'react';
import styles from './Pricing.module.scss';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const PRICING_DATA = [
  {
    name: 'Başlangıç',
    price: '0₺',
    description: 'Yan projeler ve öğrenme aşaması için mükemmel.',
    features: ['5 Bileşen', 'Topluluk Desteği', 'Temel Stiller'],
    buttonText: 'Hemen Başla',
    popular: false
  },
  {
    name: 'Profesyonel',
    price: '99₺',
    description: 'Küçük ekipler ve büyüyen uygulamalar için ideal.',
    features: ['Tüm Bileşenler', 'Öncelikli Destek', 'Özel Temalar', 'Kaynak Dosyalar'],
    buttonText: 'Ücretsiz Deneme Başlat',
    popular: true
  },
  {
    name: 'Kurumsal',
    price: 'Özel',
    description: 'Büyük kuruluşlar için gelişmiş çözümler.',
    features: ['Sınırsız Kullanım', 'Özel Destek', 'SLA Garantisi', 'Güvenlik Denetimi'],
    buttonText: 'Satışla İletişime Geç',
    popular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Şeffaf Fiyatlandırma</h2>
          <p className={styles.sectionSubtitle}>İşinize en uygun planı seçerek hemen kullanmaya başlayın.</p>
        </div>
        <div className={styles.grid}>
          {PRICING_DATA.map((plan, index) => (
            <Card
              key={index}
              className={`${styles.priceCard} ${plan.popular ? styles.popular : ''}`}
              shadow={plan.popular ? 'lg' : 'md'}
              footer={
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  fullWidth
                >
                  {plan.buttonText}
                </Button>
              }
            >
              <div className={styles.planHeader}>
                {plan.popular && <span className={styles.badge}>EN POPÜLER</span>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.amount}>{plan.price}</span>
                  {plan.price !== 'Özel' && <span className={styles.period}>/aylık</span>}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
