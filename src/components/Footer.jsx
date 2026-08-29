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
  Leaf
} from 'lucide-react';

export default function Footer({ onOpenTracker, onOpenAdmin, onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#12100e',
      color: '#ffffff',
      borderTop: '1.5px solid rgba(132, 169, 60, 0.3)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Col 1: Brand Info matching User Image */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#1c1917',
                border: '2px solid #84a93c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '1rem'
              }}>
                KAI
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                KHUSHBU <span style={{ color: '#84a93c' }}>AGRO</span>
              </span>
            </div>

            <p style={{ color: '#ded8c4', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Pioneers in 100% Whole Wheat Chakki Fresh Atta, MP Sharbati Grain processing, Superfine Maida, Sooji/Semolina, and global containerized flour export since 1988.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b5d867', fontSize: '0.82rem', fontWeight: 700 }}>
              <ShieldCheck size={16} color="#84a93c" /> FSSAI · ISO 22000:2018 · APEDA Registered Mill
            </div>
          </div>

          {/* Col 2: Wheat Product Index */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '2.5px solid #84a93c', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Wheat &amp; Flour Portfolio
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#ded8c4' }}>
              <li>
                <a href="#products" onClick={() => onSelectCategory && onSelectCategory('toor')} style={{ textDecoration: 'none' }}>
                  KAI Khushbu Chakki Fresh Atta
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onSelectCategory && onSelectCategory('rice')} style={{ textDecoration: 'none' }}>
                  MP Sharbati &amp; Lokwan Wheat Grain
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onSelectCategory && onSelectCategory('urad')} style={{ textDecoration: 'none' }}>
                  Superfine Maida (Refined Flour)
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onSelectCategory && onSelectCategory('moong')} style={{ textDecoration: 'none' }}>
                  Granular Sooji / Rawa (Semolina)
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onSelectCategory && onSelectCategory('masoor')} style={{ textDecoration: 'none' }}>
                  Durum Wheat &amp; Pasta Flour
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => onSelectCategory && onSelectCategory('chana')} style={{ textDecoration: 'none' }}>
                  Fibrous Wheat Bran (Choker)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '2.5px solid #84a93c', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#ded8c4' }}>
              <li><a href="#home" style={{ textDecoration: 'none' }}>Company Overview</a></li>
              <li><a href="#process" style={{ textDecoration: 'none' }}>7-Stage Roller Milling</a></li>
              <li><a href="#quality" style={{ textDecoration: 'none' }}>Cereal Testing Lab</a></li>
              <li><a href="#certificates" style={{ textDecoration: 'none' }}>Food Safety Accreditations</a></li>
              <li><a href="#export-wizard" style={{ textDecoration: 'none' }}>Bulk Container Estimator</a></li>
              <li><a href="#contact" style={{ textDecoration: 'none' }}>Get Commercial Quote</a></li>
              <li>
                <button
                  onClick={onOpenTracker}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#b5d867',
                    fontWeight: 800,
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <FileText size={14} /> Track Order Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Factory Contacts */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem', borderBottom: '2.5px solid #84a93c', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Flour Mill &amp; Registered Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', color: '#ded8c4' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#84a93c" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Survey No. 142/P, Idar-Ambaji State Highway, Dhandha, Himatnagar, Gujarat 383001, India</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} color="#84a93c" style={{ flexShrink: 0 }} />
                <a href="tel:+919426047829" style={{ color: '#b5d867', fontWeight: 800, textDecoration: 'none' }}>
                  +91 94260 47829
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} color="#84a93c" style={{ flexShrink: 0 }} />
                <a href="mailto:sales@khushbuagro.in" style={{ color: '#ded8c4', textDecoration: 'none' }}>
                  sales@khushbuagro.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#94a3b8'
        }}>
          <div>
            &copy; {new Date().getFullYear()} KAI Khushbu Agro Industries Ltd. All Rights Reserved. · Premium Wheat &amp; Flour Milling.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={onOpenAdmin}
              style={{
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Lock size={12} /> Staff Portal
            </button>

            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#ffffff',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem'
              }}
            >
              Top <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
