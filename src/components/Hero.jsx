import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Package, 
  Truck, 
  Globe2, 
  Wheat,
  Zap,
  Leaf,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=85',
    kicker: 'KAI KHUSHBU WHEAT MILLS SINCE 1988',
    title: 'Pure MP Sharbati Wheat & Chakki Fresh Atta.',
    desc: 'Processing & supplying 100% natural Whole Wheat Flour (Atta), Superfine Maida, Sooji/Semolina, and Durum Wheat for bakeries, retail shelf brands, and global exports.'
  },
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=85',
    kicker: 'COLD AIR-COOLED STONE CHAKKI MILLING',
    title: 'Natural Sweetness & 12+ Hour Soft Rotis Guaranteed.',
    desc: 'Milled from sun-drenched golden kernels with zero chemical bleaching, preserving 100% natural wheat germ nutrition and rich digestive bran.'
  },
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85',
    kicker: 'COMMERCIAL ROLLER MILLS & BULK EXPORT',
    title: 'Export-Grade Flour Packed To Exact Mesh Specifications.',
    desc: 'From 1kg consumer pouches to 50kg HDPE export bags and container FCL consignments. Certified by FSSAI, ISO 22000, and APEDA.'
  }
];

export default function Hero({ onOpenQuote, onSelectPath }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // 3 SECONDS AUTOMATIC TRANSITION AS REQUESTED BY USER
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const slide = heroSlides[activeSlide];

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#19140e', color: '#ffffff' }}>
      {/* Background Images Slider with 3-Second Smooth Transitions */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {heroSlides.map((s, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === activeSlide ? 0.48 : 0,
              transform: idx === activeSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 3s ease-out',
            }}
          />
        ))}
        {/* Warm Golden Vignette Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 30%, rgba(217, 155, 56, 0.22) 0%, rgba(43, 35, 25, 0.85) 60%, rgba(25, 20, 14, 0.98) 100%)'
        }} />
      </div>

      {/* Floating Badges */}
      <div 
        className="animate-float hidden-mobile"
        style={{
          position: 'absolute',
          top: '18%',
          right: '5%',
          zIndex: 10,
          backgroundColor: 'rgba(43, 35, 25, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid #6b8e23',
          borderRadius: '18px',
          padding: '0.85rem 1.35rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          color: '#ffffff',
          boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          backgroundColor: '#6b8e23',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Wheat size={22} />
        </div>
        <div>
          <div style={{ fontSize: '0.78rem', color: '#9fc152', fontWeight: 800 }}>100% Sharbati Grain</div>
          <div style={{ fontSize: '0.72rem', color: '#efe8d8' }}>Chakki Fresh · 0% Maida</div>
        </div>
      </div>

      <div 
        className="animate-float hidden-mobile"
        style={{
          position: 'absolute',
          bottom: '24%',
          left: '5%',
          zIndex: 10,
          backgroundColor: 'rgba(43, 35, 25, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid #d99b38',
          borderRadius: '18px',
          padding: '0.85rem 1.35rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          color: '#ffffff',
          boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          backgroundColor: '#d99b38',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Zap size={22} />
        </div>
        <div>
          <div style={{ fontSize: '0.78rem', color: '#f4be6b', fontWeight: 800 }}>300+ MT Daily Milling</div>
          <div style={{ fontSize: '0.72rem', color: '#efe8d8' }}>Roller &amp; Chakki Lines</div>
        </div>
      </div>

      <div className="container-custom" style={{
        position: 'relative',
        zIndex: 2,
        paddingTop: '5rem',
        paddingBottom: '4.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Kicker Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.55rem',
          backgroundColor: 'rgba(107, 142, 35, 0.22)',
          border: '1.5px solid rgba(107, 142, 35, 0.5)',
          color: '#9fc152',
          padding: '0.45rem 1.35rem',
          borderRadius: '9999px',
          fontSize: '0.82rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(107, 142, 35, 0.25)'
        }}>
          <Leaf size={15} color="#6b8e23" />
          <span>{slide.kicker}</span>
        </div>

        {/* Title */}
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(1.75rem, 5vw, 4.5rem)',
          fontWeight: 900,
          lineHeight: 1.12,
          maxWidth: '960px',
          marginBottom: '1.25rem',
          textShadow: '0 4px 25px rgba(0,0,0,0.8)',
          fontFamily: 'var(--font-heading)'
        }}>
          {slide.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          color: '#efe8d8',
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          maxWidth: '800px',
          lineHeight: 1.65,
          marginBottom: '2.5rem',
          fontWeight: 500
        }}>
          {slide.desc}
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1.25rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3.5rem'
        }}>
          <button
            onClick={() => onOpenQuote('Wholesale Wheat & Atta Inquiry')}
            className="btn btn-primary btn-lg"
            style={{ minWidth: '220px' }}
          >
            Get Wholesale Atta Quote <ArrowRight size={18} />
          </button>

          <a
            href="#products"
            className="btn btn-outline-white btn-lg"
            style={{ minWidth: '220px' }}
          >
            Explore Wheat Range
          </a>
        </div>

        {/* 3-Second Animated Slidebar Controls & Progress Indicator */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {heroSlides.map((_, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setActiveSlide(i)}
                    style={{
                      width: i === activeSlide ? '36px' : '10px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: i === activeSlide ? '#6b8e23' : 'rgba(255,255,255,0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {/* 3-Second Animated Progress Bar inside active dot */}
                    {i === activeSlide && (
                      <div
                        key={activeSlide}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          width: '100%',
                          backgroundColor: '#9fc152',
                          animation: 'slide3sProgress 3s linear infinite'
                        }}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#9fc152', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            ⚡ 3-Second Auto Slidebar Transition
          </div>
        </div>

        {/* 3 Buyer Path Cards */}
        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          textAlign: 'left'
        }}>
          {/* Path 1 */}
          <div 
            onClick={() => onSelectPath('Retail & Distribution')}
            className="card-khushbu-dark"
            style={{ padding: '1.5rem', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'rgba(107, 142, 35, 0.25)',
                border: '1.5px solid rgba(107, 142, 35, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9fc152'
              }}>
                <Package size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#9fc152', fontWeight: 800, letterSpacing: '0.05em' }}>
                  Consumer &amp; Kitchen Atta
                </span>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                  Retail Atta Pouches
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#efe8d8', lineHeight: 1.55, margin: 0 }}>
              1kg, 5kg &amp; 10kg branded laminated pouches for supermarkets, grocery stores, and households.
            </p>
          </div>

          {/* Path 2 */}
          <div 
            onClick={() => onSelectPath('Wholesale Supply')}
            className="card-khushbu-dark"
            style={{ padding: '1.5rem', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'rgba(217, 155, 56, 0.25)',
                border: '1.5px solid rgba(217, 155, 56, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f4be6b'
              }}>
                <Truck size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#f4be6b', fontWeight: 800, letterSpacing: '0.05em' }}>
                  Bakery &amp; Commercial
                </span>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                  Bulk Flour &amp; Maida Supply
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#efe8d8', lineHeight: 1.55, margin: 0 }}>
              25kg to 50kg PP woven bags of Maida, Sooji, Whole Wheat Atta, and Bran for commercial bakeries.
            </p>
          </div>

          {/* Path 3 */}
          <div 
            onClick={() => onSelectPath('Export & International Trade')}
            className="card-khushbu-dark"
            style={{ padding: '1.5rem', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: 'rgba(107, 142, 35, 0.25)',
                border: '1.5px solid rgba(107, 142, 35, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b8e23'
              }}>
                <Globe2 size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#9fc152', fontWeight: 800, letterSpacing: '0.05em' }}>
                  International Trade
                </span>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, margin: 0 }}>
                  Containerized Wheat Export
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#efe8d8', lineHeight: 1.55, margin: 0 }}>
              APEDA &amp; ISO certified container shipments (FCL / LCL) of MP Sharbati Grain and Durum Wheat Flour.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide3sProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
