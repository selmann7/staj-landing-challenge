import React from 'react';
import styles from './Pricing.module.scss';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    features: ['1 Project', 'Community Support', 'Basic Components'],
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['Unlimited Projects', 'Priority Support', 'Full Component Library', 'Custom Themes'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Dedicated Support', 'White-labeling', 'SLA Guarantee', 'Security Audit'],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Simple Pricing</h2>
          <p className={styles.subtitle}>Choose the plan that works best for you.</p>
        </div>
        <div className={styles.grid}>
          {PLANS.map((plan, index) => (
            <Card 
              key={index} 
              className={`${styles.plan} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && <span className={styles.badge}>Most Popular</span>}
              <h3 className={styles.name}>{plan.name}</h3>
              <div className={styles.price}>{plan.price}<span>/mo</span></div>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <span className={styles.check}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                fullWidth
              >
                Choose {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

