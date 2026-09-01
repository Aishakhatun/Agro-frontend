import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Package, 
  Wheat,
  X,
  FileText,
  Send,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'atta', label: 'Chakki Whole Wheat Atta' },
  { id: 'grain', label: 'MP Wheat Grain' },
  { id: 'maida', label: 'Refined Maida' }
];

export default function ProductShowcase({ products, onSelectProduct, onQuickInquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Robust category matching so legacy database keys ('toor', 'rice', 'urad', 'moong', 'masoor', 'chana')
  // as well as modern semantic keys ('atta', 'grain', 'maida', 'sooji', 'durum', 'bran') match seamlessly.
  const isCategoryMatch = (item, catId) => {
    if (catId === 'all') return true;
    const catLower = (item.category || '').toLowerCase();
    const labelLower = (item.categoryLabel || '').toLowerCase();
    const nameLower = (item.name || '').toLowerCase();

    if (catId === 'atta') {
      return catLower === 'toor' || catLower === 'atta' || labelLower.includes('atta') || nameLower.includes('atta');
    }
    if (catId === 'grain') {
      return catLower === 'rice' || catLower === 'grain' || labelLower.includes('grain') || nameLower.includes('grain') || nameLower.includes('wheat');
    }
    if (catId === 'maida') {
      return catLower === 'urad' || catLower === 'maida' || labelLower.includes('maida') || nameLower.includes('maida');
    }
    if (catId === 'sooji') {
      return catLower === 'moong' || catLower === 'sooji' || catLower === 'rawa' || labelLower.includes('sooji') || labelLower.includes('rawa') || nameLower.includes('sooji') || nameLower.includes('rawa');
    }
    if (catId === 'durum') {
      return catLower === 'masoor' || catLower === 'durum' || labelLower.includes('durum') || labelLower.includes('pasta') || nameLower.includes('durum');
    }
    if (catId === 'bran') {
      return catLower === 'chana' || catLower === 'bran' || labelLower.includes('bran') || labelLower.includes('choker') || nameLower.includes('bran') || nameLower.includes('choker');
    }
    return catLower === catId;
  };

  const filteredProducts = products.filter((item) => {
    const matchesCat = isCategoryMatch(item, activeCategory);
    const matchesSearch = !searchTerm || 
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categoryLabel?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Calculate count for each category badge
  const getCategoryCount = (catId) => {
    if (catId === 'all') return products.length;
    return products.filter((p) => isCategoryMatch(p, catId)).length;
  };

  return (
    <section id="products" style={{ backgroundColor: '#faf7f2', padding: '5rem 0', position: 'relative' }}>
      
      {/* 1. Ticker Bar with Purity & Product Highlights */}
      <div style={{
        backgroundColor: '#19140e',
        padding: '0.85rem 0',
        marginBottom: '4rem',
        borderTop: '1px solid rgba(107, 142, 35, 0.3)',
        borderBottom: '1px solid rgba(107, 142, 35, 0.3)',
        overflow: 'hidden'
      }}>
        <div className="marquee-container">
          <div className="marquee-content">
            {(products.length > 0 ? products.concat(products) : []).map((p, idx) => (
              <div
                key={idx}
                onClick={() => onSelectProduct(p)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: 'rgba(107, 142, 35, 0.18)',
                  border: '1.5px solid rgba(107, 142, 35, 0.4)',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                <Wheat size={15} color="#9fc152" />
                <span>{p.name}</span>
                <span style={{ color: '#f4be6b', fontSize: '0.74rem' }}>• {p.specifications?.purity || '100% Pure'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* 2. Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            backgroundColor: 'rgba(107, 142, 35, 0.12)',
            border: '1.5px solid rgba(107, 142, 35, 0.3)',
            color: '#5c7b1e',
            padding: '0.4rem 1.2rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem'
          }}>
            <Sparkles size={15} color="#6b8e23" />
            <span>Wheat &amp; Flour Product Portfolio</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#2b2319',
            marginBottom: '1rem'
          }}>
            Chakki Fresh Atta, Grain &amp; Commercial Flour
          </h2>

          <p style={{
            color: '#55493b',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Explore our cold-milled stone chakki whole wheat atta, superfine roller-milled maida, semolina granules, and export-grade MP Sharbati wheat kernels.
          </p>
        </div>

        {/* 3. Search and Category Filters Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Search Input Box */}
          <div style={{
            maxWidth: '560px',
            margin: '0 auto',
            width: '100%',
            position: 'relative'
          }}>
            <Search 
              size={19} 
              color="#6b8e23" 
              style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              placeholder="Search by product name or flour type (e.g. Chakki Atta, Maida, Sooji)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.95rem 3rem 0.95rem 3.2rem',
                borderRadius: '9999px',
                border: '2px solid #e8dfc9',
                backgroundColor: '#ffffff',
                fontSize: '0.95rem',
                color: '#2b2319',
                fontWeight: 600,
                outline: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(43, 35, 25, 0.04)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#6b8e23';
                e.target.style.boxShadow = '0 0 0 4px rgba(107, 142, 35, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e8dfc9';
                e.target.style.boxShadow = '0 4px 15px rgba(43, 35, 25, 0.04)';
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#888'
                }}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Filter Pills with Count Badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            justifyContent: 'center'
          }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: isActive ? '2px solid #6b8e23' : '1.5px solid #e8dfc9',
                    backgroundColor: isActive ? '#6b8e23' : '#ffffff',
                    color: isActive ? '#ffffff' : '#2b2319',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 8px 20px rgba(107, 142, 35, 0.35)' : '0 2px 6px rgba(0,0,0,0.02)',
                    transform: isActive ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <span>{cat.label}</span>
                  <span style={{
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : '#f0e8d5',
                    color: isActive ? '#ffffff' : '#5c7b1e',
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    fontWeight: 900
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4.5rem 1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '2px dashed #e8dfc9',
            maxWidth: '540px',
            margin: '0 auto'
          }}>
            <Package size={52} color="#6b8e23" style={{ marginBottom: '1.2rem' }} />
            <h3 style={{ fontSize: '1.35rem', color: '#2b2319', marginBottom: '0.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
              No matching wheat products found
            </h3>
            <p style={{ color: '#666666', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.75rem' }}>
              We mill custom flour mesh formulations. Contact our technical flour sales desk for specific bulk requirements.
            </p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
              className="btn btn-outline btn-sm"
              style={{ padding: '0.6rem 1.5rem' }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '2.25rem'
          }}>
            {filteredProducts.map((product) => (
              <div
                key={product.slug || product._id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1.5px solid #e8dfc9',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 30px rgba(43, 35, 25, 0.05)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="card-khushbu-hover"
              >
                {/* Image Container with Badges */}
                <div style={{
                  height: '230px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#19140e'
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
                  />

                  {/* Gradient Shadow Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(25, 20, 14, 0.75) 100%)'
                  }} />

                  {/* Top-Left Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(43, 35, 25, 0.9)',
                    backdropFilter: 'blur(10px)',
                    color: '#9fc152',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    border: '1px solid rgba(107, 142, 35, 0.4)'
                  }}>
                    {product.categoryLabel || 'Wheat Flour'}
                  </div>

                  {/* Bottom-Right Purity Badge */}
                  {product.specifications?.purity && (
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      backgroundColor: '#6b8e23',
                      color: '#ffffff',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                    }}>
                      <ShieldCheck size={14} /> {product.specifications.purity}
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  {/* Tagline / Subtitle */}
                  {product.tagline && (
                    <div style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#d99b38',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.35rem'
                    }}>
                      {product.tagline}
                    </div>
                  )}

                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    color: '#2b2319',
                    marginBottom: '0.6rem',
                    lineHeight: 1.25
                  }}>
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#55493b',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem',
                    flexGrow: 1
                  }}>
                    {product.description}
                  </p>

                  {/* Key Specifications Chips */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.5rem',
                    backgroundColor: '#faf7f2',
                    border: '1px solid #e8dfc9',
                    borderRadius: '12px',
                    padding: '0.75rem',
                    marginBottom: '1.25rem'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#888888', fontWeight: 600 }}>Moisture Level</div>
                      <div style={{ fontSize: '0.82rem', color: '#2b2319', fontWeight: 800 }}>{product.specifications?.moisture || 'Max 11.5%'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#888888', fontWeight: 600 }}>Gluten Value</div>
                      <div style={{ fontSize: '0.82rem', color: '#2b2319', fontWeight: 800 }}>{product.specifications?.gluten || 'Min 9.5% Wet'}</div>
                    </div>
                  </div>

                  {/* Packaging Options */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#6b8e23', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.45rem' }}>
                      Available Packaging Formats:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {product.packageSizes?.map((size, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            color: '#2b2319',
                            backgroundColor: '#faf7f2',
                            padding: '0.22rem 0.6rem',
                            borderRadius: '6px',
                            border: '1px solid #e8dfc9'
                          }}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e8dfc9'
                  }}>
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1, padding: '0.6rem 0.5rem', fontSize: '0.82rem' }}
                    >
                      Specifications
                    </button>

                    <button
                      onClick={() => onQuickInquiry(product)}
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1, padding: '0.6rem 0.5rem', fontSize: '0.82rem' }}
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
