import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="econverse-header">
      <div className="header-container">
        {/* Logo econverse - usando texto por enquanto */}
       <div className="logo">
  <img 
    src="/logo-econverse.png" 
    alt="econverse"
    className="logo-image"
    style={{ height: '40px' }}
  />
  <span className="logo-subtitle">Teste Front-end</span>
</div>
        
        <nav className="header-nav">
          <a href="#produtos" className="nav-link">Produtos</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>
      </div>
    </header>
  );
};