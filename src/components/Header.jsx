import React from 'react';
import logo from '../assets/logo.jpeg';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <img src={logo} alt="Logo Dney Barbeiro" className="logo" />
      <span className="slogan">Mais que um corte</span>
    </div>
  </header>
);

export default Header;
