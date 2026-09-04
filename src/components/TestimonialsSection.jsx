import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Award, 
  CheckCircle2,
  Building2,
  Wheat,
  Play,
  Pause
} from 'lucide-react';

const pressLogos = [
  { text: 'FSSAI CERTIFIED MILL 2026', icon: Award },
  { text: 'TOP WHEAT & FLOUR EXPORTER', icon: Wheat },
  { text: 'APEDA GOLD MEDAL RECOGNITION', icon: Sparkles },
  { text: 'ISO 22000 FSMS AUDITED PLANT', icon: ShieldCheckIcon },
  { text: 'BUHLER ROLLER MILL PARTNER', icon: Building2 },
  { text: 'ALL INDIA BAKERS ASSOCIATION APPROVED', icon: CheckCircle2 }
];

function ShieldCheckIcon(props) {
  return <Award {...props} />;
}

const testimonials = [
  {
    id: 1,
    name: 'Mr. Vikram Patel',
    role: 'Managing Director',
    company: 'Golden Crust Bakeries Ltd, Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    category: 'Commercial Bakery',
    quote: 'Khushbu Agro has been supplying Superfine Maida and Sooji for our bakery lines since 2016. The flour water absorption and dough elasticity remain 100% consistent lot after lot. Their timely dispatch is unmatched.'
  },
  {
    id: 2,
    name: 'Mr. Ahmed Al-Maktoum',
    role: 'Head of Agro Procurement',
    company: 'Emirates Food & Grain Imports, Dubai (UAE)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    category: 'International Trade',
    quote: 'We regularly import 20ft FCL container shipments of KAI Khushbu MP Sharbati Whole Wheat Atta to Dubai. The phytosanitary standards, moisture control, and 25kg PP export packaging meet strict UAE municipality requirements.'
  },
  {
    id: 3,
    name: 'Mrs. Sunita Sharma',
    role: 'Supply Chain Manager',
    company: 'FreshMart Hypermarkets Pan-India',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    category: 'Retail Grocery Chain',
    quote: 'Khushbu Chakki Fresh Atta is one of our top-selling consumer wheat flour brands across our 45 hypermarkets. Rotis prepared with Khushbu Atta stay soft for over 12 hours. Our retail shoppers love the sweet natural aroma.'
  },
  {
    id: 4,
    name: 'Mr. Rajesh Verma',
    role: 'General Manager',
    company: 'Annapurna Foods & Industrial Catering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    category: 'Institutional Catering',
    quote: 'Serving over 25,000 meals daily requires reliable flour consistency. Khushbu stone chakki whole wheat flour absorbs 70%+ water, giving maximum roti yield with zero dough stickiness. Excellent partner for 8+ years.'
  },
  {
    id: 5,
    name: 'Mr. Dhiru Shah',
    role: 'Proprietor',
    company: 'Simpolo Grain Traders, Rajkot',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    category: 'Wholesale Trade',
    quote: 'Their MP Sharbati & Lokwan wheat grains are 99.8% Sortex clean with zero dust or stones. As wholesale dealers, we receive prompt delivery and transparent commercial terms on every truckload.'
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  // 2-SECOND AUTOMATIC CAROUSEL TRANSITION AS REQUESTED
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); // 2000ms = 2 seconds
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Touch Swipe Handlers for Mobile Devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  return (
    <section className="section" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      {/* 1. Auto-Scrolling Press & Industry Recognition Marquee Ticker */}
      <div style={{
        backgroundColor: '#2b2319',
        padding: '1.1rem 0',
        marginBottom: '4.5rem',
        borderTop: '2px solid #6b8e23',
        borderBottom: '2px solid #6b8e23',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}>
        <div className="marquee-container">
          <div className="marquee-content">
            {pressLogos.concat(pressLogos).concat(pressLogos).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: 'rgba(107, 142, 35, 0.2)',
                    border: '1px solid rgba(107, 142, 35, 0.4)',
                    padding: '0.5rem 1.35rem',
                    borderRadius: '9999px',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={16} color="#6b8e23" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Sparkles size={14} /> Client Testimonials
          </span>
          <h2 className="section-title">
            What Our <span style={{ color: '#6b8e23' }}>Customers &amp; Partners</span> Say
          </h2>
          <p className="section-subtitle">
            Trusted by commercial bakeries, retail hypermarkets, international trade importers, and food processors across India and global markets.
          </p>
        </div>

        {/* 2. Auto-Scrolling Testimonial Carousel (Changes Every 2 Seconds) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '1rem 0',
            overflow: 'hidden'
          }}
        >
          {/* Main Cards Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '390px',
            width: '100%'
          }}>
            {testimonials.map((item, idx) => {
              const total = testimonials.length;
              let diff = idx - activeIndex;
              if (diff < -Math.floor(total / 2)) diff += total;
              if (diff > Math.floor(total / 2)) diff -= total;

              const isActive = diff === 0;
              const isPrev = diff === -1;
              const isNext = diff === 1;

              let opacity = 0;
              let scale = 0.8;
              let translateX = '0%';
              let zIndex = 1;

              if (isActive) {
                opacity = 1;
                scale = 1;
                translateX = '0%';
                zIndex = 10;
              } else if (isPrev) {
                opacity = 0.35;
                scale = 0.88;
                translateX = '-75%';
                zIndex = 5;
              } else if (isNext) {
                opacity = 0.35;
                scale = 0.88;
                translateX = '75%';
                zIndex = 5;
              }

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className="card-khushbu"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 'calc(100% - 32px)',
                    maxWidth: '540px',
                    opacity: opacity,
                    transform: `translate(calc(-50% + ${translateX}), -50%) scale(${scale})`,
                    zIndex: zIndex,
                    pointerEvents: opacity > 0 ? 'auto' : 'none',
                    transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderRadius: '24px',
                    padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
                    border: isActive ? '2.5px solid #54b435' : '1.5px solid #e8dfc9',
                    backgroundColor: isActive ? '#ffffff' : '#faf7f2',
                    boxShadow: isActive 
                      ? '0 20px 45px -10px rgba(84, 180, 53, 0.25)' 
                      : '0 8px 20px rgba(0,0,0,0.04)',
                    cursor: 'pointer',
                    willChange: 'transform, opacity'
                  }}
                >
                  {/* Category Pill & Rating */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{
                      backgroundColor: '#eaf3d5',
                      color: '#5c7b1e',
                      border: '1px solid #9fc152',
                      padding: '0.3rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {item.category}
                    </span>

                    {/* 5-Star Gold Rating */}
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star key={sIdx} size={16} fill="#d99b38" color="#d99b38" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p style={{
                    fontSize: '1.02rem',
                    color: '#2b2319',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem',
                    fontWeight: 500,
                    fontStyle: 'italic'
                  }}>
                    "{item.quote}"
                  </p>

                  {/* Customer Profile Footer */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    borderTop: '1px solid #e8dfc9',
                    paddingTop: '1.25rem'
                  }}>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2.5px solid #6b8e23',
                        boxShadow: '0 4px 10px rgba(107, 142, 35, 0.3)'
                      }}
                    />
                    <div>
                      <h4 style={{ fontSize: '1.1rem', color: '#2b2319', fontWeight: 800, margin: 0 }}>
                        {item.name}
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: '#6b8e23', fontWeight: 700 }}>
                        {item.role}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                        {item.company}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left / Right Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="testimonial-prev-arrow"
            style={{
              position: 'absolute',
              top: '50%',
              left: '-20px',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '2px solid #6b8e23',
              color: '#2b2319',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              zIndex: 20,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6b8e23';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#2b2319';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="testimonial-next-arrow"
            style={{
              position: 'absolute',
              top: '50%',
              right: '-20px',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '2px solid #6b8e23',
              color: '#2b2319',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              zIndex: 20,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6b8e23';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#2b2319';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Clean Pagination Indicator Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.65rem',
            marginTop: '2.5rem'
          }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial slide ${i + 1}`}
                style={{
                  width: i === activeIndex ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: i === activeIndex ? '#6b8e23' : '#e8dfc9',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {i === activeIndex && !isPaused && (
                  <div
                    key={activeIndex}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: '#54b435',
                      animation: 'testimonial2sProgress 2s linear infinite'
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonial2sProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
