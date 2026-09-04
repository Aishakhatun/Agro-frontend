import React from 'react';
import { logo } from '../assets';
import { 
  Wheat, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  FileText,
  Lock,
  Leaf,
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Footer({ onOpenTracker, onOpenAdmin, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      backgroundColor: '#14110e',
      color: '#ffffff',
      borderTop: '2px solid #54b435',
      position: 'relative',
      zIndex: 2,
      overflow: 'hidden'
    }}>
      
      {/* 1. Top Accreditation & Quality Strip */}
      <div style={{
        backgroundColor: '#1f1a14',
        borderBottom: '1px solid rgba(107, 142, 35, 0.3)',
        padding: '0.85rem 0',
        fontSize: '0.82rem',
        color: '#efe8d8'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#9fc152', fontWeight: 800 }}>
              <ShieldCheck size={16} color="#6b8e23" /> FSSAI &amp; ISO 22000 Certified Milling Plant
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#f4be6b', fontWeight: 700 }}>
              <Award size={16} color="#d99b38" /> APEDA Registered Exporter
            </span>
          </div>

          <div style={{ fontSize: '0.78rem', color: '#aaaaaa', fontWeight: 600 }}>
            Himatnagar Flour Corridor, Gujarat, India
          </div>
        </div>
      </div>

      {/* 2. Main Footer Grid Content */}
      <div className="container-custom" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(1.75rem, 4vw, 3rem)',
          marginBottom: '3rem'
        }}>
          
          {/* Column 1: Brand Emblem & Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                border: '1.5px solid #54b435',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3px',
                boxShadow: '0 4px 14px rgba(84, 180, 53, 0.3)',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                <img 
                  src={logo} 
                  alt="Khushbu Agro Industries" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>
                  KHUSHBU <span style={{ color: '#88dc6a' }}>AGRO</span>
                </div>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#88dc6a', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Wheat &amp; Flour Mills · Since 1988
                </div>
              </div>
            </div>

            <p style={{ color: '#efe8d8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Miller and supplier of 100% natural Chakki Fresh Atta, MP Sharbati wheat, Maida, Sooji, and pulses since 1988.
            </p>

            <div style={{
              backgroundColor: 'rgba(107, 142, 35, 0.15)',
              border: '1px solid rgba(107, 142, 35, 0.4)',
              borderRadius: '12px',
              padding: '0.6rem 0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#9fc152',
              fontSize: '0.8rem',
              fontWeight: 800
            }}>
              <Wheat size={16} color="#6b8e23" />
              <span>300+ MT Daily Milling Capacity</span>
            </div>
          </div>

          {/* Column 2: Wheat & Flour Portfolio */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              marginBottom: '1.25rem',
              borderBottom: '2.5px solid #6b8e23',
              paddingBottom: '0.4rem',
              display: 'inline-block'
            }}>
              Wheat &amp; Flour Portfolio
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              {[
                { label: 'KAI Khushbu Chakki Fresh Atta', cat: 'atta' },
                { label: 'MP Sharbati & Lokwan Wheat Grain', cat: 'grain' },
                { label: 'Superfine Maida (Refined Flour)', cat: 'maida' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleCategoryClick(item.cat)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#efe8d8',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#9fc152'}
                    onMouseLeave={(e) => e.target.style.color = '#efe8d8'}
                  >
                    <ChevronRight size={13} color="#6b8e23" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              marginBottom: '1.25rem',
              borderBottom: '2.5px solid #6b8e23',
              paddingBottom: '0.4rem',
              display: 'inline-block'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#efe8d8' }}>
              <li><a href="#home" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Home</a></li>
              <li><a href="#about" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>About Us</a></li>
              <li><a href="#products" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Our Products</a></li>
              <li><a href="#process" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Milling Process</a></li>
              <li><a href="#certificates" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Certificates</a></li>
              <li><a href="#export-wizard" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Bulk Export Calculator</a></li>
              <li><a href="#contact" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Contact Us</a></li>
              <li style={{ paddingTop: '0.3rem' }}>
                <button
                  onClick={onOpenTracker}
                  style={{
                    backgroundColor: 'rgba(107, 142, 35, 0.2)',
                    border: '1px solid rgba(107, 142, 35, 0.5)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.75rem',
                    color: '#9fc152',
                    fontWeight: 800,
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <FileText size={14} /> Track Order Inquiry Status
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Contacts */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              marginBottom: '1.25rem',
              borderBottom: '2.5px solid #6b8e23',
              paddingBottom: '0.4rem',
              display: 'inline-block'
            }}>
              Mill &amp; Corporate Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.86rem', color: '#efe8d8' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#6b8e23" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: 1.5 }}>
                  Polajpur Patiya, Savgadh, Gujarat 383002, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="#6b8e23" style={{ flexShrink: 0 }} />
                <a href="tel:+919974250749" style={{ color: '#9fc152', fontWeight: 800, textDecoration: 'none' }}>
                  +91 99742 50749
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="#6b8e23" style={{ flexShrink: 0 }} />
                <a href="mailto:sales@khushbuagro.in" style={{ color: '#efe8d8', textDecoration: 'none', fontWeight: 600 }}>
                  sales@khushbuagro.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Legal & Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          fontSize: '0.82rem',
          color: '#aaaaaa'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div>
              &copy; {new Date().getFullYear()} KAI Khushbu Agro Industries Ltd. All Rights Reserved. · Premium Whole Wheat &amp; Flour Milling.
            </div>
            <div style={{ fontSize: '0.8rem', color: '#888888', display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
              <span>Created by:</span>
              <a
                href="mailto:aishasabugar1@gmail.com"
                style={{
                  color: '#88dc6a',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f4be6b')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#88dc6a')}
              >
                <Mail size={13} color="#88dc6a" /> aishasabugar1@gmail.com
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={onOpenAdmin}
              style={{
                background: 'none',
                border: 'none',
                color: '#aaaaaa',
                cursor: 'pointer',
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontWeight: 600
              }}
            >
              <Lock size={13} color="#6b8e23" /> Staff Portal
            </button>

            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: '#6b8e23',
                border: 'none',
                color: '#ffffff',
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 800,
                boxShadow: '0 4px 12px rgba(107, 142, 35, 0.3)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9fc152'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6b8e23'}
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
