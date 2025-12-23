import React from 'react';
import styles from './Pricing.module.scss';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const PRICING_DATA = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for side projects and learning.',
    features: ['5 Components', 'Community Support', 'Basic Styles'],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$29',
    description: 'Ideal for small teams and growing apps.',
    features: ['All Components', 'Priority Support', 'Custom Themes', 'Source Files'],
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Advanced solutions for large organizations.',
    features: ['Unlimited Usage', 'Dedicated Support', 'SLA Guarantee', 'Security Audit'],
    buttonText: 'Contact Sales',
    popular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Simple Pricing</h2>
          <p className={styles.sectionSubtitle}>Choose the plan that fits your needs.</p>
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
                {plan.popular && <span className={styles.badge}>Most Popular</span>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.amount}>{plan.price}</span>
                  {plan.price !== 'Custom' && <span className={styles.period}>/month</span>}
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
