'use client';

import Link from 'next/link';
import { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navContent">
          {/* Logo */}
          <Link href="/" className="logo">
            Zeno Dynamics
          </Link>

          {/* Desktop Menu */}
          <div className="desktopMenu">
            <Link href="/" className="navLink">
              Home
            </Link>
            <Link href="/about" className="navLink">
              About
            </Link>
            <Link href="/services" className="navLink">
              Servizi
            </Link>
            <Link href="/contatti" className="navLink">
              Contatti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menuButton"
            aria-label="Toggle menu"
          >
            <svg
              className="iconOpen"
              style={{ display: isOpen ? 'none' : 'block' }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="iconClose"
              style={{ display: isOpen ? 'block' : 'none' }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobileMenu">
          <Link href="/" className="mobileLink">
            Home
          </Link>
          <Link href="/about" className="mobileLink">
            About
          </Link>
          <Link href="/services" className="mobileLink">
            Services
          </Link>
          <Link href="/contatti" className="mobileLink">
            Contatti
          </Link>
        </div>
      )}
    </nav>
  );
}
