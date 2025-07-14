import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">NETFLIX</div>
      <nav className="navbar__menu">
        <a href="/">Home</a>
        <a href="/">TV Shows</a>
        <a href="/">Movies</a>
        <a href="/">My List</a>
      </nav>
    </header>
  );
}
