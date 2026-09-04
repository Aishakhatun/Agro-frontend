import React, { useState, useEffect } from 'react';
import { Menu, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { logo } from '../assets';

export default function Navbar({ onOpenSidebar, onOpenTracker, onOpenAdmin, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined navigation links
  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Milling Process', href: '#process' },
    { label: 'Quality & Lab', href: '#quality' },
    { label: 'Certifications', href: '#certificates' },
    { label: 'Bulk Export', href: '#export-wizard' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      transition: 'all 0.3s ease'
    }}>
      {/* Main Navigation Bar in Warm Beige */}
      <div style={{
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(250, 247, 242, 0.98)' : '#faf7f2',
        backdropFilter: 'blur(16px)',
        borderBottom: '1.5px solid #e8dfc9',
        boxShadow: isScrolled ? '0 8px 25px -5px rgba(43, 35, 25, 0.08)' : '0 2px 10px rgba(0,0,0,0.03)',
        padding: '0.75rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          {/* Official Logo Emblem */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              border: '1.5px solid #d4c5a9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3px',
              boxShadow: '0 4px 12px rgba(43, 35, 25, 0.08)',
              overflow: 'hidden',
              flexShrink: 0
            }}>
              <img 
                src={logo} 
                alt="Khushbu Agro Industries Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>

            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.05rem, 3.5vw, 1.3rem)',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                KHUSHBU <span style={{ color: '#54b435' }}>AGRO</span>
              </div>
              <div style={{
                fontSize: 'clamp(0.6rem, 2vw, 0.68rem)',
                fontWeight: 800,
                color: '#379237',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                Wheat &amp; Flour Mills · Since 1988
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links & Quick Action */}
          <div className="desktop-nav-wrap">
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#2b2319',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.3rem 0',
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#54b435'}
                  onMouseLeave={(e) => e.target.style.color = '#2b2319'}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                if (onOpenQuote) onOpenQuote();
                else {
                  const target = document.querySelector('#contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-primary btn-sm"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem' }}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Actions: Call / Quote / Hamburger Drawer Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a
              href="tel:+919974250749"
              aria-label="Call Khushbu Agro"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#edfbe2',
                border: '1.5px solid #88dc6a',
                color: '#379237',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                flexShrink: 0
              }}
              className="mobile-call-icon"
            >
              <Phone size={17} />
            </a>

            <button
              onClick={onOpenSidebar}
              className="mobile-menu-btn"
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} color="#0f172a" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

