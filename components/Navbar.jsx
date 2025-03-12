'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <div className="navbar-title">
          <Link href="/">
            <span className="logo-text">SupplyChain<span className="logo-highlight">AI</span></span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          <Link href="/" className="navbar-link">
            Home
          </Link>
          <Link href="/supply-chain" className="navbar-link">
            Supply Chain
          </Link>
          <Link href="/fraud-detection" className="navbar-link">
            Fraud Detection
          </Link>
          <Link href="#" className="navbar-link">
            Analytics
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/supply-chain" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Supply Chain
          </Link>
          <Link href="/fraud-detection" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Fraud Detection
          </Link>
          <Link href="#" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Analytics
          </Link>
        </div>
      </div>
    </div>
  );
}