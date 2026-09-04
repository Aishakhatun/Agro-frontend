import React, { useState, useEffect } from 'react';
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
  CheckCircle2, 
  Layers, 
  Sprout,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products', icon: Layers },
  { id: 'atta', label: 'Chakki Whole Wheat Atta', icon: Wheat },
  { id: 'grain', label: 'MP Wheat Grain', icon: Wheat },
  { id: 'bajra', label: 'Bajra (Pearl Millet)', icon: Sprout },
  { id: 'pulses', label: 'Pulses & Dal', icon: Package }
];

export default function ProductShowcase({ products, onSelectProduct, onQuickInquiry }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Robust category matching for Khushbu Agro Industries full catalog
  const isCategoryMatch = (item, catId) => {
    if (catId === 'all') return true;
    const catLower = (item.category || '').toLowerCase();
    const labelLower = (item.categoryLabel || '').toLowerCase();
    const nameLower = (item.name || '').toLowerCase();

    if (catId === 'atta') {
      return catLower === 'atta' || catLower === 'toor' || labelLower.includes('atta') || nameLower.includes('atta');
    }
    if (catId === 'grain') {
      return catLower === 'grain' || catLower === 'rice' || (labelLower.includes('wheat') && !labelLower.includes('atta')) || (nameLower.includes('wheat') && !nameLower.includes('atta'));
    }
    if (catId === 'bajra') {
      return catLower === 'bajra' || labelLower.includes('bajra') || labelLower.includes('millet') || nameLower.includes('bajra');
    }
    if (catId === 'pulses') {
      return catLower === 'pulses' || labelLower.includes('pulse') || labelLower.includes('dal') || nameLower.includes('pulse');
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

  // In mobile mode, display 5 products unless the user clicks "See More"
  const displayedProducts = isMobile && !showAllMobile 
    ? filteredProducts.slice(0, 5) 
    : filteredProducts;

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
          <div className="product-category-filters">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="product-category-pill"
                  style={{
                    padding: '0.65rem 1.15rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    border: isActive ? '1.5px solid #379237' : '1.5px solid #e8dfc9',
                    background: isActive 
                      ? 'linear-gradient(135deg, #54b435 0%, #379237 100%)' 
                      : '#ffffff',
                    color: isActive ? '#ffffff' : '#2b2319',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive 
                      ? '0 6px 20px -2px rgba(84, 180, 53, 0.45)' 
                      : '0 2px 6px rgba(0,0,0,0.02)',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  <Icon size={16} color={isActive ? '#ffffff' : '#54b435'} />
                  <span>{cat.label}</span>
                  <span style={{
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.28)' : '#edfbe2',
                    color: isActive ? '#ffffff' : '#2d7a2d',
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    fontWeight: 900,
                    border: isActive ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(84,180,53,0.3)'
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
            padding: '4rem 1.5rem',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '2px dashed #e8dfc9',
            maxWidth: '540px',
            margin: '0 auto'
          }}>
            <Package size={48} color="#54b435" style={{ marginBottom: '1.2rem' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#2b2319', marginBottom: '0.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
              No matching wheat products found
            </h3>
            <p style={{ color: '#666666', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
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
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem'
            }}>
              {displayedProducts.map((product) => (
                <div
                  key={product.slug || product._id}
                  onClick={() => onSelectProduct(product)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '22px',
                    border: '1.5px solid #e8dfc9',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 25px rgba(43, 35, 25, 0.05)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  className="card-khushbu-hover"
                >
                  {/* Image Container with Badges */}
                  <div style={{
                    height: '260px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#f9f6f0',
                    borderBottom: '1px solid #e8dfc9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.25rem'
                  }}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      loading="lazy"
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 10px 18px rgba(43, 35, 25, 0.18))',
                        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />

                    {/* Top-Left Category Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      backgroundColor: 'rgba(43, 35, 25, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#9fc152',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      border: '1px solid rgba(107, 142, 35, 0.4)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                      {product.categoryLabel || 'Wheat Flour'}
                    </div>

                    {/* Top-Right Net Weight Badge */}
                    {product.netWeight && (
                      <div style={{
                        position: 'absolute',
                        top: '0.85rem',
                        right: '0.85rem',
                        backgroundColor: '#6b8e23',
                        color: '#ffffff',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '8px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                      }}>
                        {product.netWeight}
                      </div>
                    )}

                    {/* Bottom Purity Badge */}
                    {product.specifications?.purity && (
                      <div style={{
                        position: 'absolute',
                        bottom: '0.85rem',
                        right: '0.85rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(6px)',
                        color: '#2b2319',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        border: '1px solid #d4c5a9',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}>
                        <ShieldCheck size={13} color="#6b8e23" /> {product.specifications.purity}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickInquiry(product);
                        }}
                        className="btn btn-primary btn-sm"
                        style={{ flex: 1, padding: '0.6rem 0.5rem', fontSize: '0.82rem' }}
                      >
                        Contact Us <ArrowUpRight size={15} />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Mobile "See More" / "Show Less" Button */}
            {isMobile && filteredProducts.length > 5 && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2.5rem'
              }}>
                {!showAllMobile ? (
                  <button
                    onClick={() => setShowAllMobile(true)}
                    className="btn btn-primary btn-lg"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.85rem 2rem',
                      borderRadius: '9999px',
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      boxShadow: '0 8px 25px rgba(84, 180, 53, 0.35)',
                      cursor: 'pointer'
                    }}
                  >
                    <Sparkles size={18} />
                    <span>See More Products ({filteredProducts.length - 5} More)</span>
                    <ChevronDown size={18} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowAllMobile(false);
                      const el = document.getElementById('products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-outline btn-md"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.75rem 1.8rem',
                      borderRadius: '9999px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    <span>Show Less (Displaying 5 Only)</span>
                    <ChevronUp size={16} />
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
