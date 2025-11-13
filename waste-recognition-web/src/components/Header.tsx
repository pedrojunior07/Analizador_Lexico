import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">♻️</div>
            <div className="logo-text">
              <h1 className="logo-title">EcoScan</h1>
              <p className="logo-subtitle">Reconhecimento Inteligente de Resíduos</p>
            </div>
          </div>
          <nav className="nav">
            <button className="nav-button">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sobre
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
