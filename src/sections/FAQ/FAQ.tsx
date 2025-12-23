import React from 'react';
import styles from './FAQ.module.scss';
import { Accordion } from '../../components/ui/Accordion';

const FAQ_DATA = [
  {
    id: 'faq-1',
    title: 'Is this library free to use?',
    content: 'Yes, the basic components are open-source and free for personal and commercial projects.'
  },
  {
    id: 'faq-2',
    title: 'How do I install the components?',
    content: 'You can install the package via npm or yarn. Check our documentation for the full installation guide.'
  },
  {
    id: 'faq-3',
    title: 'Does it support Dark Mode?',
    content: 'Absolutely! All components are built with CSS variables and support seamless dark/light mode transitions.'
  },
  {
    id: 'faq-4',
    title: 'Can I customize the themes?',
    content: 'Yes, you can easily override the SCSS variables to match your brand identity.'
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>Find answers to common questions about our platform.</p>
        </div>
        <div className={styles.accordionWrapper}>
          <Accordion items={FAQ_DATA} />
        </div>
      </div>
    </section>
  );
};
