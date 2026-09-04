import React, { useState } from 'react';
import { logo } from '../assets';
import { 
  X, 
  Wheat, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ChevronRight, 
  Calculator,
  MessageSquare,
  FileText,
  Lock,
  ArrowRight,
  Leaf
} from 'lucide-react';

export default function SidebarDrawer({ isOpen, onClose, onOpenQuote, onOpenTracker, onOpenAdmin }) {
  const [quickVolume, setQuickVolume] = useState('25');

  if (!isOpen) return null;

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Milling Process', href: '#process' },
    { label: 'Certifications', href: '#certificates' },
    { label: 'Bulk Export', href: '#export-wizard' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      backgroundColor: 'rgba(27, 21, 15, 0.75)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      justifyContent: 'flex-end',
      animation: 'fadeIn 0.25s ease'
    }}>
      {/* Backdrop click listener */}
      <div style={{ position: 'absolute', inset: 0 }} onClick={onClose} />

      {/* Slidebar Content Box */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '400px',
        height: '100%',
        backgroundColor: '#faf7f2',
        boxShadow: '-8px 0 35px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowY: 'auto',
        borderLeft: '2px solid #6b8e23'
      }}>
        {/* Header */}
        <div>
          <div style={{
            backgroundColor: '#2b2319',
            padding: '1.5rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #6b8e23'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                border: '1.5px solid #54b435',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3px',
                boxShadow: '0 4px 14px rgba(84, 180, 53, 0.3)',
                overflow: 'hidden'
              }}>
                <img 
                  src={logo} 
                  alt="Khushbu Agro Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>
                  KHUSHBU <span style={{ color: '#88dc6a' }}>AGRO</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#88dc6a', fontWeight: 700, letterSpacing: '0.05em' }}>
                  WHEAT &amp; FLOUR MILLS SINCE 1988
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                padding: '0.4rem',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Items */}
          <div style={{ padding: '1.5rem 1.25rem 0.5rem 1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6b8e23', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
              Navigation Menu
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e8dfc9',
                    color: '#2b2319',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#6b8e23';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e8dfc9';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} color="#6b8e23" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Atta Quote Widget inside Sidebar */}
          <div style={{ padding: '1rem 1.25rem' }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '1.25rem',
              border: '1.5px solid #e8dfc9',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Calculator size={18} color="#6b8e23" />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#2b2319', margin: 0 }}>
                  Quick Atta &amp; Flour Quote
                </h4>
              </div>

              <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '0.75rem' }}>
                Select target volume for instant pricing:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <button
                  onClick={() => setQuickVolume('25')}
                  style={{
                    padding: '0.45rem',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: quickVolume === '25' ? '2px solid #6b8e23' : '1px solid #e8dfc9',
                    backgroundColor: quickVolume === '25' ? '#eaf3d5' : '#faf7f2',
                    color: '#2b2319'
                  }}
                >
                  25 MT (1 Truck)
                </button>
                <button
                  onClick={() => setQuickVolume('50')}
                  style={{
                    padding: '0.45rem',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: quickVolume === '50' ? '2px solid #6b8e23' : '1px solid #e8dfc9',
                    backgroundColor: quickVolume === '50' ? '#eaf3d5' : '#faf7f2',
                    color: '#2b2319'
                  }}
                >
                  50 MT Export
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(`Wholesale Quote for ${quickVolume} MT`);
                }}
                className="btn btn-primary btn-block btn-sm"
              >
                Request Quotation <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
