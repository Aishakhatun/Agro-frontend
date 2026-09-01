import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

export default function Navbar() {
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
        padding: '0.85rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap'
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
              backgroundColor: '#0f172a',
              border: '2px solid #54b435',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 4px 14px rgba(84, 180, 53, 0.3)',
              color: '#ffffff'
            }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                KAI
              </span>
              <Leaf size={13} color="#54b435" style={{ position: 'absolute', top: '2px', right: '3px' }} />
            </div>

            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                KHUSHBU <span style={{ color: '#54b435' }}>AGRO</span>
              </div>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                color: '#379237',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                Wheat &amp; Flour Mills · Since 1988
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-wrap" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
            flexWrap: 'wrap'
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
        </div>
      </div>
    </header>
  );
}
