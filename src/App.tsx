import React, { Suspense, lazy } from 'react';
import './styles/main.scss';
import { Header } from './components/Header';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './sections/Hero';

// Below the fold sections lazy loaded for performance
const Features = lazy(() => import('./sections/Features').then(m => ({ default: m.Features })));
const Pricing = lazy(() => import('./sections/Pricing').then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import('./sections/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

const App: React.FC = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>}>
          <Features />
          <Pricing />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <footer style={{ 
        padding: '40px 0', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.875rem',
        color: '#6b7280'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} MiniLanding. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
