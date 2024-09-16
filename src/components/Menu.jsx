import { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      <div className="menu-logo">
        <img src="/path/to/logo.png" alt="App Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Contatos</a></li>
      </ul>
    </nav>
  );
};

export default Menu;