import React, { Suspense, lazy } from 'react';
import './styles/main.scss';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';

const Features = lazy(() => import('./sections/Features').then(m => ({ default: m.Features })));
const Pricing = lazy(() => import('./sections/Pricing').then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import('./sections/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>Yükleniyor...</div>}>
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
          <p>© {new Date().getFullYear()} MiniLanding. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
