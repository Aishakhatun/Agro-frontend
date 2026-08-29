import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Package, 
  Check,
  Wheat,
  Flame,
  ChevronRight
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'toor', label: 'Chakki Whole Wheat Atta' },
  { id: 'rice', label: 'MP Wheat Grain' },
  { id: 'urad', label: 'Refined Maida' },
  { id: 'moong', label: 'Sooji & Rawa' },
  { id: 'masoor', label: 'Durum Wheat & Pasta Flour' },
  { id: 'chana', label: 'Fibrous Wheat Bran (Choker)' }
];

export default function ProductShowcase({ products, onSelectProduct, onQuickInquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = !searchTerm || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="products" className="section" style={{ backgroundColor: '#fcfaf5' }}>
      {/* Infinite Wheat Product Marquee Ticker */}
      <div style={{
        backgroundColor: '#1c1917',
        padding: '0.85rem 0',
        marginBottom: '4rem',
        borderTop: '1px solid rgba(132, 169, 60, 0.3)',
        borderBottom: '1px solid rgba(132, 169, 60, 0.3)'
      }}>
        <div className="marquee-container">
          <div className="marquee-content">
            {products.concat(products).map((p, idx) => (
              <div
                key={idx}
                onClick={() => onSelectProduct(p)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: 'rgba(132, 169, 60, 0.18)',
                  border: '1.5px solid rgba(132, 169, 60, 0.4)',
                  padding: '0.4rem 1.1rem',
                  borderRadius: '9999px',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontWeight: 700,
                  whiteSpace: 'nowrap'
                }}
              >
                <Wheat size={14} color="#84a93c" />
                <span>{p.name}</span>
                <span style={{ color: '#b5d867', fontSize: '0.72rem' }}>• {p.specifications?.purity || '100% Pure'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Sparkles size={14} /> Wheat &amp; Flour Portfolio
          </span>
          <h2 className="section-title">
            Chakki Fresh Atta, Grain &amp; Commercial Flour
          </h2>
          <p className="section-subtitle">
            Explore our cold-milled stone chakki whole wheat atta, superfine roller-milled maida, semolina granules, and export-grade MP Sharbati wheat kernels.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {/* Search Input */}
          <div style={{
            maxWidth: '540px',
            margin: '0 auto',
            width: '100%',
            position: 'relative'
          }}>
            <Search 
              size={18} 
              color="#94a3b8" 
              style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              placeholder="Search by flour type (e.g. Chakki Atta, Maida, Sooji, MP Sharbati)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem 0.9rem 3rem',
                borderRadius: '9999px',
                border: '1.5px solid #eae4d3',
                backgroundColor: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#84a93c';
                e.target.style.boxShadow = '0 0 0 4px rgba(132, 169, 60, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#eae4d3';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: activeCategory === cat.id ? '2px solid #84a93c' : '1.5px solid #eae4d3',
                  backgroundColor: activeCategory === cat.id ? '#84a93c' : '#ffffff',
                  color: activeCategory === cat.id ? '#ffffff' : '#1c1917',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: activeCategory === cat.id ? '0 6px 20px rgba(132, 169, 60, 0.35)' : 'none',
                  transform: activeCategory === cat.id ? 'scale(1.04)' : 'scale(1)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            backgroundColor: '#f5f1e6',
            borderRadius: '20px',
            border: '1px dashed #ded8c4'
          }}>
            <Package size={48} color="#84a93c" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', color: '#1c1917', marginBottom: '0.5rem' }}>No wheat products found</h3>
            <p style={{ color: '#64748b', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
              We process custom flour mesh formulations. Contact our flour mill sales desk for specific inquiries.
            </p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
              className="btn btn-outline btn-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map((product) => (
              <div
                key={product.slug || product._id}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* Image Area */}
                <div style={{
                  height: '220px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#1c1917'
                }}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="product-img-hover"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.9rem',
                    left: '0.9rem',
                    backgroundColor: 'rgba(28, 25, 23, 0.9)',
                    backdropFilter: 'blur(8px)',
                    color: '#b5d867',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    border: '1px solid rgba(132, 169, 60, 0.4)'
                  }}>
                    {product.categoryLabel}
                  </div>

                  {product.specifications?.purity && (
                    <div style={{
                      position: 'absolute',
                      bottom: '0.9rem',
                      right: '0.9rem',
                      backgroundColor: 'rgba(132, 169, 60, 0.95)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                    }}>
                      <ShieldCheck size={14} /> {product.specifications.purity}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#1c1917',
                    marginBottom: '0.45rem',
                    lineHeight: 1.3
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: '#475569',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem',
                    flexGrow: 1
                  }}>
                    {product.description}
                  </p>

                  {/* Packaging Options */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#84a93c', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                      Available Packing Sizes:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {product.packageSizes?.map((size, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#1c1917',
                            backgroundColor: '#f5f1e6',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '6px',
                            border: '1px solid #eae4d3'
                          }}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #eae4d3'
                  }}>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1, padding: '0.6rem 0.5rem', fontSize: '0.85rem' }}
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => onQuickInquiry(product)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, padding: '0.6rem 0.5rem', fontSize: '0.85rem' }}
                    >
                      Inquire Quote <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
