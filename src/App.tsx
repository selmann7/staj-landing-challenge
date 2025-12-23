import React from 'react';
import './styles/main.scss';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
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
