import React from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Package, 
  MapPin, 
  Calendar, 
  Send, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onInquire }) {
  if (!product) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(8, 28, 21, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      animation: 'fadeIn 0.25s ease'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          maxWidth: '840px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f8fafc',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              backgroundColor: '#144e3b',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: '6px'
            }}>
              {product.categoryLabel}
            </span>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
              Export &amp; Domestic Specification Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569',
              transition: 'background 0.2s'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1rem, 3.5vw, 1.75rem)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1.5rem',
            marginBottom: '1.75rem'
          }}>
            {/* Left: Image & Key Highlights */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: 'clamp(200px, 35vw, 300px)',
                marginBottom: '1.25rem',
                backgroundColor: '#faf7f2',
                border: '1.5px solid #e8dfc9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                boxShadow: '0 8px 24px rgba(43, 35, 25, 0.08)'
              }}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.12))' }}
                />
              </div>

              {/* Nutritional Highlight Card */}
              {product.nutritionalHighlights && (
                <div style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '12px',
                  padding: '1rem'
                }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={14} /> Nutritional Facts Profile
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
                    <div style={{ background: '#fff', padding: '0.4rem', borderRadius: '6px', border: '1px solid #dcfce7' }}>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Protein</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15803d' }}>{product.nutritionalHighlights.protein}</div>
                    </div>
                    <div style={{ background: '#fff', padding: '0.4rem', borderRadius: '6px', border: '1px solid #dcfce7' }}>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Fiber</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15803d' }}>{product.nutritionalHighlights.dietaryFiber}</div>
                    </div>
                    <div style={{ background: '#fff', padding: '0.4rem', borderRadius: '6px', border: '1px solid #dcfce7' }}>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Calories</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15803d' }}>{product.nutritionalHighlights.calories}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Technical Specs Table */}
            <div>
              <h2 style={{ fontSize: '1.6rem', color: '#0f392b', marginBottom: '0.5rem', fontWeight: 800 }}>
                {product.name}
              </h2>
              <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {product.longDescription || product.description}
              </p>

              {/* Technical Specifications Grid */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '1.25rem'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f392b', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Laboratory &amp; Milling Metrics
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Optical Purity</span>
                    <strong style={{ color: '#0f392b' }}>{product.specifications?.purity || '99.8% Sortex'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Moisture Level</span>
                    <strong style={{ color: '#0f392b' }}>{product.specifications?.moisture || 'Max 12%'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Foreign Matter</span>
                    <strong style={{ color: '#0f392b' }}>{product.specifications?.foreignMatter || 'Nil (0.01%)'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Broken Ratio</span>
                    <strong style={{ color: '#0f392b' }}>{product.specifications?.brokenGrains || 'Max 1.0%'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Grading Standard</span>
                    <strong style={{ color: '#0f392b' }}>{product.specifications?.grading || 'Machine Cleaned & Buhler Graded'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Shelf Life</span>
                    <strong style={{ color: '#0f392b' }}>{product.specifications?.shelfLife || '18-24 Months'}</strong>
                  </div>
                </div>
              </div>

              {/* Packaging Options */}
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                  Available Supply Formats:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {product.packageSizes?.map((size, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        backgroundColor: '#edf9f2',
                        color: '#144e3b',
                        border: '1px solid #bbf7d0',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px'
                      }}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Applications list */}
          {product.applications && product.applications.length > 0 && (
            <div style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#92400e', marginBottom: '0.4rem' }}>
                Commercial &amp; Culinary Applications:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {product.applications.map((app, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#78350f' }}>
                    <CheckCircle2 size={14} color="#d97706" /> {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'flex-end',
            borderTop: '1px solid #e2e8f0',
            paddingTop: '1.25rem'
          }}>
            <button
              onClick={onClose}
              className="btn btn-outline btn-sm"
              style={{ minWidth: '100px' }}
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(product);
              }}
              className="btn btn-primary btn-sm"
              style={{ minWidth: '130px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem' }}
            >
              <Send size={15} /> Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
