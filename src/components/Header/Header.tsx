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
          <a href="#features" className={styles.navLink}>Özellikler</a>
          <a href="#pricing" className={styles.navLink}>Fiyatlandırma</a>
          <a href="#faq" className={styles.navLink}>SSS</a>
          <a href="#contact" className={styles.navLink}>İletişim</a>
        </nav>
        <div className={styles.actions}>
          <Button variant="secondary" size="sm" onClick={toggleTheme} aria-label="Temayı değiştir">
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
          <Button size="sm">Hemen Başla</Button>
        </div>
      </div>
    </header>
  );
};

