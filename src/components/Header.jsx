// Header.jsx
import React, { useState } from 'react';
import './Header.css'; // Importando o CSS separado

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo à esquerda */}
        <div className="logo">
          <img src="./icone.png" alt="Logo" /> 
        </div>
        
        {/* Botão hambúrguer para mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* Navegação à direita */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#sobre-nos" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a></li>
            <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="#produtos" onClick={() => setIsMenuOpen(false)}>Produtos</a></li>
            <li><a href="#contatos" onClick={() => setIsMenuOpen(false)}>Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;