import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Prestige Construction</div>
      <nav>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <button className="estimate-btn">Request an Estimate</button>
      </nav>
    </header>
  );
}

export default Header;
