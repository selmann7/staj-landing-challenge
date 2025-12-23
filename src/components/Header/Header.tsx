import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>MiniLanding</div>
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        <div className={styles.actions}>
          <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

