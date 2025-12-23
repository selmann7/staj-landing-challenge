import React from 'react';
import styles from './FAQ.module.scss';
import { Accordion } from '../../components/ui/Accordion';

const FAQ_ITEMS = [
  {
    id: '1',
    title: 'How do I install the components?',
    content: 'You can install the library via npm or yarn. Detailed instructions are available in the documentation.',
  },
  {
    id: '2',
    title: 'Is it free to use?',
    content: 'Yes, the basic version is completely free and open source.',
  },
  {
    id: '3',
    title: 'Does it support Dark Mode?',
    content: 'Absolutely! Every component is designed with dark mode support out of the box.',
  },
  {
    id: '4',
    title: 'Can I use it with Next.js?',
    content: 'Yes, it works perfectly with Next.js and other modern React frameworks.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Find answers to common questions about our platform.</p>
        </div>
        <div className={styles.accordionWrapper}>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
};

