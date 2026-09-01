import React from 'react';
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
      borderTop: '2px solid #6b8e23',
      position: 'relative',
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
      <div className="container-custom" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Column 1: Brand Emblem & Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#1f1a14',
                border: '2px solid #6b8e23',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(107, 142, 35, 0.3)',
                position: 'relative'
              }}>
                <span>KAI</span>
                <Leaf size={12} color="#6b8e23" style={{ position: 'absolute', top: '3px', right: '3px' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>
                  KHUSHBU <span style={{ color: '#6b8e23' }}>AGRO</span>
                </div>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#9fc152', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Wheat &amp; Flour Mills · Since 1988
                </div>
              </div>
            </div>

            <p style={{ color: '#efe8d8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Pioneers in 100% Whole Wheat Chakki Fresh Atta, MP Sharbati Grain processing, Superfine Roller-Milled Maida, Semolina granules, and global containerized flour export since 1988.
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
              <li><a href="#home" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Company Overview</a></li>
              <li><a href="#process" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>7-Stage Roller Milling</a></li>
              <li><a href="#quality" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Cereal Testing Laboratory</a></li>
              <li><a href="#certificates" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Food Safety Accreditations</a></li>
              <li><a href="#export-wizard" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Container Export Calculator</a></li>
              <li><a href="#contact" style={{ color: '#efe8d8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#9fc152'} onMouseLeave={(e) => e.target.style.color = '#efe8d8'}>Get Commercial Quotation</a></li>
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
          <div>
            &copy; {new Date().getFullYear()} KAI Khushbu Agro Industries Ltd. All Rights Reserved. · Premium Whole Wheat &amp; Flour Milling.
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
