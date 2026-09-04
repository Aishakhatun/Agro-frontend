import React, { useState, useEffect } from 'react';
import { 
  product10, 
  product17, 
  product13,
  product16,
  product1
} from '../assets';
import { 
  ArrowRight, 
  Package, 
  Truck, 
  Globe2, 
  Wheat,
  Zap,
  Leaf,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import FloatingWheatBackground from './FloatingWheatBackground';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=85',
    productImg: product10,
    productName: 'Super SIXER Whole Wheat Chakki Fresh Atta',
    productNet: '25 Kg · 0% Maida 100% Atta',
    kicker: 'KAI KHUSHBU WHEAT MILLS SINCE 1988',
    title: 'Pure MP Sharbati Wheat & Chakki Fresh Atta.',
    desc: '100% natural Whole Wheat Atta, Superfine Maida & Sooji for bakeries, retail brands, and global exports.'
  },
  {
    image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1600&q=85',
    productImg: product17,
    productName: 'Khushbu Khajana 100% MP Sharbati Wheat',
    productNet: '30 Kg · Golden Amber Kernels',
    kicker: 'COLD AIR-COOLED STONE CHAKKI MILLING',
    title: 'Natural Sweetness & 12+ Hour Soft Rotis Guaranteed.',
    desc: 'Cold air-cooled stone chakki milling preserving 100% natural wheat nutrition with zero chemical bleaching.'
  },
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85',
    productImg: product13,
    productName: 'Luxury Natural Whole Wheat Chakki Atta',
    productNet: '5 Kg Pouch · Retail Masterpack',
    kicker: 'COMMERCIAL ROLLER MILLS & BULK EXPORT',
    title: 'Export-Grade Flour Packed To Exact Mesh Specifications.',
    desc: '1kg consumer pouches to 50kg export bags. Certified by FSSAI, ISO 22000, and APEDA.'
  }
];

export default function Hero({ onOpenQuote, onSelectPath, onSelectProduct, products }) {
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
              opacity: idx === activeSlide ? 0.55 : 0,
              transform: idx === activeSlide ? 'scale(1.04)' : 'scale(1)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 3s ease-out',
            }}
          />
        ))}
        {/* Warm Golden Vignette Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 25%, rgba(217, 155, 56, 0.28) 0%, rgba(35, 28, 18, 0.82) 55%, rgba(18, 14, 10, 0.97) 100%)'
        }} />
      </div>

      {/* Floating Animated Wheat Layer inside Hero Banner */}
      <FloatingWheatBackground isAbsolute={true} zIndex={2} count={28} opacityBoost={1.35} />

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
        zIndex: 5,
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
          backgroundColor: 'rgba(107, 142, 35, 0.28)',
          border: '1.5px solid rgba(136, 220, 106, 0.65)',
          color: '#a3e635',
          padding: '0.45rem 1.35rem',
          borderRadius: '9999px',
          fontSize: '0.82rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 22px rgba(107, 142, 35, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)'
        }}>
          <Leaf size={15} color="#88dc6a" />
          <span>{slide.kicker}</span>
        </div>

        {/* Title Container with Stable Minimum Height */}
        <div style={{ minHeight: 'clamp(3.8rem, 8vw, 6.8rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(1.75rem, 5vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            maxWidth: '960px',
            textShadow: '0 4px 25px rgba(0,0,0,0.85)',
            fontFamily: 'var(--font-heading)',
            margin: 0
          }}>
            {slide.title}
          </h1>
        </div>

        {/* Subtitle Container with Stable Minimum Height */}
        <div style={{ minHeight: 'clamp(3.8rem, 6vw, 4.8rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.75rem' }}>
          <p style={{
            color: '#efe8d8',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '800px',
            lineHeight: 1.65,
            fontWeight: 500,
            margin: 0,
            textShadow: '0 2px 12px rgba(0,0,0,0.7)'
          }}>
            {slide.desc}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3.5rem',
          width: '100%',
          maxWidth: '520px'
        }}>
          <button
            onClick={() => onOpenQuote('Wholesale Wheat & Atta Inquiry')}
            className="btn btn-primary btn-lg"
            style={{ flex: '1 1 200px' }}
          >
            Contact Us <ArrowRight size={18} />
          </button>

          <a
            href="#products"
            className="btn btn-outline-white btn-lg"
            style={{ flex: '1 1 200px' }}
          >
            Explore Our Products
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
                      backgroundColor: i === activeSlide ? '#54b435' : 'rgba(255,255,255,0.3)',
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
                          backgroundColor: '#88dc6a',
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

          <div style={{ fontSize: '0.72rem', color: '#88dc6a', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            ⚡ 3-Second Auto Slidebar Transition
          </div>
        </div>

        {/* 3 Buyer Path Cards */}
        <div style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.5rem',
          textAlign: 'left'
        }}>
          {/* Path 1 */}
          <div 
            onClick={() => onSelectPath('Retail & Distribution')}
            className="card-khushbu-dark"
            style={{ padding: 'clamp(1.2rem, 3vw, 1.5rem)', cursor: 'pointer' }}
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
            <p style={{ fontSize: '0.85rem', color: '#efe8d8', lineHeight: 1.5, margin: 0 }}>
              1kg, 5kg &amp; 10kg branded pouches for retail stores and households.
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
                  Bulk Flour &amp; Maida
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#efe8d8', lineHeight: 1.5, margin: 0 }}>
              25kg to 50kg bags of Atta, Maida &amp; Sooji for commercial bakeries.
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
                  Containerized Export
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#efe8d8', lineHeight: 1.5, margin: 0 }}>
              Certified container shipments (FCL/LCL) of MP Sharbati wheat &amp; flour.
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
