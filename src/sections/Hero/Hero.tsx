import React, { useState } from 'react';
import styles from './Hero.module.scss';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Modern landing page for <span className={styles.highlight}>professionals</span>.
        </h1>
        <p className={styles.description}>
          Built with React, TypeScript, and SCSS modules. High performance, 
          accessible, and fully responsive.
        </p>
        <div className={styles.actions}>
          <Button size="lg" onClick={() => setIsModalOpen(true)}>Get Started</Button>
          <Button variant="outline" size="lg" onClick={() => {
            const pricing = document.getElementById('pricing');
            pricing?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Pricing
          </Button>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Get Started Today"
      >
        <div className={styles.modalContent}>
          <p>Thank you for your interest! Please fill out our contact form or choose a pricing plan to get started.</p>
          <Button fullWidth onClick={() => setIsModalOpen(false)} style={{ marginTop: '20px' }}>
            Close
          </Button>
        </div>
      </Modal>
    </section>
  );
};

