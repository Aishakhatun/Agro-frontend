import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Phone, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Leaf,
  Wheat,
  SlidersHorizontal
} from 'lucide-react';

export default function Navbar({ onOpenTracker, onOpenAdmin, onOpenQuote, onOpenSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined desktop navigation links (No wrapping, clean & spacious)
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
      {/* 1. Top Security & Information Bar */}
      <div style={{
        backgroundColor: '#2b2319',
        color: '#f5f0e6',
        fontSize: '0.78rem',
        padding: '0.45rem 1.25rem',
        borderBottom: '1px solid rgba(107, 142, 35, 0.3)'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#9fc152', fontWeight: 700, whiteSpace: 'nowrap' }}>
              <ShieldCheck size={14} color="#6b8e23" /> FSSAI &amp; ISO 22000 Certified Flour Mill
            </span>
            <span className="hidden-sm" style={{ color: 'rgba(232, 223, 201, 0.3)' }}>|</span>
            <span className="hidden-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#efe8d8', fontWeight: 500, whiteSpace: 'nowrap' }}>
              <Wheat size={14} color="#d99b38" /> 100% Pure MP Sharbati Whole Wheat Atta
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', whiteSpace: 'nowrap' }}>
            <a href="tel:+919426047829" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
              <Phone size={13} color="#6b8e23" /> +91 94260 47829
            </a>
            <button 
              onClick={onOpenTracker} 
              style={{
                backgroundColor: 'rgba(107, 142, 35, 0.25)',
                border: '1px solid rgba(107, 142, 35, 0.5)',
                color: '#ffffff',
                padding: '0.2rem 0.65rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <FileText size={12} /> Track Order
            </button>
            <button 
              onClick={onOpenAdmin} 
              title="Staff Admin Portal"
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
            >
              <Lock size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar in Warm Beige */}
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
          gap: '1.5rem'
        }}>
          {/* Logo Emblem */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#2b2319',
              border: '2px solid #6b8e23',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 4px 14px rgba(107, 142, 35, 0.3)',
              color: '#ffffff'
            }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                KAI
              </span>
              <Leaf size={13} color="#6b8e23" style={{ position: 'absolute', top: '2px', right: '3px' }} />
            </div>

            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 900,
                color: '#2b2319',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                KHUSHBU <span style={{ color: '#6b8e23' }}>AGRO</span>
              </div>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                color: '#5c7b1e',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Wheat &amp; Flour Mills · Since 1988
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links (No wrapping, spacious flex layout) */}
          <nav className="desktop-links" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
            whiteSpace: 'nowrap'
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
                onMouseEnter={(e) => e.target.style.color = '#6b8e23'}
                onMouseLeave={(e) => e.target.style.color = '#2b2319'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Slidebar Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={onOpenQuote}
              className="btn btn-primary btn-sm desktop-btn"
              style={{ fontWeight: 800, padding: '0.65rem 1.25rem', whiteSpace: 'nowrap' }}
            >
              Get Atta Quote
            </button>

            {/* Slidebar Drawer Trigger Button */}
            <button
              onClick={onOpenSidebar}
              style={{
                backgroundColor: '#2b2319',
                color: '#ffffff',
                border: '1.5px solid #6b8e23',
                borderRadius: '12px',
                padding: '0.6rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(43, 35, 25, 0.25)',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6b8e23';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2b2319';
              }}
            >
              <SlidersHorizontal size={15} color="#ffffff" />
              <span>Slidebar</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-links { display: none !important; }
          .desktop-btn { display: none !important; }
        }
        @media (max-width: 640px) {
          .hidden-sm { display: none !important; }
        }
      `}</style>
    </header>
  );
}
